import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CouponCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="border rounded-md border-gray-300 p-2 space-y-2">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center space-x-2">
            <View className="border border-gray-100 bg-orange-100 rounded-md p-2">
              <MaterialCommunityIcons name="ticket" size={24} color="orange" />
            </View>
            <Text className="font-bold">Trendyol Yemek İndirim Kuponu</Text>
          </View>
          <Text className="font-bold text-base text-orange-600">400 TL</Text>
        </View>
        <View className="w-full h-1 bg-gray-200" />
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center space-x-2">
            <Text className="text-xs">Başlangıç: 07.02.2024</Text>
            <Text className="text-xs">Bitiş: 13.02.2024</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Restoranlar")}
            className="border border-orange-600 rounded-xl py-1 px-2"
          >
            <Text className="text-xs text-orange-600 font-semibold">
              Restoranları Gör
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* KOŞULLAR */}
      <View className="py-1 px-2 flex flex-row items-center justify-between border border-gray-300 rounded-md">
        <Text className="text-xs">Koşullar</Text>
        <Entypo name="chevron-down" size={24} color="gray" />
      </View>
    </View>
  );
};

export default CouponCard;
