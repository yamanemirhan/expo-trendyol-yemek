import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const AddExtraProductCard = ({ product }) => {
  return (
    <View className="bg-white p-2 h-20 w-32 mr-4 rounded-lg">
      <Text className="text-xs">{product.name}</Text>
      <View className="flex flex-row items-center justify-between mt-auto">
        <Text className="text-orange-500 font-medium">{product.fiyat} TL</Text>
        <TouchableOpacity className="bg-orange-500 rounded-[4px] px-1">
          <Entypo name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddExtraProductCard;
