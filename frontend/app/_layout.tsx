import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import "@walletconnect/react-native-compat";
import "@ethersproject/shims";
import {
  createAppKit,
  defaultConfig,
  AppKit,
} from "@reown/appkit-ethers5-react-native";

// Initialize projectId and other configurations
const projectId = "59198889d7df78b39ea70d871d0ec131";

const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://reown.com/appkit",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
  },
};

const config = defaultConfig({ metadata });

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const polygon = {
  chainId: 137,
  name: "Polygon",
  currency: "MATIC",
  explorerUrl: "https://polygonscan.com",
  rpcUrl: "https://polygon-rpc.com",
};

const chains = [mainnet, polygon];

// Create the AppKit instance
createAppKit({
  projectId,
  chains,
  config,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Stack Navigator for managing screens */}
      <Stack />

      {/* AppKit for wallet connection */}
      <AppKit />
    </View>
  );
}
