import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodItemRow } from '../components/MoodItemRow';
import { MoodTypeOption, MoodOptionWithTimestamp } from '../types';
import format from 'date-fns/format';
import { useAppContext } from '../App.provider';

export const Home: React.FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={appContext.handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
