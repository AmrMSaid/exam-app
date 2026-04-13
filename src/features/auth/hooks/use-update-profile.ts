import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "../lib/apis/user.api";
import { useSession } from "next-auth/react";

export default function useUpdateProfile() {
  const { update } = useSession();

  const { isPending, error, mutate } = useMutation({
    mutationFn: updateProfileAction,
    onSuccess: (data) => {
      console.log(data);
      update({
        user: {
          ...data.payload,
          firstName: "",
        },
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    isPending,
    error,
    updateProfile: mutate,
  };
}
