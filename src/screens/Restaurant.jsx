import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import RestaurantOverviewCard from "../components/RestaurantOverviewCard";
import ProductCard from "../components/ProductCard";
import { SIZES } from "../constants";

const Restaurant = () => {
  const route = useRoute();
  const { restoran } = route.params;

  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="bg-orange-500 h-[350px]">
        <View className="z-10 mx-auto">
          <RestaurantOverviewCard />
        </View>
      </View>
      <View className="bg-white h-10 mt-[60px] border-b border-b-gray-200 shadow-sm shadow-black">
        <View className="py-1 px-3">
          <ScrollView horizontal className="flex flex-row space-x-5">
            <Text className="text-base">Bu Restoranın En Sevilenleri</Text>
            <Text className="text-base">Trendyol Yemek Süperlig Menüleri</Text>
            <Text className="text-base">Kampanyalar</Text>
            <Text className="text-base">Küçük Boy Pizzalar</Text>
            <Text className="text-base">Orta Boy Pizzalar</Text>
            <Text className="text-base">Büyük Boy Pizzalar</Text>
            <Text className="text-base">Yan Ürünler</Text>
            <Text className="text-base">Tatlılar</Text>
            <Text className="text-base">İçecekler</Text>
            <Text className="text-base">Soslar</Text>
          </ScrollView>
        </View>
      </View>
      <View className="bg-gray-100 flex-1">
        <View>
          <Text className="p-3 font-bold text-base">
            Bu Restoranın En Sevilenleri (5 Ürün)
          </Text>
          <View>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </View>
        </View>
        <View>
          <Text className="p-3 font-bold text-base">
            Trendyol Yemek Süperlig Menüleri (2 Ürün)
          </Text>
          <View>
            <ProductCard />
            <ProductCard />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Restaurant;
