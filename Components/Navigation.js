import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styling/tokens';

export default function Navigation() {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <View style={styles.navContainer}>
        <TouchableOpacity title='Home' onPress={() => navigation.navigate('Feed')}>
          <FontAwesome5
            name={'home'}
            style={{ color: colors.actionSecondary, fontSize: 22 }}
            light
          />
        </TouchableOpacity>
        <TouchableOpacity title='View Entries' onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name={'plus'} style={{ color: colors.actionSecondary, fontSize: 22 }} />
        </TouchableOpacity>
        <TouchableOpacity title='View Entries' onPress={() => navigation.navigate('MovieEntry')}>
          <FontAwesome5
            name={'bell'}
            style={{ color: colors.actionSecondary, fontSize: 22 }}
            solid
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 60,
    backgroundColor: colors.backgroundPrimary,
    bottom: 0,
    paddingBottom: 15,
  },
  navContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 60,
  },
});
