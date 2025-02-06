import React from 'react'
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { useState } from 'react'
import { ImageSourcePropType } from 'react-native'

interface SliderPhotosProps {
  images: ImageSourcePropType[]
  containerStyle?: object
}

export default function SliderPhotos({ images, containerStyle }: SliderPhotosProps) {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ImageSourcePropType>(images[0])

  const handleImagePress = (image: ImageSourcePropType) => {
    setSelectedImage(image)
    setModalVisible(true)
  }

  return (
    <>
      <PagerView style={[styles.container, containerStyle]}>
        {images.map((image, index) => (
          <Pressable 
            key={index}
            style={styles.page} 
            onPress={() => handleImagePress(image)}
          >
            <Image source={image} style={styles.image} />
          </Pressable>
        ))}
      </PagerView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <Image 
            source={selectedImage} 
            style={styles.modalImage}
            resizeMode="contain"
          />
        </Pressable>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  }
})