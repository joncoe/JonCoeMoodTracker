import { Text, View, FlatList, Pressable, StyleSheet } from 'react-native';
import React, { Component, useState, useEffect, useCallback } from 'react';

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const selectMood = useCallback(e => {
    console.log(e);
  });
  return (
    <View style={styles.moodList}>
      {moodOptions.map(option => (
        <Text key={option.emoji} style={styles.moodText}>
          {option.emoji}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
