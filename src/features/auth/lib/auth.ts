import { LoginResponse } from "@/features/auth/lib/types/auth";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data: ApiResponse<LoginResponse> = await response.json();

        if (!data.status) {
          throw new Error(data.message);
        }
        const loginData = data.payload!;

        return {
          id: loginData.user.id,
          accessToken: loginData.token,
          user: loginData.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user, trigger }) => {
      if (user && (trigger === 'signIn' || trigger === 'update')) {
        token.user = user.user;
        token.token = user.accessToken;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;

      return session;
    },
  },
};
