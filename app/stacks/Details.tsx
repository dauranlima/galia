import CardHorizontal from "@/components/CardHorizontal";
import SliderPhotos from "@/components/SliderPhotos";
import { Link } from "expo-router";
import {
	ArrowLeft,BookBookmark,DotsThreeCircle,MapPin,} from "phosphor-react-native";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Details() {


const imagens = [
  require("../../assets/1image.png"),
  require("../../assets/3image.png"),
  require("../../assets/5image.png"),
  require("../../assets/6image.png"),
  require("../../assets/7image.png"),
]


	return (
		<View style={styles.container}>
			<ScrollView 
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 40 }}
			>
				<View style={styles.containerImage}>
					<SliderPhotos images={[
						require("../../assets/1image.png"),
						require("../../assets/3image.png"),
					]} />
					<View style={styles.header}>
						<Link href="/tabs/Home" asChild>

							<TouchableOpacity style={styles.arrowLeft}>
								<ArrowLeft size={34} color="#fff" />
							</TouchableOpacity>
						</Link>
						<View style={styles.bookmark}>
							<BookBookmark size={34} color="#fff" />
							<DotsThreeCircle size={34} color="#fff" />
						</View>
					</View>
				</View>
				<View style={styles.nameContainer}>
					<Text style={styles.title}>Royale President Hotel</Text>
					<View style={styles.addressContainer}>
						<MapPin size={24} color="#1ab65c" weight="fill"/>
						<Text style={styles.titleAddress}>Rue Place de la Madalaine, Paris, 79500 , France</Text>
					</View>
					<View style={styles.separatorLine}/>
					<Text style={styles.titleGallery}>Galeria de fotos</Text>
        </View>
        <View style={styles.galleryContainer}>
          <FlatList
            data={imagens}
            keyExtractor={(item) => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
            renderItem={({item}) => (
              <CardHorizontal item={item}/>
            )}
          />
        </View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181a20",
	},
	containerImage: {
		width: "100%",
		height: 300,
	},
	nameContainer: {
		marginTop: 20,
		paddingHorizontal: 20,
	},
	title: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
	},
  addressContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    gap: 10,
  },
	titleAddress: {
		color: "#fff",
		fontSize: 13,
    marginTop: 5,
	},
  separatorLine: {
    height: 1,
    backgroundColor: '#666',
    marginTop: 30,
    marginBottom: 20,
  },
	arrowLeft: {
		position: "absolute",
		top: 40,
		left: 20,
		zIndex: 1,
	},
	bookmark: {
		position: "absolute",
		top: 40,
		right: 20,
		zIndex: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 30,
	},
  titleGallery: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
  galleryContainer: {
    height: 120,
  },
  sliderPhotos: {
    marginTop: 250,
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
});
