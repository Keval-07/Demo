import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Cart/useCart';

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}
