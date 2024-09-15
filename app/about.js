import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
export default function Page() {
  return (
    
    
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor : '#050A30'}}>

<TouchableOpacity style={{position: 'absolute', top: 15, left: 20}}>

<Link href={'/'}>
<Ionicons name="arrow-back" size={38} color="white" className="text-black"  />
</Link>
</TouchableOpacity>


   <Image
  source={require('../assets/images/banner.png')}
  style={{ width: 300, height: 300, resizeMode: 'cover' }}
/>
      <Text style={className`text-white text-3xl font-bold mb-6`}>WELCOME</Text>
      <Text style={className`text-white text-3xl font-bold mb-6`}>TO</Text>
      <Text style={className`text-white text-3xl font-bold mb-6`}>PODS-AMA</Text>
          
      <View style={className`flex-col gap-2`}>
      <Link href={'/blog'} asChild>
        <Button title='change lunguage' />
      </Link>
      <Link href={'/blog'} asChild>
        <Button title='login' />
      </Link>
    
      <TouchableOpacity style={className`bg-purple-500 text-white font-semibold  rounded-full hover:bg-blue-700 `}>
     <Link href={'(drawer)/(tabs)/feed'} asChild >
     <Text style={className`text-center text-white text-3xl font-bold`}>continue</Text>
        
      </Link>
     </TouchableOpacity>
     
      </View>
      
    </View>
  )
}