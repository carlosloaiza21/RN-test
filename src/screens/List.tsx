import React from 'react';
import {useGetUsersQuery} from '../services/user';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList>;

type ItemProps = {
  name: string;
};

const Item = ({name}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

export const List = ({navigation}: Props) => {
  const {isLoading, error, data} = useGetUsersQuery();

  const goHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <CustomButton text="Go Home" onPress={goHome} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => <Item name={item.name} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 5,
    width: '100%',
  },
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    justifyContent: 'center',
    textAlign: 'center',
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '90%',
  },
  title: {
    fontSize: 32,
  },
});
