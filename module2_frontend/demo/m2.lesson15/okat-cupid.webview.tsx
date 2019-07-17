import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://webbeast2019.github.io/okat-cupid/'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#000',
  },
});
