import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import displayname from './src/screens/DisplayName';
import ListScreen from './src/screens/ListScreen';
import FriendsAgeList from './src/screens/FriendsAgeList';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenReducer from './src/screens/SquareScreenReducer';
import CounterReducerScreen from './src/screens/CounterScreenReducer';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    name: displayname,
    ListScreen: ListScreen,
    FriendsList: FriendsAgeList,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareScreenReducer: SquareScreenReducer,
    CounterReducer: CounterReducerScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);