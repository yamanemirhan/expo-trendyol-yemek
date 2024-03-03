import { View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddressOverview from "./AddressOverview";
import { COLORS } from "../constants";
import Search from "./Search";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderHome = ({ onPress }) => {
  const have = true;

  return (
    <View className="bg-white py-2">
      <View className="w-[90%] mx-auto space-y-2">
        <View className="flex flex-row justify-between items-center">
          <FontAwesome6 name="xmark" size={20} color="gray" />
          <AddressOverview />
          <View className="flex items-center">
            <Ionicons name="chatbox" size={20} color="gray" />
            <Text className="text-[10px]">Asistan</Text>
          </View>
          <TouchableOpacity
            onPress={onPress}
            className="flex items-center relative"
          >
            <MaterialCommunityIcons
              name="ticket-percent"
              size={20}
              color="gray"
            />
            <Text className="text-[10px]">Kuponlar</Text>
            {have && (
              <View className="bg-orange-400 border border-white absolute right-1 -top-1 rounded-full w-4 h-4 flex justify-center items-center">
                <Text className="text-white text-[10px]">1</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between items-center">
          <Search />
        </View>
      </View>
    </View>
  );
};

export default HeaderHome;
