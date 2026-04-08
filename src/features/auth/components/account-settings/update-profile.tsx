"use client";

import useUpdateProfile from "../../hooks/use-update-profile";

export default function UpdateProfile() {
  const { isPending, error, updateProfile } = useUpdateProfile();

  // updateProfile({firstName, lastName})

  return <div></div>;
}
