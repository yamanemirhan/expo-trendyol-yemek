import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ProductInCart = ({ product }) => {
  return (
    <View className="py-3 border-t border-y-gray-300 flex flex-row items-center justify-between">
      <View className="flex flex-col space-y-1 flex-shrink">
        <Text className="font-medium">{product.name}</Text>
        {product?.description && (
          <Text className="text-xs overflow-hidden" style={{ maxHeight: 50 }}>
            {product.description}
          </Text>
        )}
        <View className="flex flex-row items-center space-x-2">
          <Text className="line-through text-xs">
            {product.price_without_discount} TL
          </Text>
          <Text className="text-orange-500 font-semibold text-sm">
            {product.discounted_price} TL
          </Text>
        </View>
      </View>
      <View className="flex flex-row items-center space-x-1 border rounded-2xl py-[2px] px-1 border-gray-400">
        <Entypo name="minus" size={20} color="darkorange" />
        <Text className="text-orange-600 rounded-full bg-orange-50 py-1 px-2 font-semibold">
          {product.amount}
        </Text>
        <Entypo name="plus" size={20} color="darkorange" />
      </View>
    </View>
  );
};

export default ProductInCart;
