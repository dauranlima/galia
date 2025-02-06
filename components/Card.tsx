import { useRouter } from 'expo-router'
import { Bookmark, Star  } from 'phosphor-react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const Card = () => {

  const router = useRouter()

  const handleDetails = () => {
    console.log('Olá, Dauran! - Detalhes da casa realizado com sucesso!')
    router.navigate('/stacks/Details') 
  }




  return (

    <TouchableOpacity style={styles.card} onPress={handleDetails}>
      <View style={styles.cardContent}>
      <Image source={require("../assets/1image.png")} style={styles.recommendationsImage} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Royale President Donald Trump 5 stars Hotel</Text>


        <Text style={styles.cardAddress}>Rua das Flores, 123</Text>
        <Star size={16} color="#f6fe00" />
        <Text style={styles.cartdCity}>(4.8 Reviews)</Text>
      </View>
      <View style={styles.cardContent_value}>
        <Text style={styles.cardPrice}>R$ 450</Text>
        <Text style={styles.cardPrice_night}>/ mês</Text>
        <Bookmark size={24} color="#1ab65c" weight='fill' />
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
    alignItems: "center",
    height: 150,
    borderRadius: 10,
    gap: 10,
    backgroundColor: "#25272e",
  },
  cardContent: {
    flexDirection: "column",
  },

  cardTitle: {
    width: 175,
    fontSize: 17,
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
    fontSize: 15,
    paddingVertical: 10,
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