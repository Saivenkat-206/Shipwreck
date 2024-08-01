import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Navigation = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Navigation Methods</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.methodTitle}>Using the Sun</Text>
          <Image 
            source={{ uri: 'https://qph.cf2.quoracdn.net/main-qimg-ee971e22022cf3d629d03da6073a55b7-lq' }}
            style={styles.image}
          />
          <Text style={styles.description}>
            The sun rises in the east and sets in the west. At noon, the sun is to the south in the Northern Hemisphere and to the north in the Southern Hemisphere. Use this knowledge to orient yourself.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.methodTitle}>Using the Stars</Text>
          <Image 
            source={{ uri: 'https://www.snowshoemag.com/wp-content/blogs.dir/5/files/Stars.-Polaris.-Ursa-Major.-Ursa-Minor-shutterstock_508549546.jpg' }}
            style={styles.image}
          />
          <Text style={styles.description}>
            At night, you can use stars for navigation. The North Star (Polaris) is useful in the Northern Hemisphere for finding north. Learn to recognize major constellations to assist with orientation.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.methodTitle}>Using a Compass</Text>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/proxy/R0Ye3hQtpk2i6qPGfWECm2aY3-7gcIVEx4AFSBeD7-pzHVi5ZWFWxspmDUnV-sBxz21xJZ3Htl2RI7_k7Msi7Kf6rND2mfxpz9fs-6WA_A' }}
            style={styles.image}
          />
          <Text style={styles.description}>
            A compass provides directions based on magnetic north. It’s essential for accurate navigation, especially in dense forested areas or when visibility is limited. Always keep the compass level for accurate readings.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.methodTitle}>Using Landmarks</Text>
          <Image 
            source={{ uri: 'https://pub.mdpi-res.com/ijgi/ijgi-06-00064/article_deploy/html/images/ijgi-06-00064-g008.png?1569235906' }}
            style={styles.image}
          />
          <Text style={styles.description}>
            Identifying and memorizing landmarks can help you navigate. Observe distinctive natural features like mountains, rivers, or large trees and use them to track your progress and direction.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#2e8b57',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: 10,
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  methodTitle: {
    color: '#3cb371',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    borderColor: '#3cb371',
    borderWidth: 1,
    marginBottom: 10,
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
    color: '#333',
  },
});

export default Navigation;
