import AnimatedIntro from "@/components/AnimatedIntro";
import BottomSheetLogin from "@/components/BottomSheetLogin";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AnimatedIntro />
      <BottomSheetLogin />
    </View>
  );
}
