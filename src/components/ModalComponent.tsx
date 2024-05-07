import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {CustomButton} from './CustomButton';
import {CustomInput} from './CustomInput';

interface Props {
  onSave: () => void;
  onCancel: () => void;
  showModal: boolean;
  onChangeValue: (val: string) => void;
}

export const ModalComponent = ({
  onSave,
  onCancel,
  showModal,
  onChangeValue,
}: Props) => {
  return (
    <Modal isVisible={showModal} coverScreen>
      <View style={styles.modalContainer}>
        <CustomInput placeholder="Description" setValue={onChangeValue} />
        <View style={styles.actionsContainer}>
          <CustomButton text="Add" onPress={onSave} />
          <CustomButton text="Cancel" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    paddingTop: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    flex: 1,
    display: 'flex',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
