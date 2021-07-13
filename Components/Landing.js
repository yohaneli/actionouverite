import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';


const Landing = ({navigation}) => {

    return (
        <View style={{flex:1,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>

            <Text style={{color:'red'}} > Bienvenue dans Action ou Vérité ! </Text>

            <Button 
            title="Jouer"
            onPress={() => navigation.navigate("NbPlayers")}
            />
            
        </View>
    )
}

export default Landing
