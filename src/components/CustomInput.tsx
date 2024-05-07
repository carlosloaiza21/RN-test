import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface Props {
  placeholder: string;
  setValue: (val: string) => void;
}

export const CustomInput = ({placeholder, setValue}: Props) => {
  const [val, setVal] = useState<string>('');

  const handleChange = (val: string) => {
    setVal(val);
    setValue(val);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={val}
        onChangeText={handleChange}
        style={{textAlign: 'center'}}
        placeholder={placeholder}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
