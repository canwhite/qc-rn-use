import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Mine = () => {
  return (
    <View style={styles.box}>
      <Text>Mine Screen</Text>
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
