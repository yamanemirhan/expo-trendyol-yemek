import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CampaignTag from "./CampaignTag";
import StarAndCommentTag from "./StarAndCommentTag";
import DiscountTag from "./DiscountTag";
import LikeTag from "./LikeTag";
import StarTag from "./StarTag";
import { useNavigation } from "@react-navigation/native";

const CampaignRestaurant = ({ restoran }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restoran", { restoran })}
    >
      <View className="relative w-36 h-48 bg-white rounded-lg border border-gray-300">
        <View className="absolute z-10 top-0 left-0">
          <CampaignTag kampanya={restoran.kampanya} />
        </View>
        <View className="absolute mb-[62] z-10 bottom-0 left-0">
          <StarAndCommentTag puan={restoran.puan} yorum={restoran.yorum} />
        </View>
        {restoran.yedikce_indirim && (
          <View className="absolute mb-[86] z-10 bottom-0 left-1">
            <DiscountTag />
          </View>
        )}
        <View className="absolute mb-[70] z-10 bottom-0 right-2">
          <LikeTag liked={restoran.liked} />
        </View>
        {restoran.semtin_yildizi && (
          <View className="absolute z-10 top-7 left-1">
            <StarTag />
          </View>
        )}
        <Image
          source={{ uri: restoran.image }}
          className="w-full h-32 rounded-t-lg"
        />
        <View className="p-1 flex flex-col space-y-[2px]">
          <Text className="text-xs font-bold">{restoran.name}</Text>
          <View className="flex flex-row items-center space-x-2">
            <Text className="text-xs">Min. {restoran.min_fiyat} TL</Text>
            <Text className="w-1 h-1 bg-gray-700 rounded-full" />
            <Text className="text-xs">{restoran.mutfak}</Text>
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
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CampaignRestaurant;
