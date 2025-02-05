import "../src/crypto-polyfill.js";
import React from "react";
import { AppKit } from "@reown/appkit-ethers5-react-native";

export default function AppKitProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <AppKit />
    </>
  );
}
