import React, { useState } from "react";
import { View, Text, Button } from 'react-native';
import {styles} from './StyleHome'

const Home = ()=>{
    const [name, setName] = useState('Gabriel');

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Nome: {name}</Text>

            <Button
            title="Mudar para Marcos"
            onPress={()=>{setName('Marcos de Paula')}}
            />
            <Button title="Mudar para Sung"
            onPress={()=>{setName('Sung')}}/>
            <Button
            title="Mudar para Gabriel"
            onPress={()=>{setName('Gabriel')}}
            />
        </View>
    );

};