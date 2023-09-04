//Tabs作为Tab栈的一部分
import React from 'react';
//这两个包要单独引入
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import router from './Router';
//先定义Stack
const Stack: any = createStackNavigator();
//再设计要使用的Nav和Screen
const Navigator: any = Stack.Navigator;
const Screen: any = Stack.Screen;

const StackNavigator = () => {
  //这部分用于拿到标题
  const getChildTitle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return routeName;
  };
  //界面
  return (
    <Navigator>
      {/* 通过map循环来定义所有页面，注意内部return */}
      {router.map((item: any, index: number) => {
        return (
          // 这里用到Screen代表页面
          <Screen
            key={index}
            name={item.name}
            component={item.component}
            options={({route}: {route: any}) => ({
              // 这里主要设置header属性
              // 标题
              headerTitle: getChildTitle(route) || item.title,
              //header样式
              headerStyle: {
                backgroundColor: '#fff',
              },
              //headerTitle的样式
              headerTitleStyle: {
                color: '#000',
                fontSize: 15,
              },
              //tab用自己的header，其他用Nav的
              headerShown: item.title === 'Tab' ? false : true,
            })}
          />
        );
      })}
    </Navigator>
  );
};

export default StackNavigator;
