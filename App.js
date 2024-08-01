import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import EmergencySignaling from './src/pages/EmergencySignaling'; // Ensure this is the correct path
import FirstAid from './src/pages/FirstAid'; // Ensure this is the correct path
import Navigation from './src/pages/Navigation'; // Ensure this is the correct path
import WildernessSurvival from './src/pages/WildernessSurvival'; // Ensure this is the correct path
import MapPage from './src/pages/MapPage'; // Ensure this is the correct path

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.header}>Emergency Signaling</Text>
          <EmergencySignaling />
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>First Aid</Text>
          <FirstAid />
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Navigation Methods</Text>
          <Navigation />
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Wilderness Survival Guide</Text>
          <WildernessSurvival />
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Map Page</Text>
          <MapPage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});
