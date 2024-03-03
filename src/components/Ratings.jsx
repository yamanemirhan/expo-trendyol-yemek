import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Ratings = () => {
  return (
    <View className="flex flex-row space-x-2 items-center">
      <View className="flex flex-col items-center justify-center bg-green-600 rounded-md w-[45px] h-[45px]">
        <View className="flex flex-row items-center space-x-1">
          <FontAwesome name="star" size={14} color="white" />
          <Text className="text-white font-bold text-sm">4.8</Text>
        </View>
        <View>
          <Text className="text-[10px] text-white">(2000+)</Text>
        </View>
      </View>
      <View className="flex flex-col items-center justify-center bg-green-100 rounded-md w-[45px] h-[45px]">
        <View>
          <Text className="text-[10px] font-medium">Teslimat</Text>
        </View>
        <View>
          <Text className="text-sm text-green-700 font-semibold">4.8</Text>
        </View>
      </View>
      <View className="flex flex-col items-center justify-center bg-green-100 rounded-md w-[45px] h-[45px]">
        <View>
          <Text className="text-[10px] font-medium">Servis</Text>
        </View>
        <View>
          <Text className="text-sm text-green-700 font-medium">4.6</Text>
        </View>
      </View>
      <View className="flex flex-col items-center justify-center bg-green-100 rounded-md w-[45px] h-[45px]">
        <View>
          <Text className="text-[10px] font-medium">Lezzet</Text>
        </View>
        <View>
          <Text className="text-sm text-green-700 font-medium">4.7</Text>
        </View>
      </View>
    </View>
  );
};

export default Ratings;
