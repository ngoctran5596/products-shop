import {useRoute} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

var {width} = Dimensions.get ('window');
// import icons
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = ({navigation}) => {
  const route = useRoute ();
  const params = route.params;
  const [name, onChangeProductName] = React.useState (params.data.name);
  const [image, onChangeProductImage] = React.useState (params.data.image);
  const [price, onChangeProductYear] = React.useState (params.data.price);
  const [urii, onChangeProductUrii] = React.useState (params.data.uri);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{height: 20}} />
      <Text style={{fontSize: 28, color: 'gray'}}>Cart </Text>
      <View style={{height: 10}} />

      <View style={{flex: 1}}>

        <View
          style={{
            width: width - 20,
            margin: 10,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: '#cccccc',
            paddingBottom: 10,
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
              width: 100,
              height: 170,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              padding: 10,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text>{name}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
            >
              <Text
                style={{fontWeight: 'bold', color: '#9fd236', fontSize: 20}}
              >
                {price}$
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image
                    source={require ('../anh/UI_icon_add.svg.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
                <Text style={{paddingHorizontal: 8, fontWeight: 'bold'}}>
                  5
                </Text>
                <TouchableOpacity>
                  <Image
                    source={require ('../anh/iconfinder_icon-minus_211864.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      </View>

      <View style={{height: 20}} />

      <TouchableOpacity
        style={{
          backgroundColor: '#9fd236',
          width: width - 40,
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate ('Produce')}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          CHECKOUT
        </Text>
      </TouchableOpacity>

      <View style={{height: 20}} />

    </View>
  );
};

export default Cart;

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
