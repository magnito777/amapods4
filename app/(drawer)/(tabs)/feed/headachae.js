import { View, Text, Button, ScrollView,Image, Linking, Alert  } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import Markdown from 'react-native-markdown-display';
import className from 'twrnc';

import { Ionicons } from '@expo/vector-icons';



const openWhatsApp = () => {
  const phoneNumber = ' https://chat.whatsapp.com/KzdKdQYYJ8OJocUcdSXrLF'; // Your phone number with country code
  const message = 'Hello!'; // Optional message

  const url = `whatsapp://send?phone=${phoneNumber}&text=${message}`;

  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Alert.alert('WhatsApp is not installed on this device');
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));
};






const copy = `
## Postpartum Headaches: Causes, Types, and Management

![Postpartum Hemorrhage](../images/mood%20changes.png)

### Introduction

Postpartum headaches are a common occurrence, affecting up to 39% of women in the first week after delivery. These headaches can range from mild to severe and may be caused by various factors, including hormonal changes, dehydration, stress, and underlying medical conditions.

## Causes of Postpartum Headaches

### Primary Headaches
- **Tension headaches**
- **Migraines**

### Secondary Headaches
- **Preeclampsia**
- **Post-dural puncture headache (PDPH)**
  - Caused by accidental dural puncture during epidural or spinal anesthesia
- **Cerebral venous thrombosis**
- **Stroke**

## Risk Factors
- **History of migraines or tension headaches**
- **Anticoagulant medication**
- **Anemia**
- **Severe preeclampsia or HELLP syndrome**
- **Uterine fibroids**
- **Multiple pregnancy**
- **Assisted reproductive technologies**

## Symptoms
- **Severe, throbbing headache**
- **Nausea and vomiting**
- **Light and sound sensitivity**
- **Visual disturbances**
- **Neck stiffness**

## Diagnosis and Treatment
- **Physical exam and medical history**
- **Neurological exam or imaging tests if secondary headache is suspected**
- **Over-the-counter pain relievers**
- **Prescription medications for severe or persistent headaches**
- **Epidural blood patch for PDPH**

## Prevention
- **Staying hydrated**
- **Getting enough sleep**
- **Practicing stress management techniques**

## Conclusion
Postpartum headaches are a common occurrence, but most are benign and can be managed with over-the-counter pain relievers and self-care. However, severe or persistent headaches may be a sign of a more serious underlying condition and require prompt medical attention.
`;

export default function Page() {
  return (
    <View style={className`flex-1 items-center justify-center text-white bg-white`}>
      <Text style={{fontSize:18}}>Add New Post Page</Text>
      <Button onPress={() => router.back()} title='Go Back' />
    
       <ScrollView >
       <Image
  source={require('../../../../componets/contents/images/depreesed.jpg')}
  style={{ width: 300, height: 300, resizeMode: 'cover' }}
/>
       <Markdown >
            {copy}
      </Markdown>
       </ScrollView>
        
      
       <View style={className`flex-row gap--4 bg-purple-500`}>
      <Button
        title=" Chat on WhatsApp"
        buttonStyle={{ backgroundColor: '#25D366' }} // WhatsApp green color
      
        onPress={openWhatsApp}
      />
      <Ionicons name="logo-whatsapp" size={38} color="green" />
    </View>
 


    </View>
  )
}