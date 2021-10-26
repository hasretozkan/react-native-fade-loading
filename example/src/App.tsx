import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { FadeLoading } from 'react-native-fade-loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Fade Loading</Text>
      <Text style={[styles.title, { fontSize: 16, marginVertical: 10 }]}>
        First Section
      </Text>
      <FadeLoading style={[styles.box, { width: '45%' }]} />
      <FadeLoading style={styles.box} animated={false} />
      <FadeLoading style={styles.box} visible={false} />
      <FadeLoading style={styles.box} />
      <FadeLoading style={styles.box} />
      <Text style={[styles.title, { fontSize: 16, marginVertical: 10 }]}>
        Second Section
      </Text>
      <FadeLoading style={[styles.box, { height: 150 }]} />
      <FadeLoading style={styles.box} primaryColor="red" duration={5000} />
      <FadeLoading style={styles.box} secondaryColor="yellow" />
      <FadeLoading style={styles.box} />
      <FadeLoading style={[styles.box, { width: '45%' }]} />
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
