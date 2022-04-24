import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { View } from "react-native";
import Accountscreen from "../screens/Account/AccountScreen";
import Cartscreen from "../screens/Cart/CartScreen";
import Favouritescreen from "../screens/Favourite/FavouriteScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const TabBarCustom = ({ accessibilityState, children, onPress }) => {
  let isSelected = accessibilityState.selected;
  if (isSelected) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "#DA251D",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          borderRadius: 50,
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          borderRadius: 50,
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" color={focused ? "white" : color} size={26} />
          ),
          tabBarButton: (props) => <TabBarCustom {...props} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cartscreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="shoppingcart"
              color={focused ? "white" : color}
              size={26}
            />
          ),
          tabBarButton: (props) => <TabBarCustom {...props} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favouritescreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="hearto" color={focused ? "white" : color} size={26} />
          ),
          tabBarButton: (props) => <TabBarCustom {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Accountscreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="user" color={focused ? "white" : color} size={26} />
          ),
          tabBarButton: (props) => <TabBarCustom {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Tabs;
