import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const EditBox = ({ selected, toggleSelection }) => {
  return (
    <View>
      {selected ? (
        <FontAwesome
          onPress={() => toggleSelection(!selected)}
          name="check-square"
          size={24}
          color="darkorange"
        />
      ) : (
        <FontAwesome
          onPress={() => toggleSelection(!selected)}
          name="square-o"
          size={24}
          color="black"
        />
      )}
    </View>
  );
};

export default EditBox;
