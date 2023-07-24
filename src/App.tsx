import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
});
