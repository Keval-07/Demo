import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'; // Import Redux hooks
import CheckBox from '@react-native-community/checkbox';
import {RootState} from '../../../redux/store';
import {updateSelected,updateQuantity,removeItem,addItem} from '../../../redux/actions/cartActions';
import {CartScreenProps} from '../CartScreenProps';

const initialItems = [
  {
    id: '1',
    title: 'Air Jordan XXXVI',
    price: '$140.00',
    image: require('../../../assets/img/jorr.jpg'),
  },
  {
    id: '2',
    title: 'Apple SmartWatch',
    price: '$420.00',
    image: require('../../../assets/img/app.jpg'),
  },
  {
    id: '3',
    title: 'Sony WF-1000XM',
    price: '$420.00',
    image: require('../../../assets/img/sony.jpg'),
  },
];

// Create the CartScreen component
const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  // Use Redux hooks to get state and dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // It adds initial items to the Redux store
    dispatch(addItem(initialItems));
  }, [dispatch]);

  const {items, selectedItems, quantities} = useSelector(
    (state: RootState) => state.cart,
  );

  // Handle checkbox changes to select or deselect items
  const handleCheckboxChange = (id: string) => {
    dispatch(updateSelected(id, !selectedItems[id])); // Toggle item selection
  };

  // Handle quantity changes (increase or decrease)
  const handleQuantityChange = (
    id: string,
    action: 'increase' | 'decrease',
  ) => {
    const currentQuantity = quantities[id] || 1; // Default to 1 if no quantity set
    const newQuantity =
      action === 'increase'
        ? currentQuantity + 1
        : Math.max(currentQuantity - 1, 1); // Adjust quantity
    dispatch(updateQuantity(id, newQuantity)); // Update quantity in Redux store
  };

  // Handle item removal from the cart
  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id)); // Remove item from Redux store
  };

  // Calculate total payment based on selected items and their quantities
  const totalPayment =
    items.length !== 0
      ? items
          .reduce((total, item) => {
            if (selectedItems[item.id]) {
              const itemQuantity = quantities[item.id] || 1;
              const itemPrice = parseFloat(item.price.replace('$', '')); // Convert price to number
              return total + itemPrice * itemQuantity;
            }
            return total;
          }, 0)
          .toFixed(2)
      : 0;

  console.log('Items:', items);
  console.log('Selected Items:', selectedItems);
  console.log('Quantities:', quantities);
  console.log('Total Payment:', totalPayment);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/img/back.png')}
            style={styles.backButtonImage}
          />
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <View style={styles.item}>
              <CheckBox
                value={selectedItems[item.id] || false}
                onValueChange={() => handleCheckboxChange(item.id)}
              />
              <Image source={item.image} style={styles.image2} />
              <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleQuantityChange(item.id, 'decrease')}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>
                    {quantities[item.id] || 1}
                  </Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleQuantityChange(item.id, 'increase')}>
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                    <Image
                      source={{
                        uri: 'https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png',
                      }}
                      style={styles.image4}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id} // Unique key for each item
        />
        <Text style={styles.select}>Select All</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.select}>Total Payment</Text>
          <Text style={styles.dollar}>${totalPayment}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() =>
          navigation.navigate('Product', {
            selectedItemCount: Object.values(selectedItems).filter(
              value => value,
            ).length,
          })
        }>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image2: {
    width: 100,
    height: 110,
    borderRadius: 10,
    resizeMode: 'contain',
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  select: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },
  dollar: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image4: {
    width: 40,
    height: 15,
    marginStart: 100,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: 'black',
    fontSize: 16,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  checkoutButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 1,
    marginStart: 20,
    marginEnd: 20,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
