import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import StarAndCommentTag from "./StarAndCommentTag";
import DiscountTag from "./DiscountTag";
import CampaignTag from "./CampaignTag";
import LikeTag from "./LikeTag";
import { useNavigation } from "@react-navigation/native";
import EditBox from "./EditBox";

const SImageRestaurant = ({
  restoran,
  editing = false,
  selected,
  toggleSelection,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restoran", { restoran })}
    >
      <View className="flex flex-row items-center space-x-2 bg-white border border-gray-200 rounded-md p-[6px]">
        <View>
          <Image
            source={{ uri: restoran.image }}
            className="w-24 h-24 rounded-md"
          />
          {restoran.sponsorlu && (
            <Text className="text-center text-xs text-gray-500">Sponsorlu</Text>
          )}
        </View>
        <View className="flex-1 flex flex-col space-y-1">
          <View className="flex flex-row items-center justify-between">
            <View>
              <Text className="font-bold">{restoran.name} (Orta)</Text>
            </View>
            {editing ? (
              <View>
                <EditBox
                  selected={selected}
                  toggleSelection={toggleSelection}
                />
              </View>
            ) : (
              <View className="flex flex-row items-center space-x-1">
                {restoran.yedikce_indirim && <DiscountTag />}
                {restoran.go_kargo ? (
                  <Image
                    source={{
                      uri: "https://play-lh.googleusercontent.com/9jK-rQ94WePeecnLM5P0FwhprZNnJNQ5QK2IKnctnmAwbEpqtdUxVZAoHdKaU4jFFpPu=w240-h480-rw",
                    }}
                    className="w-5 h-5"
                  />
                ) : (
                  <Image
                    source={{
                      uri: "https://w7.pngwing.com/pngs/139/672/png-transparent-delivery-computer-icons-courier-business-buying-and-selling-text-logo-cargo-thumbnail.png",
                    }}
                    className="w-5 h-5"
                  />
                )}
                <View>
                  <LikeTag liked={restoran.liked} />
                </View>
              </View>
            )}
          </View>
          <View className="flex flex-row space-x-1 items-center">
            <StarAndCommentTag puan={restoran.puan} yorum={restoran.yorum} />
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
            <Text className="w-1 h-1 bg-gray-700 rounded-full" />
            <Text className="text-xs">Min. {restoran.min_fiyat} TL</Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <CampaignTag kampanya={restoran.kampanya} hasBg={false} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SImageRestaurant;
