import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {

    //state === {red: number, green: number, blue: number}
    //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15} // conventionally this will be type , payload
    switch (action.colorToChange) {
        case 'red':
            // never going to do state.red = state.red + 15;
            return (state.red + action.amount > 255) || (state.red + action.amount < 0) ? state : { ...state, red: state.red + action.amount };
        case 'green':
            return (state.green + action.amount > 255) || (state.green + action.amount < 0) ? state : { ...state, green: state.green + action.amount };
        case 'blue':
            return (state.blue + action.amount > 255) || (state.blue + action.amount < 0) ? state : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

const SquareScreenReducer = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return <View>
        <Text style={styles.style1}>Inside reducer example</Text>
        <ColorCounter name='Red'
            onIncrease={() => dispatch({ colorToChange: 'red', amount: 15 })}
            onDecrease={() => dispatch({ colorToChange: 'red', amount: -15 })}
        />
        <ColorCounter name='Blue'
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: 15 })}
            onDecrease={() => dispatch({ colorToChange: 'blue', amount: -15 })}
        />
        <ColorCounter name='Greeen'
            onIncrease={() => dispatch({ colorToChange: 'green', amount: 15 })}
            onDecrease={() => dispatch({ colorToChange: 'green', amount: -15 })}
        />
        <View style={{ height: 200, width: 200, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`, marginLeft: 100 }}></View>
    </View>
};

const styles = StyleSheet.create(
    {
        style1: {
            fontSize: 20,
            textAlign: "center"
        }

    }
);

export default SquareScreenReducer;