import React from "react";
import ReactQueryProvider from "./query-provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
