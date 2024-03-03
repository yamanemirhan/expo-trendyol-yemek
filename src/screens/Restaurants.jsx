import { View, Text, ScrollView } from "react-native";
import React from "react";
import SortAndFilter from "../components/SortAndFilter";
import RestaurantsList from "../components/RestaurantsList";

const tum_restoranlar = [
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
    liked: false,
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
    liked: false,
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

const Restaurants = () => {
  return (
    <ScrollView className="flex-1">
      <View className="p-2 bg-white border-b border-b-gray-200">
        <SortAndFilter />
      </View>
      <View className="flex-1 p-2 bg-gray-100">
        <RestaurantsList restoranlar={tum_restoranlar} homePage={false} />
      </View>
    </ScrollView>
  );
};

export default Restaurants;
