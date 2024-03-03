import { View, Text, ScrollView, Image } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const SortAndFilter = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        alignItems: "center",
      }}
      className="flex flex-row space-x-3 py-2"
    >
      {/* siralama */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <Octicons name="sort-desc" size={16} color="darkorange" />
        <Text>Sıralama</Text>
        <AntDesign name="down" size={16} color="darkorange" />
      </View>
      <Text className="h-full w-[2px] bg-gray-200" />
      {/* mutfaklar */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <Text>Mutfaklar</Text>
        <AntDesign name="down" size={16} color="darkorange" />
      </View>
      {/* min tutar */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <Text>Min. Tutar</Text>
        <AntDesign name="down" size={16} color="darkorange" />
      </View>
      {/* odeme yontemi */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <Text>Ödeme Yöntemi</Text>
        <AntDesign name="down" size={16} color="darkorange" />
      </View>
      {/* 4 puan ve uzeri */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <AntDesign name="star" size={16} color="green" />
        <Text>4 Puan ve Üzeri</Text>
      </View>
      {/* go ile teslimat */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <Image
          source={{
            uri: "https://seeklogo.com/images/T/trendyol-go-logo-2BC58929CB-seeklogo.com.png",
          }}
          className="w-4 h-4"
        />
        <Text>Go ile Teslimat</Text>
      </View>
      {/* semtin yildizi restoranlar */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <MaterialCommunityIcons
          name="star-circle-outline"
          size={16}
          color="darkorange"
        />
        <Text>Semtin Yıldızı Restoranlar</Text>
      </View>
      {/* yedikce indirim */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <MaterialCommunityIcons name="ticket" size={16} color="darkorange" />
        <Text>Yedikçe İndirim</Text>
      </View>
      {/* kampanyali restoranlar */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <MaterialCommunityIcons
          name="brightness-percent"
          size={16}
          color="orange"
        />
        <Text>Kampanyalı Restoranlar</Text>
      </View>
      {/* acik restoranlar */}
      <View className="border border-gray-200 rounded-xl flex flex-row items-center space-x-1 py-1 px-2">
        <Fontisto name="shopping-store" size={16} color="darkorange" />
        <Text>Açık Restoranlar</Text>
      </View>
    </ScrollView>
  );
};

export default SortAndFilter;
