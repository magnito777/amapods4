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
# Postpartum Hemorrhage: Recognizing Severe Bleeding After Childbirth

![Postpartum Hemorrhage]('../../../../componets/contents/images/severe-bleeding.png');
)  <!-- Replace with the actual URL of your image -->

## Definition and Causes

Postpartum hemorrhage (PPH) is a serious condition characterized by severe bleeding after childbirth. It's a leading cause of maternal morbidity and mortality worldwide. Early recognition and prompt treatment are crucial to prevent complications and save lives.

PPH is traditionally defined as blood loss greater than 500 ml after vaginal delivery or 1000 ml after cesarean delivery. The most common cause of PPH is uterine atony, which occurs when the uterus fails to contract adequately after delivery, leading to uncontrolled bleeding.

Other causes include:

- Placental complications (e.g., placenta previa, placental abruption, retained placental fragments)
- Genital tract trauma (e.g., cervical, vaginal, or uterine lacerations)
- Coagulation disorders

## Risk Factors

Several factors can increase the risk of PPH:

- **History of severe PPH**
- **Anticoagulant medication**
- **Anemia**
- **Severe preeclampsia or HELLP syndrome**
- **Uterine fibroids**
- **Multiple pregnancy**
- **Assisted reproductive technologies**

## Symptoms and Diagnosis

The primary symptom of PPH is heavy vaginal bleeding. Other signs may include:

- **Dizziness**
- **Feeling faint**
- **Blurred vision**
- **Rapid heart rate**
- **Hypotension**

Diagnosis is based on the amount of blood loss and the presence of symptoms.

## Management

Immediate management of PPH involves the following steps:

1. **Call for help and activate the postpartum hemorrhage protocol**
2. **Assess the patient's vital signs and provide resuscitation if needed**
3. **Identify and treat the cause of bleeding**
   - Uterine massage and administration of uterotonic medications for uterine atony
   - Repair of genital tract trauma
   - Treatment of coagulation disorders
4. **Consider invasive procedures if bleeding persists**
   - Uterine balloon tamponade
   - Arterial embolization
   - Surgical interventions (e.g., uterine artery ligation, hysterectomy)

## Prevention

Strategies to prevent PPH include:

- **Active management of the third stage of labor**
- **Routine use of uterotonic agents after delivery**
- **Identification and management of risk factors during pregnancy**
- **Delivery in a facility with access to blood products and advanced obstetric care**

## Conclusion

Postpartum hemorrhage is a serious complication that requires prompt recognition and management. Healthcare providers should be familiar with the risk factors, symptoms, and evidence-based interventions to prevent and treat PPH effectively. Early action and a multidisciplinary approach are essential to minimize maternal morbidity and mortality associated with this condition.
`;

export default function Page() {
  return (
    <View style={className`flex-1 items-center justify-center text-white bg-white`}>
      <Text style={{fontSize:18}}>Add New Post Page</Text>
      <Button onPress={() => router.back()} title='Go Back' />
    
       <ScrollView >
       <Image
  source={require('../../../../componets/contents/images/severe-bleeding.png')}
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