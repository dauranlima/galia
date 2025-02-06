import { Tabs } from "expo-router";
import { HouseLine, MagnifyingGlass, Notebook, UserSquare } from "phosphor-react-native";

export default function TabsLayout() {
  return <Tabs 
    screenOptions={{
      headerShown: false, 
      tabBarStyle: {
        backgroundColor: "#181a20",
        borderTopWidth: 0,
        paddingBottom: 0,
      },
      tabBarShowLabel: true,
      tabBarActiveTintColor: "#1ab65c",
      tabBarInactiveTintColor: "#fff",
    }}
  >
    <Tabs.Screen name="Home" options={{
      title: "Home",
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <HouseLine size={24} color="#1ab65c" />
        }
        return <HouseLine size={24} color="#fff" />
      }
    }} />
    <Tabs.Screen name="TabBooking" options={{
      title: "Booking",
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Notebook size={24} color="#1ab65c" />
        }
        return <Notebook size={24} color="#fff" />
      }
    }} />
    <Tabs.Screen name="TabProfile" options={{
      title: "Profile",
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <UserSquare size={24} color="#1ab65c" />
        }
        return <UserSquare size={24} color="#fff" />
      }
    }} />
    <Tabs.Screen name="TabSearch" options={{
      title: "Search",
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <MagnifyingGlass size={24} color="#1ab65c" />
        }
        return <MagnifyingGlass size={24} color="#fff" />
      }
    }} />
  </Tabs>;
}
