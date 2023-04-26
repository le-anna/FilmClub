import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Pill, Star } from '../Components/FeedPostFunctions';
import testData from '../testdata.json';
import { colors } from '../styling/tokens';

const MovieEntry = () => {
  const data = testData.feed[0];

  const fillStar = (rating) => {
    return Star(rating);
  };

  const showTags = (tags) => {
    return Pill(tags);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={require('../assets/You.png')} style={styles.imageStyle}>
          <BlurView
            style={styles.blur}
            blurType='dark'
            blurAmount={25}
            blurRadius={20}
            reducedTransparencyFallbackColor='black'
          />
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.divider} />
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>
              {data.title}
            </Text>
            <FontAwesome5 name={'pen'} style={{ color: '#fff', fontSize: 20 }} />
          </View>
          <View style={styles.tags}>{showTags(data.tags)}</View>
          <Text style={styles.review} ellipsizeMode='tail' numberOfLines={10}>
            {data.description}
          </Text>
          <Text style={styles.expandButton}>Read More</Text>
          <View style={styles.stars}>{fillStar(data.rating)}</View>
          <Text style={styles.date}>Draft saved 4/20/2023</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Publish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    //   <Navigation />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.backgroundPrimary,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
  },
  imageStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
  },
  contentContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    height: 600,
    bottom: 70,
  },
  blur: {
    position: 'absolute',
    left: 0,
    bottom: -530,
    right: 0,
    height: 600,
    borderRadius: 40,
  },
  divider: {
    alignSelf: 'center',
    height: 3,
    width: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 30,
    columnGap: 20,
    marginBottom: 20,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: colors.textPrimary,
    opacity: 1,
    marginRight: 10,
  },
  review: {
    color: colors.textPrimary,
  },
  tags: {
    height: 18,
    flexDirection: 'row',
    columnGap: 6,
    marginVertical: 16,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  expandButton: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.textPrimary,
    marginTop: 10,
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 46,
    backgroundColor: colors.actionPrimary,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 700,
    color: colors.textPrimary,
  },
});

export default MovieEntry;
