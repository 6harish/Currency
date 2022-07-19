import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go Back to Screen A</Text>
      </Pressable>
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
