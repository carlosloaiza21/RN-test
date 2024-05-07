import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface Props {
  text: string;
  onPress?: () => void;
}

export const CustomButton = ({text, onPress}: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
