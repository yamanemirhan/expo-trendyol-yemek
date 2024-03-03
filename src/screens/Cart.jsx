import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ApplyCouponCard from "../components/ApplyCouponCard";
import ProductInCart from "../components/ProductInCart";
import AddExtraProductCard from "../components/AddExtraProductCard";
import { useNavigation } from "@react-navigation/native";
import CampaignRestaurant from "../components/CampaignRestaurant";

const sepet = [
  {
    id: 1,
    name: "2 Orta Boy Karışık Pizza",
    description:
      "Karışık Pizza (Orta), Klasik Hamur Normal Kenar (Orta Boy), Karışık Pizza (Orta), İnce Hamur Normal Kenar (Orta Boy)",
    price_without_discount: 281.7,
    discounted_price: 239.7,
    amount: 1,
  },
  {
    id: 2,
    name: "Fanta (33 cl.)",
    price_without_discount: 50,
    discounted_price: 42.5,
    amount: 1,
  },
  {
    id: 3,
    name: "2'li Sufle",
    price_without_discount: 140,
    discounted_price: 119,
    amount: 1,
  },
];

const restoran = {
  id: 1,
  name: "Hero's Pizza (Yenidoğan)",
  puan: 4.6,
  kampanya: "%10 İndirim",
  semtin_yildizi: true,
  yedikce_indirim: true,
  yorum: 250,
  image:
    "https://images.deliveryhero.io/image/fd-tr/LH/ftac-hero.jpg?width=480&height=360&quality=45",
  name: "Hero's Pizza (Yenidoğan)",
  mutfak: "Pizza",
  min_fiyat: 100,
  go_kargo: false,
  tahmini_teslimat_bir: 20,
  tahmini_teslimat_iki: 30,
  uzaklik: 1.1,
  liked: false,
  sponsorlu: true,
};

const indirim_kuponlarim = [
  {
    id: 1,
    name: "Trendyol İndirim Kuponu",
    fiyat: 40,
    baslangic_tarihi: "09.02.2024",
    bitis_tarihi: "13.02.2024",
  },
];

const ekstra_urunler = [
  {
    id: 1,
    name: "Ayran (30 cl.)",
    fiyat: 23,
  },
  {
    id: 2,
    name: "Coca-Cola (30 cl.)",
    fiyat: 34,
  },
  {
    id: 3,
    name: "Kelle Paça Çorbası",
    fiyat: 170,
  },
  {
    id: 4,
    name: "Soda",
    fiyat: 23,
  },
  {
    id: 5,
    name: "Tavuk Suyu Çorbası",
    fiyat: 57,
  },
  {
    id: 6,
    name: "Ayran (30 cl.)",
    fiyat: 23,
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

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 relative">
      {sepet?.length > 0 ? (
        <ScrollView className="mb-[61px] pb-10">
          {/* indirim kuponlarim */}
          <View className="p-3">
            <Text className="font-medium">İndirim Kuponlarım</Text>
            <ScrollView horizontal className="mt-2">
              {indirim_kuponlarim?.map((coupon) => (
                <ApplyCouponCard key={coupon.id} coupon={coupon} />
              ))}
            </ScrollView>
          </View>
          {/* restoran ve sepetteki urunler */}
          <View className="bg-white pt-3 px-3 border-b border-b-gray-300">
            {/* restoran */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Restoran", { restoran })}
              className="flex flex-row items-center justify-between border-b pb-3 border-gray-300"
            >
              <View className="flex flex-row space-x-2">
                <View className="w-14 h-14">
                  <Image
                    source={{ uri: restoran.image }}
                    className="w-full h-full rounded-md"
                  />
                </View>
                <View className="flex flex-col justify-between p-[2px]">
                  <Text className="font-semibold">{restoran.name}</Text>
                  <View className="flex flex-row items-center space-x-1">
                    {/* puan */}
                    <View className="flex flex-row items-center space-x-1 bg-green-600 rounded-sm p-[2px]">
                      <FontAwesome name="star" size={12} color="white" />
                      <Text className="text-white text-xs">
                        {restoran.puan}
                      </Text>
                    </View>
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
                      {restoran.tahmini_teslimat_bir}-
                      {restoran.tahmini_teslimat_iki}dk
                    </Text>
                    <View className="w-1 h-1 bg-gray-500 rounded-full" />
                    <Text className="text-xs">
                      Min. {restoran.min_fiyat} TL
                    </Text>
                  </View>
                </View>
              </View>
              <View className="bg-gray-200 p-1 rounded-full">
                <AntDesign name="right" size={16} color="gray" />
              </View>
            </TouchableOpacity>
            {/* sepetteki urunler */}
            <View>
              {sepet.map((product) => (
                <ProductInCart product={product} />
              ))}
            </View>
          </View>
          {/* indirim kodu uygula */}
          <View className="bg-white p-3 mt-3 flex flex-row items-center space-x-4">
            <TextInput
              placeholder="İndirim kodunuz varsa lütfen giriniz"
              className="border border-gray-400 rounded-lg pl-2 text-xs flex-1"
            />
            <TouchableOpacity className="bg-orange-500 py-1 px-4 rounded-2xl">
              <Text className="text-white font-semibold">Uygula</Text>
            </TouchableOpacity>
          </View>
          {/* yaninda iyi gider */}
          <View className="p-3 bg-orange-100 mt-3">
            <View className="flex flex-row items-center space-x-1">
              <MaterialCommunityIcons
                name="heart-multiple"
                size={16}
                color="darkorange"
              />
              <Text className="font-medium">Yanında İyi Gider</Text>
            </View>
            <ScrollView horizontal className="mt-2">
              {ekstra_urunler.map((product) => (
                <AddExtraProductCard product={product} />
              ))}
            </ScrollView>
          </View>
          {/* ekstra lezzetler */}
          <View className="p-3 bg-orange-100 mt-3 mb-6">
            <View className="flex flex-row items-center space-x-1">
              <Entypo name="emoji-happy" size={16} color="darkorange" />
              <Text className="font-medium">Ekstra Lezzetler</Text>
            </View>
            <ScrollView horizontal className="mt-2">
              {ekstra_urunler.map((product) => (
                <AddExtraProductCard product={product} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View className="flex flex-col items-center py-4 px-12 space-y-4">
            <View className="w-24 h-24">
              <Image
                source={{
                  uri: "https://cdn3.iconfinder.com/data/icons/e-commerce-bzzricon-flat/512/01_Shopping_Bags-512.png",
                }}
                className="w-full h-full"
              />
            </View>
            <Text className="text-lg font-medium">Sepetin Boş</Text>
            <View>
              <Text className="text-center">
                Sepetinde ürün bulunmamaktadır.
              </Text>
              <Text className="text-center">Hemen alışverişe başla!</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Keşfet")}
              className="bg-orange-600 py-2 rounded-2xl w-full border border-gray-200 shadow-sm shadow-black"
            >
              <Text className="text-white font-semibold text-base text-center">
                Alışverişe Başla
              </Text>
            </TouchableOpacity>
          </View>
          <View className="p-3">
            <View className="flex flex-row items-center justify-between space-x-2">
              <Text className="font-bold text-base">Sana Özel Restoranlar</Text>
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
        </ScrollView>
      )}
      {/* toplam fiyat ve sepeti onayla */}
      {sepet?.length > 0 && (
        <View className="absolute bottom-0 z-10 bg-white border-t border-t-gray-200 p-4 flex flex-row items-center space-x-4">
          <AntDesign name="caretdown" size={12} color="darkorange" />
          <View>
            <Text className="text-xs">Toplam</Text>
            <Text className="text-orange-500 font-medium">178 TL</Text>
          </View>
          <TouchableOpacity className="bg-orange-500 rounded-3xl py-2 flex-1">
            <Text className="text-white text-center text-base">
              Sepeti Onayla
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;
