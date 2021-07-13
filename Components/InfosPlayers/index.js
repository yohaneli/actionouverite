import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { recupNomJoueurs } from '../../Redux/Actions/namePlayers';

import { View, Text } from 'react-native';
import { Button,Input } from 'react-native-elements';
import {styles} from './style';


const index = () => {

    const {nbPlayers} = useSelector(state => state);

    const {namePlayers} = useSelector(state => state);

    console.log(namePlayers);

    const [stateNamePlayer, setStateNamePlayer] = useState(null);

    const dispatch = useDispatch();

    const savePlayer = () => {

        console.log("save",nbPlayers)

        console.log("continue de demnader",stateNamePlayer);

        if (namePlayers.length <= nbPlayers) {

            dispatch(recupNomJoueurs(

                {
                id: namePlayers.length + 1,
                name:stateNamePlayer
                }

            ));

        }

    }
    

    return (

        <View>

            <Text style={{flex:1,justifyContent:'center',flexDirection:'row',alignItems:'center'}}> Combien de Joueurs ?</Text>

            <Input 
            placeholder="Nom Joueur 1"
            onChangeText={setStateNamePlayer}
            value={stateNamePlayer}
            />

            <View style={styles.button}>

                <Button title="Continuer" type="outline" onPress={savePlayer} />

            </View>

        </View>

    )

}

export default index
