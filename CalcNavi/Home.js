import React, {useState} from 'react';
import { StyleSheet, Text, Keyboard, Button, Alert, TextInput, Image, View, TouchableWithoutFeedback} from 'react-native';



export default function HomeScreen(props) {
  navigationOptions= { title:'Home',};

  const {navigate} = props.navigation;

  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const[data, setData] = useState([]);
  const [result, setResult] = useState('');


  const plusPressed = () => {
    // let x = parseInt(firstNum) + parseInt(secondNum);
    const sum = Number(firstNum) + Number(secondNum);
    const historyCalc = firstNum + ' + ' + secondNum + ' = ' + sum;
    setResult(sum);
    setData([...data, {key: historyCalc}]);
  };

  const minusPressed = () => {
    let x = firstNum;
    let y = secondNum;
    setResult(x - y);
    setText(firstNum + ' - ' + secondNum + ' = ' + String(result));
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
        <Button onPress={() => navigate('History', {data: data})}
        title="History"/>
        </View>
        </View>
    </View>
    </TouchableWithoutFeedback>

  );}

    HomeScreen.navigationOptions= ({navigate}) => ({title:'Home'});

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
