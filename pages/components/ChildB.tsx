import React, {FC} from 'react';
import {View, Text} from 'react-native';
type Props = Partial<{
  message: number;
}>;
const ChildB: FC<Props> = ({message}) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};
export default ChildB;
