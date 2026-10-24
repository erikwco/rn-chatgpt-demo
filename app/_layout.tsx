import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  // ----------------------------------------------------
  // router instance
  // ----------------------------------------------------

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          presentation: 'modal',
          title: '',
          headerLeft: CloseButtonHeader
        }}
      />
    </Stack>
  );
}


const CloseButtonHeader = () => {
  const router = useRouter();
  return <TouchableOpacity onPress={() => router.back()}>
    <Ionicons name="close-outline" size={28} />
  </TouchableOpacity>
}

