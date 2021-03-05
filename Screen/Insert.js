import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
const RealTime = () => {

  const navigation = useNavigation ();

  const [productItem, setProductItem] = useState ({
    Book_title: '',
    Book_year: '',
    Book_img:'',
  });
 

  const insertData = () => {
    const newReference = database ().ref ('/Books').push (productItem);
    console.log (newReference.key);
    navigation.navigate('Produce')
  };
 
  return (
    <View style={styles.contener}>
      <View>
        <Text style={styles.header}>INSERT BOOk</Text>
        <TextInput
          style={styles.inputText}
          value={productItem.Book_title}
          placeholder="Book_title"
          onChangeText={text => setProductItem ({...productItem, Book_title: text})}
        />
        <TextInput
          style={styles.inputText}
          value={productItem.Book_year}
          placeholder="Book_year"
          onChangeText={text => setProductItem ({...productItem, Book_year: text})}
        />
         <TextInput
          style={styles.inputText}
          value={productItem.Book_img}
          placeholder="Book_Image"
          onChangeText={text => setProductItem ({...productItem, Book_img: text})}
        />

        <TouchableOpacity style={styles.btnLogin} onPress={() => insertData()}>
          <Text
            style={
              (styles.btnForgotPassworld, {
                color: 'white',
                fontWeight: 'bold',
              })
            }
          >
            Insert
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default RealTime;

const styles = StyleSheet.create ({
  inputText: {
    padding: 10,
    borderWidth: 0.1,
    borderRadius: 30,
    backgroundColor: '#edeef2',
    paddingHorizontal: 10,
    margin: 10,
  },
  contener: {
    flex: 1,
    padding: 10,

    justifyContent: 'center',
  },
  cardView: {
    flexDirection: 'row',
  },
  newsBox: {
    backgroundColor: '#FCFBFB',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#FCFBFB',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  btnForgotPassworld: {
    fontWeight: 'bold',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  btnLogin: {
    marginTop: 40,
    backgroundColor: '#f03c23',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#f03c23',
  },
});
