import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Navigation from '../Components/Navigation';
import { BlurView } from '@react-native-community/blur';
import { colors } from '../styling/tokens';
import { ProfilePost } from '../Components/FeedPost';
import testData from '../testdata.json';

const Profile = () => {
  const data = testData.feed[0];
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.banner}>
          <ImageBackground
            source={require('../assets/ProfileBannerGradient.png')}
            style={styles.bannerGradient}
          ></ImageBackground>
        </View>
        <BlurView
          style={styles.blur}
          blurType='dark'
          blurAmount={25}
          blurRadius={20}
          reducedTransparencyFallbackColor='black'
        />
      </View>
      <Image
        source={require('../assets/Avatar0.png')}
        style={[styles.profileIcon, { backgroundColor: data.user.pictureBgColor }]}
      />
      <View style={[styles.contentBackground, styles.shadowProp]}>
        <View style={styles.contentContainer}>
          <Text style={styles.profileName}>
            {data.user.fname} {data.user.lname}
          </Text>
          <Text style={styles.username}>@{data.user.username}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.stats}>
              <Text style={styles.statsNum}>1000</Text>
              <Text style={styles.statsText}>Followers</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.statsNum}>1</Text>
              <Text style={styles.statsText}>Critiques</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.statsNum}>30</Text>
              <Text style={styles.statsText}>Following</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>WATCHED</Text>
          <View style={styles.viewingContainer}>
            <Image source={require('../assets/You.png')} style={styles.view} />
            <Image source={require('../assets/NewGirl.jpg')} style={styles.view} />
            <Image source={require('../assets/SquidGames.jpg')} style={styles.view} />
          </View>
          <Text style={styles.smallText}>See All</Text>
          <Text style={styles.subtitle}>YOUR CRITIQUES</Text>
          <ProfilePost post={data} />
        </View>
      </View>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.backgroundPrimary,
  },
  imageContainer: {
    flex: 2,
    width: '100%',
  },
  banner: {
    height: 260,
    width: '100%',
  },
  bannerGradient: {
    width: '100%',
    height: '100%',
  },
  blur: {
    position: 'absolute',
    left: 0,
    bottom: -600,
    right: 0,
    height: 600,
    borderRadius: 40,
  },
  profileIcon: {
    height: 218,
    width: 218,
    backgroundColor: 'grey',
    borderRadius: 200,
    zIndex: 20,
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
  },
  contentBackground: {
    flex: 5,
    backgroundColor: colors.backgroundPrimary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
  },
  contentContainer: {
    marginHorizontal: 30,
    height: '90%',
  },
  profileName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 700,
    color: colors.textPrimary,
    marginTop: 16,
  },
  username: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  stats: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  statsNum: {
    fontSize: 20,
    fontWeight: 700,
    color: colors.textPrimary,
  },
  statsText: {
    fontSize: 14,
    fontWeight: 400,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.textPrimary,
    letterSpacing: 2,
    marginTop: 10,
  },
  viewingContainer: {
    height: 125,
    flexDirection: 'row',
    columnGap: 10,
    marginVertical: 10,
  },
  view: {
    height: 125,
    width: 125,
    backgroundColor: 'grey',
    borderRadius: 30,
  },
  smallText: {
    fontSize: 12,
    color: colors.textSecondary,
    alignSelf: 'flex-end',
  },
});

export default Profile;
