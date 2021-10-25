import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { FadeLoading } from 'react-native-fade-loading';

export default function App() {
  return (
    <View style={styles.container}>
      <FadeLoading style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
