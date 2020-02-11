import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Keyboard, Button, Alert, TextInput, Image, View, TouchableWithoutFeedback, FlatList} from 'react-native';

export default function App() {

  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);


  const plusPressed = () => {
      setResult(Number(firstNum) + Number(secondNum));
      useEffect(() => {
        const toString = firstNum + ' + ' + secondNum + ' = ' + result;
        setHistory([...history, {key: toString}]);
    }, [result]);
  }

  const minusPressed = () => {
    setResult(firstNum - secondNum);
    const toString = firstNum + ' - ' + secondNum + ' = ' + result;
    setHistory([...history, {key: toString}]);
  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View class="container" style={styles.container}>
      <View class="inputAndResult" style={{flex: 2, alignItems: 'center',
}}>
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

      <View class="operation" style={{flexDirection: 'row',flex: 1}}>
      <Button onPress={plusPressed} title="+" />
      <Button onPress={minusPressed} title="-" />
      </View>

      <View class="history" style={{flex:2}}>
        <Text>History</Text>
        <FlatList data={history}
                  renderItem={({item}) => <Text>{item.key}</ Text>}
        />
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
