import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import CouponCard from "./CouponCard";

const DiscountCouponCard = () => {
  return (
    <View className="flex-1 bg-white p-[8px] space-y-4">
      <View className="flex flex-row items-center space-x-2">
        <AntDesign name="infocirlceo" size={16} color="orange" />
        <Text className="text-xs">
          Seçili adresinize şu anda hizmet veren restoranların kuponları
          listelenmektedir.
        </Text>
      </View>
      <View className="flex flex-col space-y-3">
        <View>
          <CouponCard />
        </View>
        <View>
          <CouponCard />
        </View>
      </View>
    </View>
  );
};

export default DiscountCouponCard;
