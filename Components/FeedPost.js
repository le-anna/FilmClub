import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Pill, Star } from './FeedPostFunctions';
import { colors } from '../styling/tokens';

const fillStar = (rating) => {
  return Star(rating);
};

const showTags = (tags) => {
  return Pill(tags);
};

const getImage = (image) => {
  switch (image) {
    case 'avatar0':
      return require('../assets/Avatar0.png');
    case 'avatar1':
      return require('../assets/Avatar1.png');
    case 'avatar2':
      return require('../assets/Avatar2.png');
    case 'avatar3':
      return require('../assets/Avatar3.png');
    default:
      return require('../assets/Avatar4.png');
  }
};

export function FeedPost(item) {
  const data = item.post;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={getImage(data.user.picture)}
          style={[styles.profileIcon, { backgroundColor: data.user.pictureBgColor }]}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.firstRow}>
          <Text style={styles.name}>
            {data.user.fname} {data.user.lname} @{data.user.username}
          </Text>
          <Text style={styles.hour}>{data.date}</Text>
        </View>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description} ellipsizeMode='tail' numberOfLines={2}>
          {data.description}
        </Text>
        <View style={styles.tags}>{showTags(data.tags)}</View>
        <View style={styles.icons}>
          <View style={styles.stars}>{fillStar(data.rating)}</View>
          <View style={styles.commentAndShareContainer}>
            <FontAwesome5 name={'comment'} style={{ color: '#fff' }} light />
            <Text style={styles.iconText}>2k</Text>
          </View>
          <View style={styles.commentAndShareContainer}>
            <FontAwesome5 name={'share'} style={{ color: '#fff' }} light />
            <Text style={styles.iconText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export function ProfilePost(item) {
  const data = item.post;

  return (
    <View style={styles.profilePostContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.firstRow}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.hour}>{data.date}</Text>
        </View>
        <Text style={styles.description} ellipsizeMode='tail' numberOfLines={2}>
          {data.description}
        </Text>
        <View style={styles.tags}>{showTags(data.tags)}</View>
        <View style={styles.profilePostIcons}>
          <View style={styles.stars}>{fillStar(data.rating)}</View>
          <View style={styles.commentAndShareContainer}>
            <FontAwesome5 name={'comment'} style={{ color: '#fff' }} light />
            <Text style={styles.iconText}>2k</Text>
          </View>
          <View style={styles.commentAndShareContainer}>
            <FontAwesome5 name={'share'} style={{ color: '#fff' }} light />
            <Text style={styles.iconText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 112,
    margin: 20,
    backgroundColor: 'transparent',
  },
  profilePostContainer: {
    flexDirection: 'row',
    height: 112,
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  profileContainer: {
    flex: 1,
  },
  profileIcon: {
    height: 36,
    width: 36,
    borderRadius: 50,
  },
  contentContainer: {
    flex: 6,
    rowGap: 3,
  },
  firstRow: {
    flexDirection: 'row',
    height: 15,
  },
  name: {
    flex: 4,
    color: colors.textSecondary,
    fontSize: 12,
  },
  hour: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 12,
    textAlign: 'right',
  },
  title: {
    height: 17,
    fontSize: 14,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  description: {
    height: 24,
    fontSize: 10,
    color: colors.textPrimary,
  },
  tags: {
    height: 18,
    flexDirection: 'row',
    columnGap: 6,
    marginTop: 4,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.actionSecondary,
    marginTop: 4,
  },
  profilePostIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.actionSecondary,
    marginTop: 4,
  },
  stars: {
    flex: 3,
    columnGap: 3,
    flexDirection: 'row',
  },
  commentAndShareContainer: {
    flex: 1,
    flexDirection: 'row',
    color: colors.actionSecondary,
    fontSize: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconText: {
    color: colors.textPrimary,
    fontSize: 8,
    marginLeft: 4,
  },
});
