import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ApplyCouponCard = ({ coupon }) => {
  return (
    <View className="bg-white p-1 rounded-md h-24 mr-2">
      <Text className="text-sm">{coupon.name}</Text>
      <Text className="text-gray-600 text-xs">
        Bitiş: {coupon.bitis_tarihi}
      </Text>
      <View className="flex flex-row items-center justify-between mt-auto">
        <Text className="text-orange-500 font-medium">{coupon.fiyat} TL</Text>
        <TouchableOpacity className="border border-orange-500 py-1 px-4 text-center rounded-lg">
          <Text className="text-orange-500 font-medium text-xs">Uygula</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApplyCouponCard;
