import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import {useRoute} from '@react-navigation/native';

const updateData = ({navigation}) => {
  const route = useRoute ();
  const params = route.params;
  const [name, onChangeProductName] = React.useState (params.data.name);
  const [image, onChangeProductImage] = React.useState (params.data.image);
  const [price, onChangeProductYear] = React.useState (params.data.price);
  const [urii, onChangeProductUrii] = React.useState (params.data.uri);
  
  


  // const updateProductData = (id, namet, pricet,imaget) => {
  //   database ().ref ('/Books/').child (id).set ({
  //     Book_title: namet,
  //     Book_year: pricet,
  //     Book_img : imaget,
  //   },( error) => {
  //     if (error) {
  //       ToastAndroid.show ('Update data failed', ToastAndroid.SHORT);
  //     } else {
  //       Alert.alert (
  //         //title
  //         'Thông báo',
  //         //body
  //         'Bạn UpDate Thành công?',
  //         [
  //           {text: 'No', onPress: () => {}},
  //           {text: 'OK', onPress: () =>  navigation.navigate ('Produce')},
  //         ],
  //         {cancelable: false}
  //       );

  //     }
  //   });
  // };

  return (
    <View style={styles.contener}>
      <View>
        {/* <Text style={styles.header}>SHOW PRODUCTS</Text> */}
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
         
          <Image
          
            source={{uri: urii + image}}
           
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 8,
              alignItems: 'center',
              alignContent: 'center',
              width: 200,
              height: 170,
            }}
          />
        </View>
        <View>
          <Text style={{marginVertical: 5, margin: 10}}> Name</Text>
          <View>
            <Text
              style={{
                padding: 10,
                borderWidth: 0.1,
                borderRadius: 30,
                backgroundColor: '#edeef2',
                paddingHorizontal: 10,
                margin: 10,
              }}
            >
              {name}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{marginVertical: 5, margin: 10}}> Price</Text>
          <View>
            <Text
              style={{
                padding: 10,
                borderWidth: 0.1,
                borderRadius: 30,
                backgroundColor: '#edeef2',
                paddingHorizontal: 10,
                margin: 10,
              }}
            >
              {price} $
            </Text>
          </View>
        </View>
        

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate ('Produce')}
        >
          <Text
            style={
              (styles.btnForgotPassworld, {
                color: 'white',
                fontWeight: 'bold',
              })
            }
          >
           Return
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default updateData;

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
