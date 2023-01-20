import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [ekaNum, setEkaNum] = useState('');
  const [tokaNum, setTokaNum] = useState('')
  const [result, setResult] = useState('');

  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  

  const plus = () => {
    setResult(parseInt(ekaNum) + parseInt(tokaNum))
    setText(ekaNum + ' + ' + tokaNum + ' = ' + result)
    setData([...data, {key: text}]);
    setText('');
  };

  const minus = () => {
    setResult(parseInt(ekaNum) - parseInt(tokaNum))
    setText(ekaNum + ' + ' + tokaNum + ' = ' + result)
    setData([...data, {key: text}]);
    setText('');
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
      <Text> History: </Text>
      <FlatList
      data={data}
      renderItem={({item}) => <Text>{item.key}</Text>}
      keyExtractor={(item,index) => index.toString()}
      />
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
