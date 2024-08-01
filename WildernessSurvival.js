import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';

const WildernessSurvival = () => {
  const handleWarningClick = () => {
    Alert.alert('Alert', 'Your location has been successfully sent to us. Stay alert and alive till then.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wilderness Survival Guide</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.section} id="navigation">
          <Text style={styles.sectionTitle}>Navigation</Text>
          <View style={styles.content}>
            <Image
              source={{ uri: 'https://qph.cf2.quoracdn.net/main-qimg-ee971e22022cf3d629d03da6073a55b7-lq' }}
              style={styles.image}
            />
            <Text style={styles.text}>
              Use the sun to navigate. Remember the sun rises in the east and sets in the west. At noon, the sun is to the south in the Northern Hemisphere and to the north in the Southern Hemisphere.
            </Text>
          </View>
        </View>
        <View style={styles.section} id="water">
          <Text style={styles.sectionTitle}>Finding Water</Text>
          <View style={styles.content}>
            <Image
              source={{ uri: 'https://cdn.shopify.com/s/files/1/2264/1077/files/51637002_l_large.jpg?v=1538085845' }}
              style={styles.image}
            />
            <Text style={styles.text}>
              Look for signs of water such as green vegetation, insect activity, and animal tracks. Collect dew in the morning with a cloth or plastic sheet.
            </Text>
          </View>
        </View>
        <View style={styles.section} id="shelter">
          <Text style={styles.sectionTitle}>Building a Shelter</Text>
          <View style={styles.content}>
            <Image
              source={{ uri: 'https://i.ytimg.com/vi/vCT9K72ByUE/maxresdefault.jpg' }}
              style={styles.image}
            />
            <Text style={styles.text}>
              Find a safe and dry location. Use natural materials like branches, leaves, and grass to build a simple shelter to protect yourself from the elements.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Stay safe and always be prepared!</Text>
        <Button
          title="Send Location"
          onPress={handleWarningClick}
          color="#ff4500"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  header: {
    backgroundColor: '#2e8b57',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  main: {
    marginTop: 20,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
    overflow: 'hidden',
  },
  sectionTitle: {
    backgroundColor: '#3cb371',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderBottomWidth: 2,
    borderBottomColor: '#3cb371',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
  },
  footer: {
    backgroundColor: '#2e8b57',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default WildernessSurvival;
