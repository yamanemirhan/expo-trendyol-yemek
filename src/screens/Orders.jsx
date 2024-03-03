import { View, Text, ScrollView, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import OrderCard from "../components/OrderCard";

const siparislerim = [
  {
    id: 1,
    restoran: "Yes Tantuni (Yeni Doğan)",
    tarih: "09 Şubat 2024 / 16:48",
    toplam_fiyat: 60,
    icerik: [
      {
        id: 1,
        name: "Soda (20 cl.) (1 Adet)",
      },
      {
        id: 2,
        name: "Tavuk Tantuni Dürüm (1 Adet)",
      },
      {
        id: 3,
        name: "Somun Ekmek Arası Tavuk Tantuni (1 Adet)",
      },
    ],
  },
  {
    id: 2,
    restoran: "Yes Tantuni (Yeni Doğan)",
    tarih: "09 Şubat 2024 / 16:48",
    toplam_fiyat: 60,
    icerik: [
      {
        id: 1,
        name: "Soda (20 cl.) (1 Adet)",
      },
      {
        id: 2,
        name: "Tavuk Tantuni Dürüm (1 Adet)",
      },
      {
        id: 3,
        name: "Somun Ekmek Arası Tavuk Tantuni (1 Adet)",
      },
    ],
  },
  {
    id: 3,
    restoran: "Yes Tantuni (Yeni Doğan)",
    tarih: "09 Şubat 2024 / 16:48",
    toplam_fiyat: 60,
    icerik: [
      {
        id: 1,
        name: "Soda (20 cl.) (1 Adet)",
      },
      {
        id: 2,
        name: "Tavuk Tantuni Dürüm (1 Adet)",
      },
      {
        id: 3,
        name: "Somun Ekmek Arası Tavuk Tantuni (1 Adet)",
      },
    ],
  },
  {
    id: 4,
    restoran: "Yes Tantuni (Yeni Doğan)",
    tarih: "09 Şubat 2024 / 16:48",
    toplam_fiyat: 60,
    icerik: [
      {
        id: 1,
        name: "Soda (20 cl.) (1 Adet)",
      },
      {
        id: 2,
        name: "Tavuk Tantuni Dürüm (1 Adet)",
      },
      {
        id: 3,
        name: "Somun Ekmek Arası Tavuk Tantuni (1 Adet)",
      },
    ],
  },
  {
    id: 5,
    restoran: "Yes Tantuni (Yeni Doğan)",
    tarih: "09 Şubat 2024 / 16:48",
    toplam_fiyat: 60,
    icerik: [
      {
        id: 1,
        name: "Soda (20 cl.) (1 Adet)",
      },
      {
        id: 2,
        name: "Tavuk Tantuni Dürüm (1 Adet)",
      },
      {
        id: 3,
        name: "Somun Ekmek Arası Tavuk Tantuni (1 Adet)",
      },
    ],
  },
  {
    id: 6,
    restoran: "Yes Tantuni (Yeni Doğan)",
    tarih: "09 Şubat 2024 / 16:48",
    toplam_fiyat: 60,
    icerik: [
      {
        id: 1,
        name: "Soda (20 cl.) (1 Adet)",
      },
      {
        id: 2,
        name: "Tavuk Tantuni Dürüm (1 Adet)",
      },
      {
        id: 3,
        name: "Somun Ekmek Arası Tavuk Tantuni (1 Adet)",
      },
    ],
  },
];

const Orders = () => {
  return (
    <View>
      <View className="relative bg-white z-10 mx-auto w-full pb-4 px-8 border-b border-b-gray-200">
        <View className="absolute left-10 z-10 top-2">
          <AntDesign name="search1" size={18} color="darkorange" />
        </View>
        <TextInput
          placeholder="Siparişlerimde ara"
          className="bg-gray-100 rounded-2xl py-1 pl-10"
        />
      </View>
      <View className="px-4 mb-[90px]">
        <ScrollView className="flex flex-col mb-4">
          {siparislerim?.length > 0 ? (
            siparislerim.map((order) => (
              <View key={order.id} className="my-2">
                <OrderCard order={order} />
              </View>
            ))
          ) : (
            <View className="p-6">
              <Text className="text-xl text-blue-400">
                Siparişiniz bulunmamaktadır.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Orders;
