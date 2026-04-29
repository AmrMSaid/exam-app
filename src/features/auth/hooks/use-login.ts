import { useMutation } from "@tanstack/react-query";
import { ILoginFields } from "../lib/types/auth";
import { signIn } from "next-auth/react";

export default function useLogin() {
  return useMutation({
    mutationFn: async (fields: ILoginFields) => {
      const response = await signIn("credentials", {
        username: fields.username,
        password: fields.password,
        redirect: false,
      });

      if (!response?.ok)
        throw new Error(response?.error || "Somthing went wrong");

      return response;
    },
    onSuccess: () => {
      const callbackUrl =
        new URLSearchParams(location.search).get("callbackUrl") || "/";

      location.href = callbackUrl;
    },
  });
}
