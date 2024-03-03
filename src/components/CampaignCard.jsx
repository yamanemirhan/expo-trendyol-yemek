import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CampaignCard = ({ kampanya }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("KampanyaKosullari", { kampanya });
  };

  return (
    <TouchableOpacity
      className="border border-gray-200 rounded-md bg-white"
      onPress={() => navigation.navigate("Restoranlar")}
    >
      <Image
        source={{ uri: kampanya.image }}
        className="w-full h-28 rounded-t-md"
      />
      <View className="p-2 space-y-1">
        <Text className="font-semibold">{kampanya.name}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text className="text-orange-500 text-xs font-semibold">
            Kampanya Koşulları &gt;
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CampaignCard;
