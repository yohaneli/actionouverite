import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { recupNbPlayers } from '../../Redux/Actions/nbPlayers';

import { View, Text } from 'react-native';
import { Button,Input } from 'react-native-elements';
import {styles} from './style';



const index = ({navigation}) => {

    const {nbPlayers} = useSelector(state => state);

    console.log(nbPlayers);

    const dispatch = useDispatch();

    const [numberPlayers, setNumberPlayers] = useState(null);

    const handleNbPlayers = (numberPlayers) => {

        let intNbPlayers = 0;

        setNumberPlayers(numberPlayers);

        console.log(typeof(numberPlayers));

        intNbPlayers = parseInt(numberPlayers,10);

        console.log(intNbPlayers);

        console.log(typeof(intNbPlayers));

        if ( intNbPlayers >= 2 && intNbPlayers <= 15 ) {

            console.log("nombre de joueurs valide");

            dispatch(recupNbPlayers({players:intNbPlayers}));

        }


    }
    

    return (

        <View>

                    <Text style={{flex:1,justifyContent:'center',flexDirection:'row',alignItems:'center'}}> Combien de Joueurs ?</Text>

                    <Input 
                    placeholder="Nb Joueurs"
                    onChangeText={handleNbPlayers}
                    value={numberPlayers}
                    />

                    <View style={styles.button}>

                        <Button title="Continuer" type="outline" onPress={() => navigation.navigate('InfosPlayers')} />

                    </View>

        </View>


    )
}

export default index
