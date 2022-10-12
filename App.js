import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Post from './src/components/Post';
import Home from './src/screens/Home';

//

const YourApp = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
      <Home/>
      </SafeAreaView>
    </>
  );
};
// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '',
//   },
// });

export default YourApp;
