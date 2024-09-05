import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Cart/useCart';

export type ProductScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

export interface ProductScreenProps {
  navigation: ProductScreenNavigationProp;
}
