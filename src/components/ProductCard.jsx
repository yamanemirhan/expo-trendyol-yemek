import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

const ProductCard = () => {
  return (
    <View className="flex-row justify-between p-4 bg-white border-b border-gray-300">
      <View className="flex-1 mr-3 space-y-1">
        <Text className="font-semibold text-sm">
          2 Adet Orta Boy Pizza & Sos (199 + 199)
        </Text>
        <Text className="text-gray-600 text-xs">
          Kampanya Margarita, Nefis, New York, Los Angeles, Boston, Karışık,
          Gamer, Seattle, Sacramento, Chicago pizzalarında geçerlidir.
        </Text>
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity className="border border-orange-500 bg-orange-500 rounded-md px-2">
            <Entypo name="plus" size={20} color="white" />
          </TouchableOpacity>
          <Text className="ml-4 line-through text-gray-600">457.60 TL</Text>
          <Text className="ml-4 text-orange-600 font-semibold">398 TL</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <AntDesign name="like1" size={18} color="green" />
          <Text className="text-green-600 font-semibold ml-2">
            %97 Beğenildi
          </Text>
          <Text className="text-gray-600 text-xs ml-2">(38 Değerlendirme)</Text>
        </View>
      </View>
      <View className="w-20 h-20 border rounded-md border-gray-200">
        <Image
          source={{
            uri: "https://dwfdzxoxxagos.cloudfront.net/images/products/partiterra1.png",
          }}
          className="w-full h-full rounded-md"
        />
      </View>
    </View>
  );
};

export default ProductCard;
