import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SImageRestaurant from "../components/SImageRestaurant";
import { SIZES } from "../constants";

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
  {
    id: 7,
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
  {
    id: 8,
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
  {
    id: 9,
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

const EditFavourites = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  // Restoranı seçme veya seçmeme işlevi
  const toggleRestaurantSelection = (restaurant) => {
    const isSelected = selectedRestaurants.some((r) => r.id === restaurant.id);
    if (isSelected) {
      setSelectedRestaurants(
        selectedRestaurants.filter((r) => r.id !== restaurant.id)
      );
    } else {
      setSelectedRestaurants([...selectedRestaurants, restaurant]);
    }
  };

  return (
    <View className="flex-1 relative">
      <ScrollView className="p-2 mb-[1px]">
        {begenilen_restoranlar?.length > 0 &&
          begenilen_restoranlar.map((restaurant) => (
            <View className="my-1" key={restaurant.id}>
              <SImageRestaurant
                restoran={restaurant}
                editing={true}
                selected={selectedRestaurants.some(
                  (r) => r.id === restaurant.id
                )}
                toggleSelection={() => toggleRestaurantSelection(restaurant)}
              />
            </View>
          ))}
      </ScrollView>
      <View className="h-20 bg-white flex items-center justify-center">
        <TouchableOpacity
          style={{ width: SIZES.width - 40 }}
          className={`${
            selectedRestaurants?.length < 1 ? "bg-orange-300" : "bg-orange-500"
          } rounded-2xl py-2`}
        >
          <Text className="text-center text-white font-medium text-sm">
            Favorilerimden Sil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditFavourites;
