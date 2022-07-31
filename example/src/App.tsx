import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { FadeLoading } from 'react-native-fade-loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Fade Loading</Text>
      <Text style={[styles.title]}>First Section</Text>
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor={''}
        secondaryColor={''}
        duration={0}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={styles.box}
        animated={false}
        children={''}
        primaryColor={''}
        secondaryColor={''}
        duration={0}
        visible={false}
      />
      <FadeLoading
        style={styles.box}
        visible={false}
        children={''}
        primaryColor={''}
        secondaryColor={''}
        duration={0}
        animated={false}
      />
      <FadeLoading
        style={styles.box}
        children={''}
        primaryColor={''}
        secondaryColor={''}
        duration={0}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={styles.box}
        children={''}
        primaryColor={''}
        secondaryColor={''}
        duration={0}
        visible={false}
        animated={false}
      />
      <Text style={[styles.title]}>Second Section</Text>
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor={''}
        secondaryColor={''}
        duration={0}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={styles.box}
        primaryColor="red"
        duration={5000}
        children={''}
        secondaryColor={''}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={styles.box}
        secondaryColor="yellow"
        children={''}
        primaryColor={''}
        duration={0}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={styles.box}
        children={''}
        primaryColor={''}
        secondaryColor={''}
        duration={0}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor={''}
        secondaryColor={''}
        duration={0}
        visible={false}
        animated={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 40,
  },
  box: {
    width: '90%',
    height: 20,
    marginVertical: 5,
  },
});
