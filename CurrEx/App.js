import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';

export default function App() {

const [input, setInput] = useState('');
const [data, setData] = useState([]);
const [currency, setCurrency] = useState('');
const code = [];

const getCurrency = () => {
  const url = '';
  fetch(url)
  .then((response ) => response.json())
  .then((responseJson) => {
    setData(responseJson);
    code = Objects.keys(responseJson.rates);
  })
  .catch((error) => {
    Alert.alert('Error', error);
  });
}

  return (
    <View style={styles.container}>
      <Text>{input}</Text>

      <TextInput
        style={{fontSize: 18, width: 200}} value={input}
        placeholder="Amount" onChangeText={(input) => setInput(input)} />

      <Picker selectedValue={currency} onValueChange={(input) => setCurrency(input)}>

        code.map( index => {
          return <Picker.Item  lable={index} value={index} />
}
);


      </Picker>

      <Button title="Convert" />

    </View>
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
