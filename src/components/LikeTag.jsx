import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LikeTag = ({ liked }) => {
  return (
    <View className="border border-gray-200 rounded-full bg-white p-1">
      <AntDesign
        name={liked ? "heart" : "hearto"}
        size={16}
        color={liked ? "orange" : "black"}
      />
    </View>
  );
};

export default LikeTag;
