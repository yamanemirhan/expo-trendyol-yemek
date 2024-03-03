import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const OrderDetail = () => {
  const route = useRoute();
  const { order } = route.params;

  return (
    <View>
      <Text>OrderDetail</Text>
      <Text>{order.restoran}</Text>
    </View>
  );
};

export default OrderDetail;
