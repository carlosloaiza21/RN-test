import React from 'react';
import {SafeAreaView, TouchableHighlight, Text, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

export const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight
        style={styles.Button}
        onPress={() => navigation.navigate('Task')}>
        <Text>TASK</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.Button}
        onPress={() => navigation.navigate('List')}>
        <Text>LIST</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: 'grey',
    padding: 10,
    margin: 20,
    borderRadius: 4,
  },
});
