import { View, Text } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const AddressOverview = () => {
  return (
    <View className="border border-orange-400 rounded-3xl bg-orange-50 flex flex-row items-center justify-around py-[2px] px-2 space-x-2">
      <FontAwesome6 name="location-dot" size={16} color="orange" />
      <View>
        <Text className="text-[10px]">Teslimat Adresi</Text>
        <Text className="text-[11px] font-bold">Evim (Muratpaşa Mah)</Text>
      </View>
      <FontAwesome5 name="sort-down" size={16} color="orange" />
    </View>
  );
};

export default AddressOverview;
