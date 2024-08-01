import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const content = {
  en: {
    title: 'Emergency Signaling',
    ways: 'Effective ways to signal for help:',
    methods: [
      {
        name: 'Signal Fire',
        description: 'Create a fire using dry wood and green branches to produce smoke during the day. Smoke signals are visible from afar and can attract attention. Make sure the fire is controlled and safe.',
        imgSrc: 'https://blog.ucogear.com/wp-content/uploads/2018/05/Building-a-fire-Compressed.jpg',
        tips: [
          'Use a fire starter or dry kindling to get the fire going.',
          'Build a fire in a clear, safe area away from flammable materials.',
          'Maintain the fire and add green branches intermittently for more smoke.'
        ]
      },
      {
        name: 'Signal Mirror',
        description: 'A mirror reflects sunlight, creating flashes of light visible from a distance. This method is effective during the day and can be seen from miles away.',
        imgSrc: 'https://www.survivalresources.com/images/content/OpeningPhotoCopyright.Original.jpg',
        tips: [
          'Use a mirror with a large reflective surface for better visibility.',
          'Signal by directing the light towards the sun and flashing in short bursts.',
          'Keep the mirror clean and free of scratches for maximum effectiveness.'
        ]
      },
      {
        name: 'Whistle',
        description: 'A whistle is an effective signaling device. Blow it in bursts of three, which is the international distress signal. It’s easy to carry and can be heard from a distance.',
        imgSrc: 'https://m.media-amazon.com/images/I/717krXhzgEL.jpg',
        tips: [
          'Carry a whistle at all times in survival situations.',
          'Blow the whistle in intervals of three long blasts to signal distress.',
          'Keep the whistle easily accessible and practice using it.'
        ]
      },
      {
        name: 'SOS Signal',
        description: 'SOS is a universal distress signal. You can create it using rocks, logs, or by drawing it in the sand. It stands for “Save Our Souls” and is recognized internationally.',
        imgSrc: 'https://bearfoottheory.com/wp-content/uploads/2017/04/G0122668.jpg',
        tips: [
          'Ensure the SOS signal is large and clear from a distance.',
          'Use contrasting materials for better visibility (e.g., dark rocks on light sand).',
          'Combine with other signaling methods for increased effectiveness.'
        ]
      },
    ],
  }
};

const EmergencySignaling = () => {
  const [expanded, setExpanded] = useState(null);
  const { title, ways, methods } = content.en;

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{ways}</Text>
      <FlatList
        data={methods}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
            style={[styles.methodContainer, expanded === index && styles.expanded]}
            onPress={() => toggleExpand(index)}
          >
            <Text style={styles.methodTitle}>{item.name}</Text>
            <Image 
              source={{ uri: item.imgSrc }} 
              style={styles.image} 
            />
            {expanded === index && (
              <>
                <Text style={styles.description}>{item.description}</Text>
                <FlatList
                  data={item.tips}
                  keyExtractor={(tip, tipIndex) => tipIndex.toString()}
                  renderItem={({ item: tip }) => (
                    <Text style={styles.tip}>{tip}</Text>
                  )}
                />
              </>
            )}
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff',
    flexGrow: 1,
  },
  title: {
    color: '#2e8b57',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  methodContainer: {
    borderWidth: 2,
    borderColor: '#2e8b57',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  expanded: {
    transform: [{ scale: 1.05 }],
  },
  methodTitle: {
    color: '#2e8b57',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2e8b57',
    marginBottom: 10,
  },
  description: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  tip: {
    color: '#333',
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 20,
  },
});

export default EmergencySignaling;
