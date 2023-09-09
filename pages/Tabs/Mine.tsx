import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {StyledButtonVariant, StyledButtonText} from '../components/GlueStyle';

const Mine = () => {
  return (
    <View style={styles.box}>
      <StyledButtonVariant
        //内部变量以key=内部定义value的形式传入
        variant="solid"
        size="xs"
        //css in js嵌入的
        sx={{
          h: 44,
          justifyContent: 'center',
          alignItems: 'center',
          px: 20,
          py: 15,
        }}>
        <StyledButtonText>Button</StyledButtonText>
      </StyledButtonVariant>
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

export default Mine;
