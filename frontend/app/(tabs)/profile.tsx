import { Text, View, StyleSheet } from "react-native";
import { useAppKitAccount } from '@reown/appkit-ethers5-react-native'

export default function ProfileScreen() {
  const { address, chainId, isConnected } = useAppKitAccount()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
      <Text>{address}</Text>
    </View>
  );
}
