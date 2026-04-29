import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./apis/auth.api";
import { loginBodySchema } from "./schemas/auth.schema";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        const result = loginBodySchema.safeParse({
          username: credentials?.username,
          password: credentials?.password,
        });

        if (!result.success) throw new Error("Invalid username or password");

        const data = await login(result.data);

        if (!data.status) throw new Error(data.message);

        if (!data.payload?.user || !data.payload.token) {
          throw new Error("Invalid login response");
        }

        return {
          id: data.payload.user.id,
          accessToken: data.payload.token,
          user: data.payload.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user, trigger, session }) => {
      if (user) {
        token.user = user.user;
        token.accessToken = user.accessToken;
      }
      if (trigger === "update" && session) {
        token.user = session.user;
        token.accessToken = session.accessToken;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
};
