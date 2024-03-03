import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CampaignCard from "../components/CampaignCard";
import { useState } from "react";
import DiscountCouponCard from "../components/DiscountCouponCard";

const kampanyalar = [
  {
    id: 1,
    name: "2 Orta Boy Pizza 160 TL",
    image: "https://i.ytimg.com/vi/crGv8wYntXE/maxresdefault.jpg",
    kosullar: [
      {
        id: 1,
        text: "Kampanya 09.02.2024 10.00 - 23.59 tarihine kadar geçerlidir.",
      },
      {
        id: 2,
        text: "Görseldeki ürünler reklam amaçlı olup, restoranlara göre farklılık gösterebilir.",
      },
      {
        id: 3,
        text: "Kampanya ince hamur Trend Pizzalar için geçerlidir. Diğer kategori ve hamur seçimlerinde fiyat farkı oluşacaktır.",
      },
      {
        id: 4,
        text: "Restoran önceden haber vermeden kampanyayı durdurma hakkına sahiptir.",
      },
    ],
  },
  {
    id: 2,
    name: "1 Alana 1 Hediye",
    image:
      "https://img.tamindir.com/2023/03/476726/yemeksepeti-1-ye-1-hediye-kampanyasi.jpg",
    kosullar: [
      {
        id: 1,
        text: "Kampanya 09.02.2024 10.00 - 23.59 tarihine kadar geçerlidir.",
      },
      {
        id: 2,
        text: "Görseldeki ürünler reklam amaçlı olup, restoranlara göre farklılık gösterebilir.",
      },
      {
        id: 3,
        text: "Kampanya ince hamur Trend Pizzalar için geçerlidir. Diğer kategori ve hamur seçimlerinde fiyat farkı oluşacaktır.",
      },
      {
        id: 4,
        text: "Restoran önceden haber vermeden kampanyayı durdurma hakkına sahiptir.",
      },
    ],
  },
  {
    id: 3,
    name: "1 Alana 1 Hediye",
    image:
      "https://img.tamindir.com/2023/03/476726/yemeksepeti-1-ye-1-hediye-kampanyasi.jpg",
    kosullar: [
      {
        id: 1,
        text: "Kampanya 09.02.2024 10.00 - 23.59 tarihine kadar geçerlidir.",
      },
      {
        id: 2,
        text: "Görseldeki ürünler reklam amaçlı olup, restoranlara göre farklılık gösterebilir.",
      },
      {
        id: 3,
        text: "Kampanya ince hamur Trend Pizzalar için geçerlidir. Diğer kategori ve hamur seçimlerinde fiyat farkı oluşacaktır.",
      },
      {
        id: 4,
        text: "Restoran önceden haber vermeden kampanyayı durdurma hakkına sahiptir.",
      },
    ],
  },
  {
    id: 4,
    name: "1 Alana 1 Hediye",
    image:
      "https://img.tamindir.com/2023/03/476726/yemeksepeti-1-ye-1-hediye-kampanyasi.jpg",
    kosullar: [
      {
        id: 1,
        text: "Kampanya 09.02.2024 10.00 - 23.59 tarihine kadar geçerlidir.",
      },
      {
        id: 2,
        text: "Görseldeki ürünler reklam amaçlı olup, restoranlara göre farklılık gösterebilir.",
      },
      {
        id: 3,
        text: "Kampanya ince hamur Trend Pizzalar için geçerlidir. Diğer kategori ve hamur seçimlerinde fiyat farkı oluşacaktır.",
      },
      {
        id: 4,
        text: "Restoran önceden haber vermeden kampanyayı durdurma hakkına sahiptir.",
      },
    ],
  },
  {
    id: 5,
    name: "1 Alana 1 Hediye",
    image:
      "https://img.tamindir.com/2023/03/476726/yemeksepeti-1-ye-1-hediye-kampanyasi.jpg",
    kosullar: [
      {
        id: 1,
        text: "Kampanya 09.02.2024 10.00 - 23.59 tarihine kadar geçerlidir.",
      },
      {
        id: 2,
        text: "Görseldeki ürünler reklam amaçlı olup, restoranlara göre farklılık gösterebilir.",
      },
      {
        id: 3,
        text: "Kampanya ince hamur Trend Pizzalar için geçerlidir. Diğer kategori ve hamur seçimlerinde fiyat farkı oluşacaktır.",
      },
      {
        id: 4,
        text: "Restoran önceden haber vermeden kampanyayı durdurma hakkına sahiptir.",
      },
    ],
  },
  {
    id: 6,
    name: "1 Alana 1 Hediye",
    image:
      "https://img.tamindir.com/2023/03/476726/yemeksepeti-1-ye-1-hediye-kampanyasi.jpg",
    kosullar: [
      {
        id: 1,
        text: "Kampanya 09.02.2024 10.00 - 23.59 tarihine kadar geçerlidir.",
      },
      {
        id: 2,
        text: "Görseldeki ürünler reklam amaçlı olup, restoranlara göre farklılık gösterebilir.",
      },
      {
        id: 3,
        text: "Kampanya ince hamur Trend Pizzalar için geçerlidir. Diğer kategori ve hamur seçimlerinde fiyat farkı oluşacaktır.",
      },
      {
        id: 4,
        text: "Restoran önceden haber vermeden kampanyayı durdurma hakkına sahiptir.",
      },
    ],
  },
];

const Campaigns = () => {
  const [open, setOpen] = useState(false);

  return (
    <ScrollView className="py-2">
      <View className="p-3 bg-white border-y border-gray-200">
        <TouchableOpacity onPress={() => setOpen(!open)} className="px-2">
          <View className="flex flex-row items-center justify-between">
            <View>
              <Text className="text-orange-600 text-base font-semibold">
                İndirim Kuponlarım (1)
              </Text>
            </View>
            <View className="border rounded-full bg-gray-100 border-gray-100 p-1">
              <AntDesign
                name={open ? "up" : "down"}
                size={16}
                color="darkorange"
              />
            </View>
          </View>
        </TouchableOpacity>
        {open && <DiscountCouponCard />}
      </View>

      <View className="p-3">
        <Text className="font-bold">Tüm Kampanyalar (6)</Text>
        <View className="mt-2 space-y-3 flex flex-col">
          {kampanyalar?.length > 0 &&
            kampanyalar.map((kampanya) => (
              <View key={kampanya.id}>
                <CampaignCard kampanya={kampanya} />
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Campaigns;
