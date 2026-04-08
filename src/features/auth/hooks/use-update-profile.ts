import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "../lib/apis/user.api";

export default function useUpdateProfile() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: updateProfileAction,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
    return {
        isPending,
        error,
        updateProfile: mutate,
    }
}
