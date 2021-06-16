import React from "react";
import {StyleSheet, TextInput, View } from 'react-native'; 


export default function Form(props){

    const {setEntrada, setConversion} = props;

    const convertir =( valor ) =>{
        const resultado = valor*24.8;
        setEntrada(valor);
        setConversion(resultado);
    }

    const inicializar = () =>{
        setConversion(0);
        setEntrada(0);
    }

    return(
        <View style={styles.viewForm}> 
          <Text style={misEstilos.sectionDescription}>Valor en dolares:</Text>
          <TextInput
              style={misEstilos.input}
              placeholder="Escriba un valor en $" 
              keyboardType="numeric"
              onChange={ (e) => convertir(e.nativeEvent.text) }
              defaultValue={entrada.toString()}
          />
          <Text style={misEstilos.sectionDescription}>Valor en lempiras:</Text>
          <TextInput
              style={misEstilos.input}
              placeholder="Valor en Lps"  
              defaultValue={conversion.toString()}
          /> 
          <Button
              title="Limpiar"
              color="#3F51B5"
              onPress={inicializar}
          ></Button> 
        </View>
    )
}

const misEstilos = StyleSheet.create({
    encabezado:{
        backgroundColor: '#FFA000',
        height: 150,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        padding:25
    },
    input:{
      height: 40,
      margin: 12,
      borderWidth: 1
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  