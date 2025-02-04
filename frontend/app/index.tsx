import { Text, View } from "react-native";
import { AppKitButton } from "@reown/appkit-ethers5-react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <AppKitButton />
    </View>
  );
}
