import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import Home from './Home';
import Mine from './Mine';

const Tab: any = createBottomTabNavigator();
const Navigator: any = Tab.Navigator;
const Screen: any = Tab.Screen;
const tabbar: any = [
  {
    name: 'Home',
    component: Home,
    icon: require('../../imgs/home_un.png'),
    selectIcon: require('../../imgs/home_sel.png'),
  },
  {
    name: 'Mine',
    component: Mine,
    icon: require('../../imgs/mine_un.png'),
    selectIcon: require('../../imgs/mine_sel.png'),
  },
];

const TabNavigator = () => {
  return (
    <Navigator
      screenOptions={({route}: {route: any}) => ({
        tabBarActiveTintColor: '#2C3167',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        //tab里默认也有hedear，我们使用它自己的，当nav中到tab的时候，让nav隐藏
        headerTitleStyle: {
          color: '#000',
          fontSize: 15,
        },

        tabBarIcon: ({
          focused,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          const it = tabbar.filter((item: any) => item.name === route.name)[0];
          const source = focused ? it.selectIcon : it.icon;
          return <Image source={source} style={[styles.image]} />;
        },
      })}>
      {tabbar.map((item: any, index: number) => {
        return (
          <Screen key={index} name={item.name} component={item.component} />
        );
      })}
    </Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});

export default TabNavigator;
