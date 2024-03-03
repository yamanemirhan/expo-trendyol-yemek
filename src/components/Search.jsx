import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const Search = ({ hasFilter = true }) => {
  return (
    <View className="flex-row space-x-2 items-center">
      <View className="relative flex-1">
        <TextInput
          className="bg-gray-100 rounded-xl pl-8 py-[2px]"
          placeholder={
            hasFilter ? "Restoran, ürün veya mutfak ara" : "Bu Restoranda Ara"
          }
        />
        <View className="absolute left-3 top-[6px]">
          <FontAwesome name="search" size={16} color="orange" />
        </View>
      </View>
      {hasFilter && (
        <View className="bg-gray-200 rounded-xl flex flex-col items-center py-[2px] px-1 justify-center">
          <Ionicons name="filter-outline" size={16} color="black" />
          <Text className="text-[8px]">Filtrele</Text>
        </View>
      )}
    </View>
  );
};

export default Search;
