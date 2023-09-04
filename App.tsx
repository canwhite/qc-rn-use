import React from 'react';
// import {SafeAreaView, useColorScheme} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navs/Navs';
import GloablContext from './context/State';
import {useReactive} from 'ahooks';

function App(): JSX.Element {
  //全局状态
  const state = useReactive({
    id: '455',
  });

  return (
    // SafeAreaView 组件在处理设备屏幕的刘海、圆角或者系统导航栏等特殊区域时尤为有用。
    // 它可以确保你的应用内容不会被这些特殊区域遮挡，
    // 保证在不同设备上都有良好的可用性和用户体验。
    <GloablContext.Provider value={state}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GloablContext.Provider>
  );
}

export default App;
