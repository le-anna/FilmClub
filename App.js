import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './Pages/Feed.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MovieEntry from './Pages/MovieEntry.js';
import Profile from './Pages/Profile.js';
import testData from './testdata.json';
import { colors } from './styling/tokens';

export default function App() {
  const Stack = createNativeStackNavigator();
  const data = testData.feed[0];
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          initialRouteName='Feed'
          name='Feed'
          component={Feed}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.backgroundPrimary,
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 30,
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name={'search'} style={{ color: colors.textPrimary, fontSize: 22 }} />
                <Image
                  source={require('./assets/Avatar0.png')}
                  style={[styles.profileIcon, { backgroundColor: data.user.pictureBgColor }]}
                />
              </View>
            ),
            headerLeft: () => (
              <FontAwesome5 name={'bars'} style={{ color: colors.textPrimary, fontSize: 20 }} />
            ),
          }}
        />
        <Stack.Screen
          initialRouteName='Profile'
          name='Profile'
          component={Profile}
          options={{
            title: 'Alina Yu',
            headerStyle: {
              backgroundColor: colors.backgroundPrimary,
            },
            headerTitleStyle: {
              color: colors.textPrimary,
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name={'search'} style={{ color: colors.textPrimary, fontSize: 22 }} />
                <FontAwesome5
                  name={'pen'}
                  style={{ color: colors.textPrimary, fontSize: 22, marginLeft: 5 }}
                />
              </View>
            ),
            headerLeft: () => (
              <FontAwesome5 name={'bars'} style={{ color: colors.textPrimary, fontSize: 20 }} />
            ),
          }}
        />
        <Stack.Screen
          initialRouteName='MovieEntry'
          name='MovieEntry'
          component={MovieEntry}
          options={{
            header: () => <View style={{ height: 40, backgroundColor: 'black' }}></View>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    height: 28,
    width: 28,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginLeft: 4,
  },
});
