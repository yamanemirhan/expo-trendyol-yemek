import { Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import DiscountCouponCard from "./DiscountCouponCard";

const DiscountCoupons = ({ bottomSheetRef }) => {
  return (
    <RBSheet
      ref={bottomSheetRef}
      height={300}
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
            İndirim Kuponlarım
          </Text>
          <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
            <Ionicons name="close" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <DiscountCouponCard />
      </View>
    </RBSheet>
  );
};

export default DiscountCoupons;
