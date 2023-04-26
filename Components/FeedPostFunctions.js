import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../styling/tokens';

// let colors = {
//   Netflix: '#B20000',
//   Hulu: '#66AA33',
// };

export function Star(rating) {
  var emptyStar = 5 - rating;
  let content = [];
  for (var i = 0; i < rating; i++) {
    content.push(<FontAwesome5 name={'star'} style={{ color: colors.actionSecondary }} solid />);
  }
  for (var i = 0; i < emptyStar; i++) {
    content.push(<FontAwesome5 name={'star'} style={{ color: colors.actionSecondary }} />);
  }
  return content;
}

export function Pill(tags) {
  var content = [];
  if (tags.service === 'Netflix') {
    content.push(
      <View style={[styles.tag, { backgroundColor: colors.pillNetflix }]}>
        <Text style={styles.tagText}>{tags.service}</Text>
      </View>
    );
  } else if (tags.service === 'Hulu') {
    content.push(
      <View style={[styles.tag, { backgroundColor: colors.pillHulu }]}>
        <Text style={styles.tagText}>{tags.service}</Text>
      </View>
    );
  } else if (tags.service === 'HBO') {
    content.push(
      <View style={[styles.tag, { backgroundColor: colors.pillHBO }]}>
        <Text style={styles.tagText}>{tags.service}</Text>
      </View>
    );
  }

  if (tags.movie) {
    content.push(
      <View style={[styles.tag, { backgroundColor: colors.pillMovie }]}>
        <Text style={styles.tagText}>{tags.title}</Text>
      </View>
    );
  } else {
    content.push(
      <View style={[styles.tag, { backgroundColor: colors.pillShow }]}>
        <Text style={styles.tagText}>{tags.title}</Text>
      </View>
    );
  }

  if (tags.season !== '') {
    content.push(
      <View style={[styles.tag, { backgroundColor: colors.pillSeason }]}>
        <Text style={styles.tagText}>{tags.season}</Text>
      </View>
    );
  }
  if (tags.episode !== '') {
    content.push(
      <View style={[styles.tag, { backgroundColor: colors.pillEpisode }]}>
        <Text style={styles.tagText}>{tags.episode}</Text>
      </View>
    );
  }
  return content;
}
const styles = StyleSheet.create({
  tags: {
    height: 18,
    flexDirection: 'row',
    columnGap: 6,
    marginTop: 4,
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: 'center',
  },
  tagText: {
    fontSize: 8,
    color: colors.textPrimary,
  },
  rating: {
    flex: 1,
    color: colors.actionSecondary,
    fontSize: 8,
    textAlign: 'right',
    alignItems: 'center',
  },
});
