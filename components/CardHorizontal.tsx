import React from 'react'
import { Image, Modal, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { ImageSourcePropType } from 'react-native'

export default function CardHorizontal({item}: {item: ImageSourcePropType}) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableOpacity 
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Image source={item} style={styles.image} />
      </TouchableOpacity>

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
            source={item} 
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
    width: 100,
    height: 100,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
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