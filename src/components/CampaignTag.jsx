import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CampaignTag = ({ kampanya, hasBg = true }) => {
  return (
    <View
      className={`flex flex-row items-center space-x-1 rounded-tl-md p-1 rounded-tr-md rounded-br-md ${
        hasBg && "bg-orange-600"
      }`}
    >
      <MaterialIcons
        name="discount"
        size={12}
        color={hasBg ? "white" : "orange"}
      />
      <Text
        className={`text-xs ${
          hasBg ? "text-white" : "text-orange-400 font-bold"
        }`}
      >
        {kampanya}
      </Text>
    </View>
  );
};

export default CampaignTag;
