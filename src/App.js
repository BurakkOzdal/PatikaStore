import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
} from 'react-native';
import ProductCard from './components/ProductCard/ProductCard';
import product_data from './products_data.json';

function App() {
  const renderProduct = ({ item }) => <ProductCard product={item} />

  const numColumns=2
  return (
    <SafeAreaView style={sytles.container}>
      <View>
        <Text style={sytles.container_text}>PATİKASTORE</Text>
        <TextInput 
          style={sytles.search}
         placeholder='Ara...'
         placeholderTextColor='gray'
        />
        <FlatList
          data={product_data}
          renderItem={renderProduct}
          numColumns={numColumns}
          horizontal={false}
        />
      </View>
    </SafeAreaView>

  )
}

const sytles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  container_text: {
    color: "purple",
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  search:{
    borderRadius:10,
    color:'black',
    backgroundColor:'#e0e0e0',
    margin:10,
    paddingLeft:15,
    
  },
  flat_list:{
    flexWrap:"wrap",
    flexDirection:"row"
  }
})
export default App;
