import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc';

export default function Page() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor : '#050A30'}}>
   
   <Image
  source={require('../assets/images/logo.png')}
  style={{ width: 100, height: 100, resizeMode: 'cover' }}
/>

      <Text style={className`text-white text-6xl font-bold mb-6`}>PODS-AMA</Text>
          
      <TouchableOpacity style={className`bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 mt-12`}>
         <Link href="/about">
          <Text style={className`text-center text-white text-3xl font-bold`}>Get Started</Text>
          </Link>
      </TouchableOpacity>
      
    </View>
  )
}