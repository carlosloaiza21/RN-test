import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import type {RootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';
import {ModalComponent} from '../components/ModalComponent';
import {CustomButton} from '../components/CustomButton';
import {addTask} from '../features/task/taskSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList>;

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const Tasks = ({navigation}: Props) => {
  const task = useSelector((state: RootState) => state.task);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(true);

  const dispatch = useDispatch();

  const handleSave = () => {
    if (value.length > 0) {
      dispatch(addTask({id: Math.random(), description: value}));
      setOpenModal(false);
    }
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const updateValue = (val: string) => {
    setValue(val);
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ModalComponent
        onSave={handleSave}
        onCancel={handleCancel}
        showModal={openModal}
        onChangeValue={updateValue}
      />
      <View style={styles.actionContainer}>
        <CustomButton text="Go Home" onPress={goHome} />
        <CustomButton text="Add task" onPress={handleOpenModal} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={task}
          renderItem={({item}) => <Item title={item.description} />}
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
