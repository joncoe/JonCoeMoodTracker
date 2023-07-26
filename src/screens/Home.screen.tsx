import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodItemRow } from '../components/MoodItemRow';
import { MoodTypeOption, MoodOptionWithTimestamp } from '../types';
import format from 'date-fns/format';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
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
