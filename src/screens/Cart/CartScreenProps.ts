import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Cart/useCart';

export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

export interface CartScreenProps {
  navigation: CartScreenNavigationProp;
}
