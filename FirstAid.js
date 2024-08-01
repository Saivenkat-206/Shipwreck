import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const FirstAid = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: 'Stop Bleeding',
      imgSrc: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1570016617900_mainnews2012_x1.jpg',
      description: 'Apply pressure to the wound using a clean cloth. If the bleeding doesn\'t stop, keep applying pressure and seek medical help as soon as possible.',
    },
    {
      title: 'Clean and Dress Wounds',
      imgSrc: 'https://media.post.rvohealth.io/wp-content/uploads/2022/02/Hands-bandaging-a-wounded-arm-thumbnail-732x549.jpg',
      description: 'Clean the wound with clean water if available. Apply an antiseptic if you have one, and cover the wound with a sterile bandage or clean cloth.',
    },
    {
      title: 'Treating Shock',
      imgSrc: 'https://www.wikihow.com/images/thumb/2/2a/Treat-Shock-Step-1-Version-2.jpg/v4-460px-Treat-Shock-Step-1-Version-2.jpg.webp',
      description: 'Have the person lie down with their feet elevated. Keep them warm with a blanket or clothing and try to keep them calm. Avoid giving them anything to eat or drink.',
    },
    {
      title: 'Broken Bones and Sprains',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4QI4JiGmw1I8wN8TQpveEmde6-xidefCNDQ&s',
      description: 'Immobilize the injured area using a splint. You can make a splint using sticks and cloth. Do not attempt to straighten the bone. Apply ice if available to reduce swelling.',
    },
    {
      title: 'Hypothermia',
      imgSrc: 'https://media.istockphoto.com/id/1401152528/photo/woman-person-is-lost-and-stand-in-wild-forest-in-cold-day-using-first-aid-emergency-blanket.jpg?s=170667a&w=0&k=20&c=OA3sUyLclCvNVk5bdfyj7OYx00w3Ezl34JBXMesV74M=',
      description: 'Move the person to a warm place. Remove any wet clothing and cover them with dry clothing and blankets. Provide warm drinks if they are conscious and able to drink.',
    },
    {
      title: 'Heat Exhaustion and Heat Stroke',
      imgSrc: 'https://media.istockphoto.com/id/477946600/photo/dehydration.jpg?s=612x612&w=0&k=20&c=1Srz1llNof7HE8QDoFP8hxePECtOZQF0glzgeYblVGo=',
      description: 'Move the person to a cool place and have them lie down. Give them cool water to drink in small sips. Apply cool, wet cloths to their skin and fan them if possible. Seek medical help immediately if you suspect heat stroke.',
    },
    {
      title: 'CPR (Cardiopulmonary Resuscitation)',
      imgSrc: 'https://t3.ftcdn.net/jpg/01/63/96/38/360_F_163963883_ED8HZtPDFW0RtCpf5BPnOqOxu0ij8fEC.jpg',
      description: 'If the person is unresponsive and not breathing, begin CPR. Place the heel of your hand on the center of the chest, place your other hand on top, and press down hard and fast (about 100-120 compressions per minute). Give two rescue breaths after every 30 compressions if trained to do so.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>First Aid in Survival Situations</Text>
      <View style={styles.grid}>
        {sections.map((section, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{section.title}</Text>
            <Image source={{ uri: section.imgSrc }} style={styles.image} />
            {activeSection === index && (
              <Text style={styles.description}>{section.description}</Text>
            )}
            <TouchableOpacity 
              onPress={() => toggleSection(index)} 
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                {activeSection === index ? 'Hide Details' : 'Show Details'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e8b57',
    fontSize: 24,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 2,
    borderColor: '#2e8b57',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    width: '48%',
  },
  cardTitle: {
    color: '#2e8b57',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
    color: '#333',
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2e8b57',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default FirstAid;
