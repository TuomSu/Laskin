import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, { useState, useRef } from 'react';

export default function App() {

  const [ekaNum, setEkaNum] = useState('');
  const [tokaNum, setTokaNum] = useState('')
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);
  
const calculate = operator => {
  const [num1, num2] = [Number(ekaNum), Number(tokaNum)];

  switch (operator){
    case '+':
      setResult(num1+num2);
      setData([...data, { key: num1  +' + '+ num2 + ' = '+ (num1+num2)}]);
      
      break;

    case '-':
      setResult(num1-num2);
      setData([...data, { key: num1  +' - '+ num2 + ' = '+ (num1-num2)}]);
      break;
  }

  setEkaNum('');
  setTokaNum('');
  initialFocus.current.focus();
  
}
  

  return (
    <View style={styles.container}>
      <Text> Result: {result} </Text>
      <TextInput
     style={styles.input} ref={initialFocus}
     onChangeText={ text => setEkaNum(text)}
     value={ekaNum}
     keyboardType="numeric"
     />
     <TextInput
     style={styles.input}
     onChangeText={text => setTokaNum(text)}
     value={tokaNum}
        keyboardType="numeric"
     />
     <View style={styles.button}>
      <Button style={{flex:6}} title="+" onPress={() => calculate ('+')}/>
      <View style={{width: 20}} />
      <Button style= {{flex:6}} title="-" onPress={() => calculate ('-')}/>
      </View>
      <Text> History: </Text>
      <View style={styles.input}> 
    <FlatList
      data={data}
      renderItem={({ item }) =>
        <Text>{item.key}</Text>
      } keyExtractor={(item, index) => index.toString()}
    /></View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
