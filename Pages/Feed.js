import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { FeedPost } from '../Components/FeedPost';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Navigation from '../Components/Navigation';
import testData from '../testdata.json';
import { colors } from '../styling/tokens';

export default function Feed() {
  const data = testData.feed;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Feed</Text>
        <View style={styles.filterContainer}>
          <FontAwesome5 name={'sort'} style={{ color: '#fff', fontSize: 10 }} />
          <Text style={[styles.filterText, { marginRight: 10 }]}>Sort</Text>
          <FontAwesome5 name={'filter'} style={{ color: '#fff', fontSize: 8 }} />
          <Text style={styles.filterText}>Filter</Text>
        </View>
        <View style={styles.feedContainer}>
          <ImageBackground
            source={require('../assets/Gradient.png')}
            style={{ position: 'absolute', width: 400, height: 800 }}
          />
          <>
            {data.map((item, index) => {
              return (
                <>
                  <FeedPost post={item} key={index} />
                  <View style={styles.line} />
                  <View style={styles.line} />
                </>
              );
            })}
          </>
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.backgroundPrimary,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 40,
    fontWeight: '700',
    marginLeft: 20,
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  filterText: {
    color: colors.textPrimary,
    marginLeft: 3,
    marginRight: 20,
    fontSize: 12,
  },
  feedContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  line: {
    height: 0.2,
    backgroundColor: colors.postBorderBottom,
  },
});
