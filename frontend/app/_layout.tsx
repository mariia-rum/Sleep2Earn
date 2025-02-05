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
import "fast-text-encoding";
import "react-native-get-random-values";
import "@ethersproject/shims";
// Then import the expo router
import "expo-router/entry";
import AppKitProviders from "./AppKitProvider";
import "../src/crypto-polyfill.js";
import "react-native-get-random-values";
import { Buffer } from "buffer";
global.Buffer = Buffer;
// Initialize projectId and other configuration
const projectId = "e25b316b566a2f03268c9dc27f05348e";

const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://reown.com/appkit",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "myapp",
  },
};

const config = defaultConfig({ metadata });

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl:
    "https://eth-mainnet.g.alchemy.com/v2/yL9ZA07ibLzSdvSxv1fYpvuDmDZTZ3AG",
};

const chains = [mainnet];

// Create the AppKit instance
const AppKitProvider = createAppKit({
  projectId,
  chains,
  config,
  enableAnalytics: true,
});
console.log("AppKitProvider: ", AppKitProvider);

export default function RootLayout() {
  return (
    <AppKitProviders>
      <View style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </AppKitProviders>
  );
}
