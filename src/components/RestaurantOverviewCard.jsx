import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SIZES } from "../constants";
import Ratings from "./Ratings";
import LikeTag from "./LikeTag";

const RestaurantOverviewCard = () => {
  return (
    <View
      style={{ width: SIZES.width - 30 }}
      className="bg-white min-h-[380px] max-h-[420px] rounded-md border border-gray-200 shadow-md shadow-black p-3"
    >
      <View>
        <View className="flex flex-row space-x-2">
          <View className="w-24 h-24 border rounded-md border-gray-300">
            <Image
              source={{
                uri: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/sucuklu-pizza-yeni-onecikan.jpg",
              }}
              className="w-full h-full rounded-md"
            />
          </View>
          <View className="flex flex-col justify-between">
            <View className="">
              <Text className="font-semibold">Pizza Bulls (İsmet Paşa)</Text>
              <View className="flex flex-row items-center space-x-1">
                <Text className="text-xs text-gray-600">0.6 km</Text>
                <Text className="w-1 h-1 rounded-full bg-gray-400" />
                <Text className="text-xs text-gray-600">Pizza</Text>
              </View>
            </View>
            <View>
              <Ratings />
            </View>
          </View>
          <View>
            <LikeTag />
          </View>
        </View>
        <View className="flex flex-row items-center bg-yellow-50 mt-3 rounded-md space-x-1 py-1 pr-7">
          <View className="border-2 border-orange-400 rounded-full flex items-center justify-center w-6 h-6">
            <AntDesign name="star" size={16} color="darkorange" />
          </View>
          <View className="mr-6">
            <Text className="text-[10px]">
              Yüksek sayıda sipariş alan restoranlar arasında puan ortalaması
              yüksek ve iptal oranı düşük olanlar "Semtin Yıldızı" rozeti
              kazanırlar.
            </Text>
          </View>
        </View>
      </View>
      <View className="h-[2px] w-full bg-gray-200 my-[10px]" />
      <View className="flex flex-col space-y-1">
        <Text className="text-[10px] text-gray-700">Ödeme Yöntemleri</Text>
        <View className="flex flex-row flex-wrap">
          <View className="flex flex-row items-center space-x-1 mr-3 mb-2">
            <FontAwesome name="credit-card-alt" size={14} color="blue" />
            <Text className="font-medium text-[12px]">Banka & Kredi Kartı</Text>
          </View>
          <View className="flex flex-row items-center space-x-1 mr-3 mb-2">
            <FontAwesome6 name="ticket" size={14} color="red" />
            <Text className="font-medium text-[12px]">
              Edenred Ticket Restaurant
            </Text>
          </View>
          <View className="flex flex-row items-center space-x-1 mr-3 mb-2">
            <Entypo name="medium" size={14} color="green" />
            <Text className="font-medium text-[12px]">Multinet</Text>
          </View>
          <View className="flex flex-row items-center space-x-1 mr-3 mb-2">
            <FontAwesome5 name="dribbble-square" size={14} color="black" />
            <Text className="font-medium text-[12px]">Pluxee (Sodexo)</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-gray-500 text-[10px]">Çalışma Saatleri</Text>
            <Text className="text-xs font-semibold">11:00-03:00</Text>
            {/* <View className="p-1 bg-red-600 w-12 rounded-md">
              <Text className="text-white">Kapalı</Text>
            </View> */}
          </View>
          <View>
            <Text className="text-gray-500 text-[10px]">Min Tutar</Text>
            <Text className="text-xs font-semibold">30 TL</Text>
          </View>
          <View>
            <Text className="text-gray-500 text-[10px]">Teslimat Süresi</Text>
            <Text className="text-xs font-semibold">40-50dk</Text>
          </View>
          <View className="flex flex-row items-center bg-orange-100 border border-orange-100 rounded-md w-16 p-1">
            <View>
              <Text className="text-gray-600 text-[10px]">Yorumlar</Text>
              <Text className="text-xs font-semibold text-orange-600">428</Text>
            </View>
            <AntDesign name="right" size={14} color="darkorange" />
          </View>
        </View>
      </View>
      <View className="h-[2px] w-full bg-gray-200 my-[10px]" />
      <View className="flex flex-col space-y-1">
        <View className="flex flex-row items-center space-x-2">
          <MaterialCommunityIcons name="ticket" size={22} color="darkorange" />
          <Text className="font-semibold text-xs">
            Yedikçe İndirim Restoranı
          </Text>
        </View>
        <View className="flex flex-row items-center space-x-2">
          <Entypo name="ticket" size={22} color="darkorange" />
          <Text className="font-semibold text-xs">
            2 Orta Boy Pizza Fırsatı
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantOverviewCard;
