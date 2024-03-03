import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import RestaurantsList from "../components/RestaurantsList";
import { SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const begenilen_restoranlar = [
  {
    id: 1,
    kampanya: "%10 İndirim",
    semtin_yildizi: true,
    yedikce_indirim: true,
    puan: 4.6,
    yorum: 250,
    image:
      "https://images.deliveryhero.io/image/fd-tr/LH/ftac-hero.jpg?width=480&height=360&quality=45",
    name: "Öncü Döner",
    mutfak: "Döner",
    min_fiyat: 80,
    go_kargo: true,
    tahmini_teslimat_bir: 20,
    tahmini_teslimat_iki: 30,
    uzaklik: 1.1,
    liked: true,
    sponsorlu: true,
  },
  {
    id: 2,
    kampanya: "%5 + 40 TL İndirim",
    semtin_yildizi: true,
    yedikce_indirim: true,
    puan: 4.6,
    yorum: 250,
    image:
      "https://images.deliveryhero.io/image/fd-tr/LH/ftac-hero.jpg?width=480&height=360&quality=45",
    name: "Öz Hatay Usulü Dürüm",
    mutfak: "Döner",
    min_fiyat: 80,
    go_kargo: true,
    tahmini_teslimat_bir: 20,
    tahmini_teslimat_iki: 30,
    uzaklik: 1.1,
    liked: true,
    sponsorlu: true,
  },
  {
    id: 3,
    kampanya: "%5 + 40 TL İndirim",
    semtin_yildizi: true,
    yedikce_indirim: true,
    puan: 4.6,
    yorum: 250,
    image:
      "https://images.deliveryhero.io/image/fd-tr/LH/ftac-hero.jpg?width=480&height=360&quality=45",
    name: "Öz Hatay Usulü Dürüm",
    mutfak: "Döner",
    min_fiyat: 80,
    go_kargo: false,
    tahmini_teslimat_bir: 25,
    tahmini_teslimat_iki: 35,
    uzaklik: 1.1,
    liked: true,
    sponsorlu: false,
  },
  {
    id: 4,
    kampanya: "1 Alana 1 Bedava",
    semtin_yildizi: false,
    yedikce_indirim: false,
    puan: 4.9,
    yorum: 1050,
    image:
      "https://images.deliveryhero.io/image/fd-tr/LH/ftac-hero.jpg?width=480&height=360&quality=45",
    name: "Öz Hatay Usulü Dürüm",
    mutfak: "Döner",
    min_fiyat: 100,
    go_kargo: false,
    tahmini_teslimat_bir: 25,
    tahmini_teslimat_iki: 35,
    uzaklik: 2.3,
    liked: true,
    sponsorlu: false,
  },
  {
    id: 5,
    kampanya: "1 Alana 1 Bedava",
    semtin_yildizi: false,
    yedikce_indirim: true,
    puan: 4.9,
    yorum: 1050,
    image:
      "https://images.deliveryhero.io/image/fd-tr/LH/ftac-hero.jpg?width=480&height=360&quality=45",
    name: "Öz Hatay Usulü Dürüm",
    mutfak: "Döner",
    min_fiyat: 100,
    go_kargo: false,
    tahmini_teslimat_bir: 25,
    tahmini_teslimat_iki: 35,
    uzaklik: 2.3,
    liked: true,
    sponsorlu: true,
  },
  {
    id: 6,
    kampanya: "1 Alana 1 Bedava",
    semtin_yildizi: false,
    yedikce_indirim: true,
    puan: 4.9,
    yorum: 1050,
    image:
      "https://images.deliveryhero.io/image/fd-tr/LH/ftac-hero.jpg?width=480&height=360&quality=45",
    name: "Öz Hatay Usulü Dürüm",
    mutfak: "Pizza",
    min_fiyat: 100,
    go_kargo: false,
    tahmini_teslimat_bir: 30,
    tahmini_teslimat_iki: 40,
    uzaklik: 0.9,
    liked: true,
    sponsorlu: false,
  },
];

const Favourites = () => {
  // All, Open
  const [filter, setFilter] = useState("All");
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1">
      <View className="p-3 flex flex-row items-center space-x-3">
        <TouchableOpacity
          onPress={() => setFilter("All")}
          className={`bg-white border rounded-md p-2 ${
            filter === "All" && "border-orange-500"
          }`}
        >
          <Text
            className={`${filter === "All" && "text-orange-500 font-medium"}`}
          >
            Tümü
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("Open")}
          className={`bg-white border rounded-md p-2 ${
            filter === "Open" && "border-orange-500"
          }`}
        >
          <Text
            className={`${filter === "Open" && "text-orange-500 font-medium"}`}
          >
            Açık Restoranlar
          </Text>
        </TouchableOpacity>
      </View>
      {begenilen_restoranlar?.length === 0 ? (
        <View className="flex flex-col items-center space-y-3 mt-24">
          <Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/512/5223/5223909.png",
            }}
            style={{ width: SIZES.width - 20 }}
            className="h-80"
          />
          <Text className="font-medium text-lg text-center">
            {filter === "Open" && "Açık"} Favori Restoranınız Bulunamadı
          </Text>
          <Text className="text-center text-gray-600">
            Adresinize şu anda hizmet veren favori restoranınız bulunmamaktadır.
          </Text>
          {filter === "All" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("Keşfet")}
              className="bg-orange-500 z-10 rounded-xl py-2 px-8 border border-gray-200 shadow-sm shadow-black"
            >
              <Text className="text-white font-medium text-center">
                Favori Restoranını Bul
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View className="flex-1 p-2 bg-gray-100">
          <RestaurantsList
            restoranlar={begenilen_restoranlar}
            homePage={false}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Favourites;
