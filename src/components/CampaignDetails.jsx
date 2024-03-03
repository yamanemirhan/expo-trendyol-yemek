import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const kampanya_detaylari = [
  {
    id: 1,
    text: "Kampanya 01.02.2024 00.00 - 29.02.2024 23.59 tarihleri arasında geçerlidir.",
  },
  {
    id: 2,
    text: "Belirtilen tarihler arasında kampanyadan her tüketici toplamda en fazla 200 TL değerinde 30-35-40-45-50 TL tutarlı olmak üzere 5 adet kupon kazanabilir.",
  },
  {
    id: 3,
    text: "Belirtilen tarihler arasında kampanyadan her tüketici toplamda en fazla 200 TL değerinde 30-35-40-45-50 TL tutarlı olmak üzere 5 adet kupon kazanabilir.",
  },
  {
    id: 4,
    text: "Belirtilen tarihler arasında kampanyadan her tüketici toplamda en fazla 200 TL değerinde 30-35-40-45-50 TL tutarlı olmak üzere 5 adet kupon kazanabilir.",
  },
  {
    id: 5,
    text: "Belirtilen tarihler arasında kampanyadan her tüketici toplamda en fazla 200 TL değerinde 30-35-40-45-50 TL tutarlı olmak üzere 5 adet kupon kazanabilir.",
  },
];

const kampanya_kazanma_surecleri = [
  {
    id: 1,
    text: "Minimum sipariş tutarı olan 100 TL'yi karşılayan birinci sipariş tamamlandığında, kampanya dönemi boyunca verilen sonraki bir siparişte kullanılabilecek 30 TL kupon tanımlanır.",
  },
  {
    id: 2,
    text: "Minimum sipariş tutarı olan 100 TL'yi karşılayan birinci sipariş tamamlandığında, kampanya dönemi boyunca verilen sonraki bir siparişte kullanılabilecek 30 TL kupon tanımlanır.",
  },
  {
    id: 3,
    text: "Minimum sipariş tutarı olan 100 TL'yi karşılayan birinci sipariş tamamlandığında, kampanya dönemi boyunca verilen sonraki bir siparişte kullanılabilecek 30 TL kupon tanımlanır.",
  },
  {
    id: 4,
    text: "Minimum sipariş tutarı olan 100 TL'yi karşılayan birinci sipariş tamamlandığında, kampanya dönemi boyunca verilen sonraki bir siparişte kullanılabilecek 30 TL kupon tanımlanır.",
  },
  {
    id: 5,
    text: "Minimum sipariş tutarı olan 100 TL'yi karşılayan birinci sipariş tamamlandığında, kampanya dönemi boyunca verilen sonraki bir siparişte kullanılabilecek 30 TL kupon tanımlanır.",
  },
  {
    id: 6,
    text: "Minimum sipariş tutarı olan 100 TL'yi karşılayan birinci sipariş tamamlandığında, kampanya dönemi boyunca verilen sonraki bir siparişte kullanılabilecek 30 TL kupon tanımlanır.",
  },
  {
    id: 7,
    text: "Minimum sipariş tutarı olan 100 TL'yi karşılayan birinci sipariş tamamlandığında, kampanya dönemi boyunca verilen sonraki bir siparişte kullanılabilecek 30 TL kupon tanımlanır.",
  },
  {
    id: 8,
    text: "Görseller temsilidir.",
  },
];

const CampaignDetails = ({ bottomSheetRef }) => {
  const navigation = useNavigation();

  return (
    <RBSheet
      ref={bottomSheetRef}
      height={600}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressBack={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        draggableIcon: {
          width: 100,
        },
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
    >
      <View className="bg-gray-200 flex-1">
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
          className="bg-gray-200"
        >
          <Text style={{ fontWeight: "bold", color: COLORS.white }}>
            Kampanya Detayları
          </Text>
          <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
            <Ionicons name="close" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <View className="flex-1 p-3 bg-white pb-9 mb-8">
          <ScrollView className="">
            <View>
              <Text className="font-bold">Kampanya Detayları</Text>
              <View>
                {kampanya_detaylari?.length > 0 &&
                  kampanya_detaylari.map((detay) => (
                    <Text key={detay.id}>- {detay.text}</Text>
                  ))}
              </View>
            </View>
            <View className="mt-3">
              <Text className="font-bold">Kampanya Kazanma Süreci:</Text>
              <View>
                {kampanya_kazanma_surecleri?.length > 0 &&
                  kampanya_kazanma_surecleri.map((surec) => (
                    <Text key={surec.id}>- {surec.text}</Text>
                  ))}
              </View>
            </View>
          </ScrollView>
        </View>
        <View className="absolute bg-white bottom-0 p-3 w-full border-t border-t-gray-200">
          <TouchableOpacity
            onPress={() => navigation.navigate("Restoranlar")}
            className="bg-orange-500 w-full py-2 rounded-xl"
          >
            <Text className="text-white font-semibold text-center">
              Tüm Restoranları Gör
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </RBSheet>
  );
};

export default CampaignDetails;
