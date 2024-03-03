import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const KitchenCard = ({ mutfak }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white rounded-lg space-y-1  border border-gray-200 h-[120px] w-[72px]"
      onPress={() => navigation.navigate("Restoranlar")}
    >
      <Image
        source={{ uri: mutfak.image }}
        className="rounded-t-lg w-[70px] h-[74px]"
      />
      <Text className="text-center text-xs max-w-[80]">{mutfak.name}</Text>
    </TouchableOpacity>
  );
};

export default KitchenCard;
