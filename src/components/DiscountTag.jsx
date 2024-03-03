import { View, Text, Image } from "react-native";
import React from "react";

const DiscountTag = () => {
  return (
    <View className="bg-orange-600 items-center px-1 rounded-[4px]">
      <Text className="text-[8px] text-white">Yedikçe</Text>
      <Text className="text-[8px] text-white">İndirim</Text>
    </View>
  );
};

export default DiscountTag;
