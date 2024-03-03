import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const indirimler = [
  {
    id: 1,
    fiyat: 30,
    icon: <MaterialCommunityIcons name="ticket" size={18} color="gray" />,
  },
  {
    id: 2,
    fiyat: 35,
    icon: <MaterialCommunityIcons name="ticket" size={18} color="gray" />,
  },
  {
    id: 3,
    fiyat: 40,
    icon: <MaterialCommunityIcons name="ticket" size={18} color="gray" />,
  },
  {
    id: 4,
    fiyat: 45,
    image:
      "https://play-lh.googleusercontent.com/9jK-rQ94WePeecnLM5P0FwhprZNnJNQ5QK2IKnctnmAwbEpqtdUxVZAoHdKaU4jFFpPu",
  },
  {
    id: 5,
    fiyat: 50,
    image:
      "https://play-lh.googleusercontent.com/9jK-rQ94WePeecnLM5P0FwhprZNnJNQ5QK2IKnctnmAwbEpqtdUxVZAoHdKaU4jFFpPu",
  },
];

const Discount = ({ onPress }) => {
  return (
    <View className="bg-white py-2 px-3 rounded-md space-y-4 border border-gray-300">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center space-x-1">
          <MaterialCommunityIcons name="ticket" size={24} color="orange" />
          <Text className="text-orange-500 font-bold">Yedikçe İndirim</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <AntDesign name="infocirlceo" size={12} color="orange" />
          <TouchableOpacity onPress={onPress} className="z-10">
            <Text className="text-orange-500 text-xs">Detayları Gör</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text className="text-xs tracking-wide">
          1-29 Şubat tarihleri arasında Yedikçe İndirim restoranlarından
          vereceğin siparişte <Text className="font-bold">100 TL</Text> ve üzeri
          ödeme yap, bir sonraki siparişin için{" "}
          <Text className="font-bold">30 TL</Text> kuponunu kazan!
        </Text>
      </View>
      <View className="flex flex-row justify-between items-center">
        {indirimler?.map((indirim) => (
          <View
            key={indirim.id}
            className="flex flex-col items-center space-y-4"
          >
            <View className={`relative w-16 h-3 rounded-md bg-gray-100`}>
              {indirim.image ? (
                <Image
                  key={indirim.id}
                  source={{ uri: indirim.image }}
                  className="absolute -top-[10] left-4 w-8 h-8 rounded-md opacity-50"
                />
              ) : (
                <View className="absolute -top-[10] left-4 border border-gray-300 bg-white rounded-full w-8 h-8 items-center flex justify-center">
                  {indirim.icon}
                </View>
              )}
            </View>
            {indirim.image ? (
              <Text className="text-gray-500 text-[9px] tracking-normal max-w-[62] text-center font-semibold">
                Uygulamasına Özel {indirim.fiyat} TL
              </Text>
            ) : (
              <Text className="text-gray-500 font-semibold">
                {indirim.fiyat} TL
              </Text>
            )}
          </View>
        ))}
      </View>
      <View>
        <TouchableOpacity className="border border-orange-500 rounded-2xl py-[6px]">
          <Text className="text-orange-500 text-center text-xs font-semibold">
            Yedikçe İndirim Restoranlarını Gör
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Discount;
