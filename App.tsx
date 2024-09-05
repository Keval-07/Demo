import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/navigation/types';
import CartScreen from './src/screens/Cart/components/CartScreen';
import HomeScreen from './src/screens/Home/components/HomeScreen';
import ProductScreen from './src/screens/Product/components/ProductScreen';
import {Provider} from 'react-redux'; // Importing Provider to connect Redux store with React
import store from './src/redux/store';


const Stack = createStackNavigator<RootStackParamList>();

// Define the App component
const App: React.FC = () => {
  return (
    // Wrap the app with Provider to give components access to the Redux store
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home', headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{title: 'Cart', headerShown: false}}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{title: 'Product', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;




