import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <Image source={require('../assets/logo.png')} />
      <Text>Welcome to the Community Project App</Text>
      <Button title="Learn More" onPress={() => alert('Learn More Pressed')} />
      <Footer />
    </View>
  );
}
