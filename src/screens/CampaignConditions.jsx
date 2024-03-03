import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const CampaignConditions = () => {
  const route = useRoute();
  const { kampanya } = route.params;

  const navigation = useNavigation();

  return (
    <View className="py-2 flex-1">
      <View className="p-3 bg-white border-y border-y-gray-200 space-y-2">
        <Image
          source={{ uri: kampanya.image }}
          className="w-full h-28 rounded-md"
        />
        <Text className="font-semibold">{kampanya.name}</Text>
      </View>
      <View className="mt-3 p-3 bg-white border-y border-y-gray-200 space-y-2">
        <Text className="font-semibold">Kampanya Koşulları</Text>
        {kampanya.kosullar?.length > 0 &&
          kampanya.kosullar.map((kosul, index) => (
            <View key={index} className="flex flex-row">
              <Text>{index + 1}.</Text>
              <Text className="text-gray-700 ml-2">{kosul.text}</Text>
            </View>
          ))}
      </View>
      <View className="bg-white mt-auto w-full h-20 flex items-center justify-center px-3">
        <TouchableOpacity
          onPress={() => navigation.navigate("Restoranlar")}
          className="border w-full border-white rounded-2xl bg-orange-500 py-[10px]"
        >
          <Text className="text-white text-center font-semibold text-base">
            Restoranları Gör
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CampaignConditions;
