import React, {useState} from 'react';
import { StyleSheet, Text, Keyboard, Button, Alert, TextInput, Image, View, TouchableWithoutFeedback} from 'react-native';

export default function App() {

  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [result, setResult] = useState('');


  const plusPressed = (event) => {
    // let x = parseInt(firstNum) + parseInt(secondNum);
    setResult(Number(firstNum) + Number(secondNum));
  }

  const minusPressed = (event) => {
    let x = firstNum;
    let y = secondNum;
    setResult(x - y);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View>
      <Text>Result: {result}</Text>

      <TextInput
        style={{width: 100, borderColor: 'gray', borderWidth: 1}}
        keyboardType="numeric"
        onChangeText={(number) => setFirstNum(number)}
        value={String(firstNum)}
      />

      <TextInput
        style={{width: 100, borderColor: 'gray', borderWidth: 1}}
        keyboardType="number-pad"
        onChangeText={(number) => setSecondNum(number)}
        value={String(secondNum)}
      />
      </View>

      <View style={{flexDirection: 'row'}}>
      <Button onPress={plusPressed} title="+" />
      <Button onPress={minusPressed} title="-" />
      </View>
  </View>
  </TouchableWithoutFeedback>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
