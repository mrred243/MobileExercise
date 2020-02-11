import React, {useState} from 'react';
import { StyleSheet, Text, Keyboard, Button, Alert, TextInput, Image, View, TouchableWithoutFeedback, FlatList} from 'react-native';

export default function App() {

  const [numbers, setNumbers] = useState({firstNum:'', secondNum:''});
  const[text, setText] = useState('');
  const[data, setData] = useState([]);
  const [result, setResult] = useState('');


  const plusPressed = () => {
    // let x = parseInt(firstNum) + parseInt(secondNum);
    const sum = Number(numbers.firstNum) + Number(numbers.secondNum)
    const historyCalc = numbers.firstNum + ' + ' + numbers.secondNum + ' = ' + result
    setResult(String(sum));
    setText();
    Alert.alert(text);
    setData([...data, {key: text}]);
  };

  const minusPressed = () => {
    setResult(numbers.firstNum - numbers.secondNum);
    setText(numbers.firstNum + ' - ' + numbers.secondNum + ' = ' + String(result));
    setData([...data, {key:text}]);
    setText('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.container}>
      <View>
      <Text>Result: {result}</Text>

      <TextInput
        style={{width: 100, borderColor: 'gray', borderWidth: 1}}
        keyboardType="numeric"
        onChangeText={(number) => setNumbers({...numbers, firstNum: number})}
        value={String(numbers.firstNum)}
      />

      <TextInput
        style={{width: 100, borderColor: 'gray', borderWidth: 1}}
        keyboardType="number-pad"
        onChangeText={(number) => setNumbers({...numbers, secondNum: number})}
        value={String(numbers.secondNum)}
      />
      </View>

      <View style={{flexDirection: 'row'}}>
      <Button onPress={plusPressed} title="+" />
      <Button onPress={minusPressed} title="-" />
      </View>
      </View>

      <View style={{flex:2}}>
      <Text>History</Text>
      <FlatList data={data}
                renderItem={({item}) =><Text >{item.key}</ Text>}/>
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
