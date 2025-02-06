import { BookBookmark, Star, StarFour, StarHalf } from 'phosphor-react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const Card = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
      <Image source={require("../assets/1image.png")} style={styles.recommendationsImage} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Casa de campo</Text>

        <Text style={styles.cardAddress}>Rua das Flores, 123</Text>
        <Star size={16} color="#f6fe00" />
        <Text style={styles.cartdCity}>(4.8 Reviews)</Text>
      </View>
      <View style={styles.cardContent_value}>
        <Text style={styles.cardPrice}>R$ 150</Text>
        <Text style={styles.cardPrice_night}>/ noite</Text>
        <BookBookmark size={24} color="#1ab65c" />
      </View>
    </TouchableOpacity>


  )


}
export default Card
const styles = StyleSheet.create({
  recommendationsImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  card: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 140,
    borderRadius: 10,
    backgroundColor: "#25272e",
  },
  cardContent: {
    paddingHorizontal:10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
  },
  cardPrice: {
    fontSize: 21,
    color: "#1ab65c",
    fontWeight: "bold",
  },
  cardContent_value: {
    alignItems: "center",
    paddingRight: 10,
  },


  cardAddress: {
    fontSize: 14,
    paddingVertical: 15,
    color: "#fff",

  },
  cartdCity: {
    fontSize: 14,
    color: "#fff",
  },
  cardPrice_night: {
    fontSize: 13,
    paddingVertical: 15,
    color: "#fff",
    
  },






})