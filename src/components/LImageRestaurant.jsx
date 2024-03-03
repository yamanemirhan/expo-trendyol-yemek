import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CampaignTag from "./CampaignTag";
import StarAndCommentTag from "./StarAndCommentTag";
import LikeTag from "./LikeTag";
import StarTag from "./StarTag";
import DiscountTag from "./DiscountTag";
import { useNavigation } from "@react-navigation/native";

const LImageRestaurant = ({ restoran }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restoran", { restoran })}
    >
      <View className="rounded-md border border-gray-200 bg-white">
        <View className="w-full h-32">
          <Image
            source={{ uri: restoran.image }}
            className="w-full h-full rounded-t-md"
          />
          <View className="absolute z-10 top-0 left-0">
            <CampaignTag kampanya={restoran.kampanya} />
          </View>
          <View className="absolute z-10 bottom-0 left-0">
            <StarAndCommentTag puan={restoran.puan} yorum={restoran.yorum} />
          </View>
          <View className="absolute z-10 top-1 right-2">
            <LikeTag liked={restoran.liked} />
          </View>
          {restoran.semtin_yildizi && (
            <View className="absolute z-10 top-7 left-1">
              <StarTag />
            </View>
          )}
          {restoran.yedikce_indirim && (
            <View className="absolute z-10 bottom-1 right-1 flex flex-row items-center space-x-2">
              <DiscountTag />
              {restoran.go_kargo && (
                <Image
                  source={{
                    uri: "https://play-lh.googleusercontent.com/9jK-rQ94WePeecnLM5P0FwhprZNnJNQ5QK2IKnctnmAwbEpqtdUxVZAoHdKaU4jFFpPu=w240-h480-rw",
                  }}
                  className="w-6 h-6"
                />
              )}
            </View>
          )}
        </View>
        <View className="p-2 flex flex-col space-y-1">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold">{restoran.name} (Orta)</Text>
            <Text className="p-1 bg-gray-200 rounded-xl text-[10px]">
              Sponsorlu
            </Text>
          </View>
          <View className="flex flex-row items-center space-x-2">
            {restoran.go_kargo ? (
              <Image
                source={{
                  uri: "https://play-lh.googleusercontent.com/9jK-rQ94WePeecnLM5P0FwhprZNnJNQ5QK2IKnctnmAwbEpqtdUxVZAoHdKaU4jFFpPu=w240-h480-rw",
                }}
                className="w-4 h-4"
              />
            ) : (
              <Image
                source={{
                  uri: "https://w7.pngwing.com/pngs/139/672/png-transparent-delivery-computer-icons-courier-business-buying-and-selling-text-logo-cargo-thumbnail.png",
                }}
                className="w-4 h-4"
              />
            )}
            <Text className="text-xs">
              {restoran.tahmini_teslimat_bir}-{restoran.tahmini_teslimat_iki}dk
            </Text>
            <Text className="w-1 h-1 bg-gray-700 rounded-full" />
            <Text className="text-xs">{restoran.uzaklik} km</Text>
            <Text className="w-1 h-1 bg-gray-700 rounded-full" />
            <Text className="text-xs">{restoran.mutfak}</Text>
            <Text className="w-1 h-1 bg-gray-700 rounded-full" />
            <Text className="text-xs">Min. {restoran.min_fiyat} TL</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LImageRestaurant;
