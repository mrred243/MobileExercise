import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    const url = 'https://jobs.github.com/positions.json?description='+ desc + '&location=' + location;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
       setJobs(responseJson);
    })
    .catch((error) => {
      Alert.alert('Error' , error);
    });
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.title}, {item.company}</Text>}
        ItemSeparatorComponent={listSeparator}
        data={jobs}
      />
      <TextInput
        style={{fontSize: 18, width: 200}}
        value={desc}
        placeholder="Description"
        onChangeText={(desc) => setDesc(desc)}
      />
      <TextInput
        style={{fontSize: 18, width: 200}}
        value={location}
        placeholder="Location"
        onChangeText={(location) => setLocation(location)}
      />
     <Button title="Find" onPress={getJobs} />
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
