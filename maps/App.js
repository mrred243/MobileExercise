import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [address, setAddress] = useState('');


  return (
    <MapView
style={{ flex: 1 }} initialRegion={{ latitude: 60.200692, longitude: 24.934302, latitudeDelta: 0.0322, longitudeDelta: 0.0221,
}}>
        <Marker
        coordinate={{ latitude: 60.201373, longitude: 24.934041}}
        title='Haaga-Helia' />
    </MapView>
    <View>
      <TextInput style={{fontSize: 18, width: 100%}}
                 value={address}
                 placeholder='Address'
                 onChangeText={(text) => { setAddress(text) }}/>
      <Button style={{width: 100%}} onPress={getAddress} />
    </View>
  );
}
