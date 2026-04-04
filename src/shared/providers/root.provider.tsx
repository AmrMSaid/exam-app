import React from "react";
import ReactQueryProvider from "./react-query.provider";
import NextAuthProvider from "./next-auth.provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </ReactQueryProvider>
  );
}
