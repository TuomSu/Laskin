import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Calculator from './Calculator';
import React from 'react';

export default function History ({route}){
    const {data} = route.params.calculations;
    return(
  <View style={styles.input}> 
  <Text> History: </Text>
    <FlatList
      data={data}
      renderItem={({ item }) =>
        <Text>{item.key}</Text>
      } keyExtractor={(item, index) => index.toString()}
    />
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
          borderWidth: 1,
        },
        button:{
          flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      
  });
