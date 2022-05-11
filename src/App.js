import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import PlaysScreen from './screens/PlaysScreen';
import TurnipScreen from './screens/TurnipScreen';
import EditSpeechScreen from './screens/EditSpeechScreen';
import VectorImage from 'react-native-vector-image';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('touch reset')} style={styles.button}>
        <Text style={styles.buttonText}>Стереть данные</Text>
      </TouchableOpacity>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="PlaysScreen"
        component={PlaysScreen}
        options={{title: 'Репы'}}
      />
      <HomeStack.Screen
        name="TurnipScreen"
        component={TurnipScreen}
        options={({route}) => ({title: route.params.title})}
      />
      <HomeStack.Screen
        name="EditSpeechScreen"
        component={EditSpeechScreen}
        options={{
          title: 'Редактирование речи',
        }}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let icons = {
              Home: require('./assets/news.svg'),
              Settings: require('./assets/settings.svg'),
            };
            return <VectorImage source={icons[route.name]} width={30} height={30} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 30,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  },
});
