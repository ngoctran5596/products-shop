import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Swipeout from 'react-native-swipeout';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';

const deleteProduct = key => {
  try {
    database ().ref ('/Books/').child ('' + key).remove ();
    let updates = [];
    updates['/Books/' + key] = null;
    database ().ref ().update (updates);
  } catch (error) {
    console.log (error);
  }
};
const Produce = props => {
  const [productData, setProductData] = useState ([]);

  const navigation = useNavigation ();

  useEffect (() => {
    fetch ('http://192.168.43.12:3001/api/products')
      .then (response => response.json ())
      .then (json => setProductData (json))
      .catch (error => console.log ('looi', error));
    // try {
    //   const onValueChange = database ()
    //     .ref (`/Books/`)
    //     .on ('value', snapshot => {
    //       let items = [];
    //       snapshot.forEach (element => {
    //         let item = {
    //           _key: element.key,
    //           Book_Image: element.val ().Book_img,
    //           Book_Title: element.val ().Book_title,
    //           Book_year: element.val ().Book_year,
    //         };
    //         items.push (item);
    //       });
    //       setProductData (items);
    //     });

    //   // Stop listening for updates when no longer required
    //   return () => database ().ref (`/Books/`).off ('value', onValueChange);
    // } catch (error) {
    //   console.log (error);
    // }
  }, []);
  return (
    <View style={styles.contener}>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 50,
          position: 'relative',
        }}
      >

        <Text style={styles.textintro}>Products List</Text>

      </TouchableOpacity>

      <FlatList
        data={productData}
        renderItem={({item}) => <ListItem item={item} />}
      />

    </View>
  );
};

const ListItem = props => {
  const navigation = useNavigation ();
  var linkImg = 'http://192.168.43.12:3001/public/upload/';

  const swipeoutSetting = {
    autoClose: true,

    onClose: () => {
      console.log ('close swipout');
    },
    onOpen: () => {
      console.log ('Open swipout');
    },

    left: [
      {
        component: (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Image
              style={{width: 50, height: 50}}
              source={require ('../anh/view-file.png')}
            />
            {/* <Text style={{color: '#fff'}}>Xem</Text> */}
          </View>
        ),

        type: 'secondary',
        backgroundColor: '#9900cc',
        onPress: () => {
          const data = {
            id: props.item._id,
            name: props.item.Name,
            price: props.item.Price,
            image: props.item.Image,
            uri: linkImg,
          };

          navigation.push ('upDate', {data});
        },
      },
    ],
    right: [
      {
        component: (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Image
              style={{width: 50, height: 50}}
              source={require ('../anh/delete.png')}
            />
            <Text style={{color: '#fff'}}>Delete</Text>
          </View>
        ),
        text: 'Delete',
        type: 'delete',
        backgroundColor: '#9900ff',
        onPress: () => {
          Alert.alert (
            //title
            'Thông báo',
            //body
            'Bạn có muốn xóa hay không ?',
            [
              {text: 'No', onPress: () => {}},
              {text: 'OK', onPress: () => deleteProduct (props.item._key)},
            ],
            {cancelable: false}
          );
        },
      },
    ],
  };
  return (
    <Swipeout {...swipeoutSetting}>
      <View style={styles.listContener}>
        <Image
          source={{
            uri: linkImg + props.item.Image,
          }}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 8,
            width: 100,
            height: 130,
          }}
        />
        <View>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              padding: 0,
              fontWeight: 'bold',
            }}
          >
            NAME : {props.item.Name}
          </Text>

          <Text style={{marginLeft: 10, fontSize: 20, padding: 5}}>
            PRICE: {props.item.Price} $
          </Text>
          <Image
            style={{width: 10, height: 10}}
            source={{
              uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Fthumbs-up-like-gesture%2F112657&psig=AOvVaw0WVGK0cEAAcKvwP5fYILjD&ust=1607400562447000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDMpfX_uu0CFQAAAAAdAAAAABAD',
            }}
          />
          <TouchableOpacity
            onPress={() => {
              const data = {
                id: props.item._id,
                name: props.item.Name,
                price: props.item.Price,
                image: props.item.Image,
                uri: linkImg,
              };

              navigation.push ('Cart', {data});
            }}
          >
            <Image
              style={{width: 40, height: 40, marginLeft: 30}}
              source={require ('../anh/favorite_cart.png')}
            />
          </TouchableOpacity>
        </View>

      </View>
    </Swipeout>
  );
};

export default Produce;

const styles = StyleSheet.create ({
  contener: {
    flex: 1,
    justifyContent: 'center',
  },
  textintro: {
    padding: 5,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  listContener: {
    marginTop: 10,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    width: '100%',
    height: 150,
    borderRadius: 20,
    padding: 10,
  },
});
