import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to Shipwrek</Text>
          <Text style={styles.subHeaderText}>Your Ultimate Survival Companion</Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.intro}>
            <Text style={styles.sectionTitle}>Survive the Unthinkable</Text>
            <Text style={styles.text}>
              Shipwrek is designed to provide you with all the tools and knowledge you need to survive in a shipwreck situation. From emergency alerts to survival tips, we've got you covered.
            </Text>
          </View>
          <View style={styles.features}>
            <Text style={styles.sectionTitle}>Key Features</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>Real-time Emergency Alerts</Text>
              <Text style={styles.listItem}>Survival Tips and Tricks</Text>
              <Text style={styles.listItem}>Interactive SOS Signals</Text>
              <Text style={styles.listItem}>Offline Navigation and Maps</Text>
              <Text style={styles.listItem}>Weather Forecasts and Updates</Text>
            </View>
          </View>
          <View style={styles.cta}>
            <Text style={styles.sectionTitle}>Be Prepared, Stay Safe</Text>
            <Text style={styles.text}>
              Download Shipwrek today and turn your smartphone into a powerful survival tool. Don't leave shore without it.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>&copy; 2024 Shipwrek. All Rights Reserved.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Background color instead of image
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  intro: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  features: {
    marginBottom: 20,
  },
  list: {
    alignItems: 'center',
  },
  listItem: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  cta: {
    alignItems: 'center',
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Home;
