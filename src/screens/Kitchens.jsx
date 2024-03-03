import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import KitchenCard from "../components/KitchenCard";
import { SIZES } from "../constants";

const Kitchens = () => {
  const route = useRoute();
  const { mutfaklar } = route.params;

  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, width: "100%" }}
      contentContainerStyle={{
        padding: 10,
        display: "flex",
        justifyContent: "center", // Kartların ortalanmasını sağlar
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: SIZES.width - 20, // Kartların toplam genişliği
          flexDirection: "row",
          flexWrap: "wrap", // Kartlar sığdığı kadar yan yana gelir
          justifyContent: "flex-start",
        }}
      >
        {mutfaklar?.length > 0 &&
          mutfaklar.map((mutfak) => (
            <View key={mutfak.id} style={{ marginTop: 10, marginLeft: 12 }}>
              <KitchenCard mutfak={mutfak} />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default Kitchens;
