import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const StarTag = () => {
  return (
    <View className="border border-orange-200 rounded-r-xl rounded-l-full bg-white pr-1">
      <View className="flex flex-row items-center space-x-1">
        <View className="border rounded-full border-orange-200 flex flex-row items-center">
          <FontAwesome name="star" size={18} color="orange" />
        </View>
        <View className="flex flex-col items-center">
          <Text className="text-[8px] text-orange-500 font-bold">Semtin</Text>
          <Text className="text-[8px] text-orange-500 font-bold">Yıldızı</Text>
        </View>
      </View>
    </View>
  );
};

export default StarTag;
