import React, {useContext, useEffect, useLayoutEffect, useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useRequest, useReactive} from 'ahooks';
import GloablContext from '../context/State';

const Detail = (props: any) => {
  //使用自己全局定义的context
  const context = useContext(GloablContext);

  //路由与组件之间通讯,可以覆盖配置
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: '新的详情',
    });
  }, [props.navigation]);

  const state = useReactive({
    id: undefined,
  });

  useEffect(() => {
    state.id = props.route.params.id;
  }, []);

  return (
    <View style={styles.box}>
      <Text>
        Details Screen,{state.id},{context.id}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detail;
