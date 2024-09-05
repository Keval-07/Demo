/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Cart/useCart';

// Define the type for navigation prop used in this screen
type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Product'
>;

// Define the type for props passed to this component
interface ProductScreenProps {
  navigation: ProductScreenNavigationProp; // This is the navigation prop
}
// pass the navigation prop to the component
const ProductScreen: React.FC<ProductScreenProps> = ({route, navigation}) => {
  const selectedItemCount = route.params?.selectedItemCount || 0;

  return (
    <ScrollView contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/img/back.png')}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/img/jorr.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Air Jordan XXXVI "Psychic Energy"</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.rate}>* 4.8(230)</Text>
        <Text style={styles.dollar}>$140.00</Text>
      </View>
      <Text style={styles.size}>Available Size</Text>
      <View style={{...styles.numberContainer, justifyContent: 'flex-start'}}>
        <Text style={styles.number}>30</Text>
        <Text style={[styles.number, styles.highlightedNumber]}>32</Text>
        <Text style={styles.number}>33</Text>
        <Text style={styles.number}>34</Text>
        <Text style={styles.number}>40</Text>
      </View>
      <Text style={styles.size}>Color</Text>
      <View style={{...styles.numberContainer, justifyContent: 'flex-start'}}>
        <View style={[styles.colorCircle, {backgroundColor: '#f7292a'}]} />
        <View style={[styles.colorCircle2, {backgroundColor: 'blue'}]} />
        <View style={[styles.colorCircle2, {backgroundColor: '#479be9'}]} />
        <View style={[styles.colorCircle2, {backgroundColor: '#ffbe62'}]} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.cartContainer}>
          <Image
            source={require('../../../assets/img/cart.jpg')}
            style={styles.localImage}
          />
          {selectedItemCount > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{selectedItemCount}</Text>
            </View>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.checkoutButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  dollar: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  size: {
    fontSize: 13,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  number: {
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  highlightedNumber: {
    backgroundColor: '#ff7368',
    color: 'white',
    borderRadius: 45,
    paddingHorizontal: 9,
    paddingVertical: 8,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backButtonImage: {
    width: 30,
    height: 30,
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  colorCircle2: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginStart: 20,
  },
  image: {
    width: '80%',
    height: 250,
    marginTop: 40,
    marginBottom: 30,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  cartContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: 10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 3,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  localImage: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  checkoutButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductScreen;
