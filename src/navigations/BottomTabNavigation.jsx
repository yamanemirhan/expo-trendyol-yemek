import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Favourites, Home, Cart, Orders, Campaigns } from "../screens";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Restaurants from "../screens/Restaurants";
import Search from "../components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import Kitchens from "../screens/Kitchens";
import Restaurant from "../screens/Restaurant";
import OrderDetail from "../screens/OrderDetail";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === "ios" ? 70 : 60,
        },
      }}
      tabBarOptions={{
        activeTintColor: COLORS.orange,
        inactiveTintColor: "gray",
        labelStyle: {
          marginBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Keşfet"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="compass"
              size={24}
              color={focused ? COLORS.orange : "gray"}
            />
          ),
          tabBarLabel: "Keşfet",
        }}
      />
      <Tab.Screen
        name="Favorilerim"
        component={Favourites}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTitle: "Favori Restoranlarım",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={22}
              color={"gray"}
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("FavDuzenle")}
              className="flex flex-row items-center mr-2 space-x-1"
            >
              <Feather name="edit" size={16} color="darkorange" />
              <Text className="text-orange-500">Düzenle</Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={24}
              color={focused ? COLORS.orange : "gray"}
            />
          ),
          tabBarLabel: "Favorilerim",
        })}
      />
      <Tab.Screen
        name="Sepetim"
        component={Cart}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Sepetim (3)",
          headerTitleStyle: {
            fontSize: 16,
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bag"
              size={24}
              color={focused ? COLORS.orange : "gray"}
            />
          ),
          headerRight: () => (
            <View className="mr-4">
              <MaterialIcons name="delete" size={20} color="gray" />
            </View>
          ),
          tabBarLabel: "Sepetim",
        }}
      />
      <Tab.Screen
        name="Siparişlerim"
        component={Orders}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Siparişlerim",
          headerTitleStyle: {
            fontSize: 16,
          },
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="restaurant"
              size={24}
              color={focused ? COLORS.orange : "gray"}
            />
          ),
          tabBarLabel: "Siparişlerim",
        }}
      />
      <Tab.Screen
        name="Kampanyalar"
        component={Campaigns}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Kampanyalar & Kuponlar",
          headerTitleStyle: {
            fontSize: 16,
          },
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="gift"
              size={24}
              color={focused ? COLORS.orange : "gray"}
            />
          ),
          tabBarLabel: "Kampanyalar",
        }}
      />
      <Tab.Screen
        name="Restoranlar"
        component={Restaurants}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          headerTitleAlign: "center",
          headerTitle: "Restoranlar",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerShown: true,
          header: ({ navigation }) => (
            <SafeAreaView className="bg-white flex flex-col border-b border-b-gray-200 pt-2">
              <View className="relative">
                <View className="absolute left-3 z-10">
                  <AntDesign
                    onPress={() => navigation.goBack()}
                    name="arrowleft"
                    size={22}
                    color={"gray"}
                  />
                </View>
                <Text className="text-center text-base font-semibold">
                  Restoranlar
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center p-3">
                <Search />
              </View>
            </SafeAreaView>
          ),
        })}
      />
      <Tab.Screen
        name="Mutfaklar"
        component={Kitchens}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          headerTitleAlign: "center",
          headerTitle: "Mutfaklar",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerShown: true,
          header: ({ navigation }) => (
            <SafeAreaView className="bg-white flex flex-col border-b border-b-gray-200 pt-2">
              <View className="relative pb-3">
                <View className="absolute left-3 z-10">
                  <AntDesign
                    onPress={() => navigation.goBack()}
                    name="arrowleft"
                    size={22}
                    color={"gray"}
                  />
                </View>
                <Text className="text-center text-base font-semibold">
                  Mutfaklar
                </Text>
              </View>
            </SafeAreaView>
          ),
        })}
      />
      <Tab.Screen
        name="Restoran"
        component={Restaurant}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          headerTitleAlign: "center",
          headerTitle: "Restoran",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerShown: true,
          header: ({ navigation }) => (
            <SafeAreaView className="bg-orange-500 flex flex-col pt-2">
              <View className="relative">
                <View className="absolute left-3 z-10">
                  <AntDesign
                    onPress={() => navigation.goBack()}
                    name="arrowleft"
                    size={22}
                    color={"white"}
                  />
                </View>
                <Text className="ml-12 text-white text-base font-semibold">
                  Pizza Bulls (İsmet Paşa)
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center p-3">
                <Search hasFilter={false} />
              </View>
            </SafeAreaView>
          ),
        })}
      />
      <Tab.Screen
        name="SiparişDetay"
        component={OrderDetail}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          headerTitleAlign: "center",
          headerTitle: "Sipariş Detay",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={22}
              color={"gray"}
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
