import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import LikeTag from "./LikeTag";
import { useNavigation } from "@react-navigation/native";

const OrderCard = ({ order }) => {
  const siparisIcerikUzunlugu = order?.icerik?.length;

  const navigation = useNavigation();

  return (
    <View className="bg-white border border-gray-200 rounded-md">
      <View className="p-2 border-b border-b-gray-200">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="font-semibold">{order.restoran}</Text>
            <Text className="font-medium text-xs">{order.tarih}</Text>
          </View>
          <View>
            <LikeTag liked={true} />
          </View>
        </View>
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row items-center space-x-1">
            <Text>Toplam:</Text>
            <Text className="text-orange-500 font-medium">
              {order.toplam_fiyat} TL
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SiparişDetay", { order })}
            className="z-10"
          >
            <Text className="text-orange-500">Detaylar &gt;</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="p-2 flex flex-col space-y-2">
        <View className="flex flex-row items-center space-x-1">
          <AntDesign name="check" size={18} color="green" />
          <Text className="text-green-600 text-xs">Teslim Edildi</Text>
        </View>
        <View className="flex flex-row items-center space-x-2">
          <TouchableOpacity className="flex flex-row items-center space-x-1 border border-orange-500 rounded-sm py-1 px-2">
            <Entypo name="cycle" size={16} color="darkorange" />
            <Text className="text-xs">Tekrarla</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center space-x-1 border border-orange-500 bg-orange-500 rounded-sm py-1 px-2">
            <Entypo name="star" size={16} color="white" />
            <Text className="text-xs text-white">Değerlendir</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row flex-wrap">
          {order?.icerik?.map((urun, index) => (
            <Text key={urun.id} className="text-xs">
              {urun.name}
              {siparisIcerikUzunlugu != index + 1 && ", "}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
