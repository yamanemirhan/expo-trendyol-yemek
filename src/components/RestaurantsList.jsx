import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import SImageRestaurant from "./SImageRestaurant";
import LImageRestaurant from "./LImageRestaurant";

const RestaurantsList = ({ restoranlar, homePage = true }) => {
  const [gorunum, setGorunum] = useState(false);

  return (
    <View>
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center space-x-2">
          <Text className="font-bold text-base">
            Restoranlar ({restoranlar.length})
          </Text>
        </View>
        <View className="flex flex-row items-center mr-4">
          <View className="flex flex-row items-center space-x-1">
            <View className="flex flex-row items-center space-x-[2px]">
              {gorunum ? (
                <MaterialCommunityIcons
                  name="view-day-outline"
                  size={18}
                  color="orange"
                />
              ) : (
                <FontAwesome5 name="list" size={16} color="orange" />
              )}
              <TouchableOpacity onPress={() => setGorunum(!gorunum)}>
                <Text className="text-xs text-orange-400">Görünüm</Text>
              </TouchableOpacity>
            </View>
            {homePage && <Text className="w-[2px] h-4 bg-gray-300" />}
            {homePage && (
              <View className="flex flex-row items-center space-x-[2px]">
                <Ionicons name="filter-outline" size={20} color="orange" />
                <Text className="text-xs text-orange-400">Filtrele</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      {homePage && <View className="bg-gray-300 my-2 w-full h-[2px]" />}
      <ScrollView className={`flex-1 space-y-3 ${!homePage && "mt-2"}`}>
        {restoranlar?.length > 0 &&
          restoranlar.map((restoran) => (
            <View key={restoran.id}>
              {gorunum ? (
                <SImageRestaurant restoran={restoran} />
              ) : (
                <LImageRestaurant restoran={restoran} />
              )}
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantsList;
