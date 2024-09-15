import { Link } from 'expo-router';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import twrnc from 'twrnc'; // Assuming twrnc is a styling library

export default function Page() {
  const dangers = [
    <Link href="/(drawer)/(tabs)/feed/new">Infection</Link>,
    <Link href="/(drawer)/(tabs)/feed/headachae">Hemorrhage</Link>,
    <Link href="/diseases/3">Eclampsia</Link>,
    <Link href="/diseases/4">Anemia</Link>,
    <Link href="/diseases/5">Malnutrition</Link>,
    <Link href="/diseases/6">Baby Blues</Link>,
    <Link href="/diseases/7">Postpartum Depression</Link>,
    <Link href="/diseases/8">Breastfeeding Challenges</Link>,
    <Link href="/diseases/9">Urinary Incontinence</Link>,
    <Link href="/diseases/10">Painful Sex</Link>,
  ];

  const renderDangerItem = ({ item, index }) => (
    <View key={index} style={twrnc`mb-4 px-4 py-2 bg-red-100 rounded-lg`}>
      {typeof item === 'string' ? (
        <Text style={twrnc`text-red-700 font-bold`}>{item}</Text>
      ) : (
        item
      )}
    </View>
  );

  return (
    <View style={{ backgroundColor: '#050A30' }}>
      <FlatList
        data={dangers}
        renderItem={renderDangerItem}
        keyExtractor={(item, index) => index.toString()} // Unique key from index
        contentContainerStyle={twrnc`p-5 bg-blue-900`} // Container padding (optional)
      />
    </View>
  );
}