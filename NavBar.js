import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <View style={styles.navList}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FirstAid')}>
          <Text style={styles.navLink}>First Aid</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('WildernessSurvival')}>
          <Text style={styles.navLink}>Wilderness Survival</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Navigation')}>
          <Text style={styles.navLink}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('EmergencySignaling')}>
          <Text style={styles.navLink}>Emergency Signaling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Map')}>
          <Text style={styles.navLink}>Offline Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#2e8b57',
    padding: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
  },
  navList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    marginHorizontal: 10,
  },
  navLink: {
    textDecorationLine: 'none',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#3cb371',
    transition: 'background-color 0.3s, transform 0.2s',
    display: 'inline-block',
  },
});

export default NavBar;
