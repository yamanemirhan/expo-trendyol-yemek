import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import HeaderHome from "../components/HeaderHome";
import Discount from "../components/Discount";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CampaignRestaurant from "../components/CampaignRestaurant";
import DiscountCoupons from "../components/DiscountCoupons";
import CampaignDetails from "../components/CampaignDetails";
import RestaurantsList from "../components/RestaurantsList";
import { useNavigation } from "@react-navigation/native";
import KitchenCard from "../components/KitchenCard";

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

const mutfaklar = [
  {
    id: 1,
    name: "Döner",
    image:
      "https://cdn.yemek.com/uploads/2023/07/surmene-doner-avrupa-yakasi-en-iyi-donerciler-sena.jpg",
  },
  {
    id: 2,
    name: "Hamburger",
    image:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2022/05/hamburger-yemekcom.jpg",
  },
  {
    id: 3,
    name: "Pide & Lahmacun",
    image: "https://tele1.com.tr/wp-content/uploads/2023/07/lahmacun-1.jpg",
  },
  {
    id: 4,
    name: "Tatlı",
    image:
      "https://cdn1.ntv.com.tr/gorsel/0B-nBAnzekCIKalk7HQ9nQ.jpg?width=1060&height=795&mode=crop&scale=both&v=1648114737407&meta=square",
  },
  {
    id: 5,
    name: "Tavuk",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/07/firin-posetinde-tavuk-yeni.jpg",
  },
  {
    id: 6,
    name: "Çiğ Köfte",
    image:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2020/10/etsiz-cig-kofte-yemekcom.jpg",
  },
  {
    id: 7,
    name: "Pizza",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg",
  },
  {
    id: 8,
    name: "Ev Yemekleri",
    image: "https://www.saglikaktuel.com/d/news/30117.jpg",
  },
  {
    id: 9,
    name: "Sokak Lezzetleri",
    image:
      "https://www.odamax.com/omag/wp-content/uploads/2023/05/turk-sokak-lezzetleri.jpg",
  },
  {
    id: 10,
    name: "Kebap",
    image:
      "https://beylerkebap.com.tr/wp-content/uploads/2019/12/adana-kebap-v2.jpg",
  },
  {
    id: 11,
    name: "Börek",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/09/10-dakikada-peynirli-borek-onecikan.jpg",
  },
  {
    id: 12,
    name: "Kahvaltı",
    image:
      "https://i.nefisyemektarifleri.com/2023/03/21/kadikoyun-en-iyi-12-kahvalti-mekani.jpg",
  },
  {
    id: 13,
    name: "Tost & Sandviç",
    image:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2016/01/haslanmis-tavuklu-sandvic-one-cikan.jpg",
  },
];

const kampanyali_restoranlar = [
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
  },
];

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

const Home = () => {
  const refCouponSheet = useRef();
  const refCampaignSheet = useRef();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1 }}>
        <HeaderHome onPress={() => refCouponSheet.current.open()} />
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "rgba(1, 1, 1, 0.01)",
            padding: 6,
          }}
          className="space-y-2 mb-[2px]"
        >
          {/* KAMPANYALAR */}
          <View className="flex-1">
            <View className="flex flex-row items-center justify-between space-x-2">
              <Text className="font-bold text-base">
                Kampanyalar ({kampanyalar?.length})
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Kampanyalar")}
                className="z-10"
              >
                <Text className="mr-4 text-xs text-orange-500 font-bold">
                  Tümünü Gör
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal className="flex-1 p-1">
              {kampanyalar?.length > 0 &&
                kampanyalar.map((kampanya) => (
                  <TouchableOpacity
                    key={kampanya.id}
                    onPress={() =>
                      navigation.navigate("KampanyaKosullari", { kampanya })
                    }
                  >
                    <Image
                      source={{ uri: kampanya.image }}
                      style={{ width: SIZES.width - 10, height: 120 }}
                      className="rounded-xl"
                    />
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
          {/* YEDİKÇE İNDİRİM */}
          <View className="flex-1 p-1">
            <Discount onPress={() => refCampaignSheet.current.open()} />
          </View>
          {/* MUTFAKLAR */}
          <View className="flex-1 p-1">
            <View className="flex flex-row items-center justify-between space-x-2">
              <Text className="font-bold text-base">Mutfaklar</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Mutfaklar", { mutfaklar })}
                className="z-10"
              >
                <Text className="mr-4 text-xs text-orange-500 font-bold">
                  Tümünü Gör
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal className="flex-1 space-x-2">
              {mutfaklar?.length > 0 &&
                mutfaklar.map((mutfak) => (
                  <View key={mutfak.id}>
                    <KitchenCard mutfak={mutfak} />
                  </View>
                ))}
            </ScrollView>
          </View>
          {/* KAMPANYALI RESTORANLAR */}
          <View className="flex-1 p-1">
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center space-x-2">
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={18}
                  color="orange"
                />
                <Text className="font-bold text-base">
                  Kampanyalı Restoranlar
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Restoranlar")}
                className="z-10"
              >
                <Text className="mr-4 text-xs text-orange-500 font-bold">
                  Tümünü Gör
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal className="flex-1 space-x-3">
              {kampanyali_restoranlar?.length > 0 &&
                kampanyali_restoranlar.map((restoran) => (
                  <View key={restoran.id}>
                    <CampaignRestaurant restoran={restoran} />
                  </View>
                ))}
            </ScrollView>
          </View>
          {/* TÜM RESTORANLAR */}
          <View className="flex-1 p-1">
            <RestaurantsList restoranlar={tum_restoranlar} />
          </View>
        </ScrollView>
      </View>
      <DiscountCoupons bottomSheetRef={refCouponSheet} />
      <CampaignDetails bottomSheetRef={refCampaignSheet} />
    </SafeAreaView>
  );
};

export default Home;
