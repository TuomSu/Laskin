import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [ekaNum, setEkaNum] = useState('');
  const [tokaNum, setTokaNum] = useState('')
  const [result, setResult] = useState('');
  

  const plus = () => {
    setResult(parseInt(ekaNum) + parseInt(tokaNum))
  };

  const minus = () => {
    setResult(parseInt(ekaNum) - parseInt(tokaNum))
  };

  return (
    <View style={styles.container}>
      <Text> Result: {result} </Text>
      <TextInput
     style={styles.input}
     onChangeText={ ekaNum => setEkaNum(ekaNum)}
     value={ekaNum}
     keyboardType="numeric"
     />
     <TextInput
     style={styles.input}
     onChangeText={tokaNum => setTokaNum(tokaNum)}
     value={tokaNum}
        keyboardType="numeric"
     />
     <View style={styles.button}>
      <Button style={{flex:6}} title="+" onPress={plus}/>
      <View style={{width: 20}} />
      <Button style= {{flex:6}} title="-" onPress={minus}/>
      </View>
      <StatusBar style="auto" />
      
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
  input:{ width:200, 
    borderColor:'grey', 
    borderWidth: 1
  },
  button:{
    flexDirection: 'row', 
  alignItems: 'center',
  justifyContent: 'space-between'
},


});
