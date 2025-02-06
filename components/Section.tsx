import { StyleSheet, Text, View } from 'react-native'


interface SectionProps {
  name:String;
  label:String;
  style:Object;
  action: () =>void;
}
export default function Section() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendações</Text>
      <Text style={styles.seeAll}>Ver todos</Text>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  seeAll: {
    fontSize: 16,
    color: '#1ab65c',
  }

})