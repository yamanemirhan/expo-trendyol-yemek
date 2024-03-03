import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const StarAndCommentTag = ({ puan, yorum }) => {
  return (
    <View className="bg-green-600 py-[2] px-1 flex flex-row items-center space-x-1 rounded-r-md">
      <FontAwesome name="star" size={12} color="white" />
      <Text className="text-xs text-white font-bold">{puan}</Text>
      <Text className="text-xs text-white font-bold">({yorum}+)</Text>
    </View>
  );
};

export default StarAndCommentTag;
