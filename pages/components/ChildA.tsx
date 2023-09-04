import React, {FC} from 'react';
import {Button, View} from 'react-native';

//注意type用箭头，interface用冒号
type Props = {
  add: () => void;
};
//https://api.apiopen.top/api/getImages?page=0&size=5
//在这里变化数据
const ChildA: FC<Props> = React.memo(({add}) => {
  return (
    <View>
      <Button
        title="add"
        onPress={() => {
          console.log('----1');
          add();
        }}
      />
    </View>
  );
});
export default ChildA;
