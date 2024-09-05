import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {HomeScreenProps} from '../HomeScreenProps';

const data = [
  {
    id: '1',
    name: 'Air Jordan XXX',
    price: '$140.00',
    image: require('../../../assets/img/jorr.jpg'),
  },
  {
    id: '2',
    name: 'Apple Smartwatch',
    price: '$89.00',
    image: require('../../../assets/img/app.jpg'),
  },
  {
    id: '3',
    name: 'Sony WF-1000XM4',
    price: '$420.00',
    image: require('../../../assets/img/sony.jpg'),
  },
];

const categories = ['Shoes', 'Clothes', 'Fashion', 'Beauty'];

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.title2}>Find anything what you want</Text>
          <View>
            <Image
              source={{
                uri: 'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-search-icon-image_1344447.jpg',
              }}
              style={styles.image4}
            />
          </View>
          <View>
            <Image
              source={{
                uri: 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-notification-icon-png-image_927192.jpg',
              }}
              style={styles.image3}
            />
          </View>
        </View>

        <View>
          <Image
            source={{
              uri: 'https://shopnix.io/blog/wp-content/uploads/2023/01/discountcoupon.png',
            }}
            style={styles.image1}
          />
        </View>

        <View style={styles.textContainer}>
          {categories.map((category, index) => (
            <Text key={index} style={styles.text}>
              {category}
            </Text>
          ))}
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.subTitle}>Flash sale</Text>
          <Text style={styles.timing}>Closing in: 08 25 03</Text>
        </View>

        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.numberContainer}>
          <Text style={styles.subTitle}>Most Popular</Text>
          <Text style={styles.timing}>See All</Text>
        </View>

        <View style={styles.imagesRow}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/20/f3/90/20f3906e4ba08d42e0b2f69fe70b5495.jpg',
            }}
            style={styles.image2}
          />
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J3JzKIZOHq0r9H5xknYAOcZMctsjU04_iQ&s',
            }}
            style={styles.image2}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    // flex: 1,
    paddingTop: 40,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 15,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  timing: {
    paddingHorizontal: 20,
    marginTop: 20,
    fontSize: 12,
    color: 'black',
  },
  textContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    fontSize: 11,
    color: 'black',
    marginTop: 15,
  },
  itemContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 14,
    marginVertical: 5,
    color: 'black',
  },
  itemPrice: {
    fontSize: 12,
    color: 'black',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  image1: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  image2: {
    width: '48%',
    height: 150,
    borderRadius: 8,
  },
  image3: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  image4: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  checkoutButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 1,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
