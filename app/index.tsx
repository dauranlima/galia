import { Image, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { MagnifyingGlass, SlidersHorizontal } from "phosphor-react-native";
import Card from "@/components/Card";
export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image source={require("../assets/logo.png")} style={styles.headerLogoImage} />
          <Text style={styles.headerLogoText}>Galia</Text>
        </View>
        <View style={styles.headerIcons}>
          <Image source={require("../assets/ring.png")} style={styles.headerIconsImage} />
          <Image source={require("../assets/bookmark.png")} style={styles.headerIconsImageBookmark} />
        </View>
      </View>
        <Text style={styles.userNameText}>Hello, Dauran Lima 👆</Text>
        <View style={styles.inputContainer}>
          <MagnifyingGlass size={24} color="#fff" />
          <TextInput
            style={styles.input}
            placeholder="Busque uma casa aqui..."
            placeholderTextColor="#666"
          />
          <SlidersHorizontal size={24} color="#1ab65c" />
        </View>
        <View style={styles.recommendationsHeader}>
        <Text style={styles.userNameText}>Recomendações</Text>
        <Text style={styles.seeAll}>Ver todos</Text>
        </View>
        <View style={styles.recommendationsContainer}>
          <Card />
          <Card />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",  
    backgroundColor: "#181a20",
    paddingHorizontal:20, 
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 10,
  },
  headerLogoImage: {
    width: 50,
    height: 50,
  },
  headerIconsImage: {
    width: 50,
    height: 50,
  },
  headerIconsImageBookmark: {
    width: 50,
    height: 50,
  },
  headerLogoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  userNameText: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: "bold", 
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 56,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#25272e",
  },
  input: {
    flex: 1,
    paddingHorizontal:10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#25272e",
    color: "#fff",
  },
  recommendationsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: 20,
    
  },
  recommendationsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  seeAll: {
    paddingTop: 26,
    fontSize: 18,
    color: "#1ab65c",
    textDecorationLine: "underline",
  },
});
