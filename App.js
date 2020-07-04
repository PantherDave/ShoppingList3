import React, {useState} from 'react' ;
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native' ;
import Header from './components/Header' ;
import ListItem from './components/ListItem' ;
import AddItem from './components/AddItem' ;
const v1 = require('uuid/v1') ;


const App = () => {
  const [items, setItems] = useState([
    {id: v1(), text:'Milk'},
    {id: v1(), text:'Eggs'},
    {id: v1(), text:'Bread'},
    {id: v1(), text:'Juice'}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id) ;
    }) ;
  }

  const addItem = (txt) => {
    if (!txt){
      Alert.alert('Error', 'Please enter an item', {text:'Ok'}) ;
    } else {
      setItems(prevItems =>{
        return [{id: v1(), text: txt}, ...prevItems] ;
      }) ;
    }
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item}
        deleteItem={deleteItem}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60
  },
}) ;

export default App ;