import React, {useMemo, useCallback} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useReactive, useRequest} from 'ahooks';
import ChildA from '../components/ChildA';
import ChildB from '../components/ChildB';
import axios from 'axios';

type props = {
  navigation: any;
};

const getList = async () => {
  const data = await axios.get('https://api.apiopen.top/api/getImages', {
    // 传递参数
    params: {
      page: 0,
      size: 5,
    },
  });
  return data;
};

//可以箭头函数小括号直接返回
const Home = ({navigation}: props) => {
  const state = useReactive({
    count: 0,
    list: [],
  });

  const {loading, run} = useRequest(getList, {
    manual: true,
    onSuccess: (res, params) => {
      console.log('----result:', res?.data?.result?.list);
      state.list = res?.data?.result?.list || [];
      console.log('list', state.list);
    },
  });

  //在这里使用useCallback和useMemo
  const message = useMemo(() => {
    return state.count;
  }, [state.count]);

  //操作
  const add = useCallback(() => {
    state.count += 1;
  }, [state.count]);

  return (
    <View style={styles.box}>
      <Text>Home Screen</Text>
      <View style={styles.btn}>
        <Button
          onPress={() => navigation?.navigate('Details', {id: '123'})}
          title="Go to details"
        />
      </View>
      {/* cb用来显示 */}
      <View style={styles.cb}>
        <ChildB message={message} />
      </View>
      {/* ca用来操作 */}
      <View style={styles.ca}>
        <ChildA add={add} />
      </View>
      {/* request */}
      <View style={styles.btn}>
        <Button onPress={() => run()} title="request" />
      </View>
      {/* li */}
      {state.list.map((item: any) => (
        <View key={item.id}>
          <Text>{'--' + item?.title + '--'}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: 10,
  },
  ca: {
    marginTop: 10,
  },
  cb: {
    marginTop: 10,
  },
});

export default Home;
