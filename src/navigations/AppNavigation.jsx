import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import DrawerNavigation from "./DrawerNavigation";
import CampaignConditions from "../screens/CampaignConditions";
import EditFavourites from "../screens/EditFavourites";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="KampanyaKosullari"
          component={CampaignConditions}
          screenOptions={{ headerShown: true }}
          options={{
            title: "Kampanya Koşulları",
            headerTitleStyle: {
              fontSize: 16,
            },
          }}
        />
        <Stack.Screen
          name="FavDuzenle"
          component={EditFavourites}
          screenOptions={{ headerShown: true }}
          options={({ navigation }) => ({
            title: "Favori Restoranlarım",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16,
            },
            headerLeft: () => (
              <FontAwesome6
                name="xmark"
                size={22}
                color="gray"
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
