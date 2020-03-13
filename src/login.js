import React, {useState} from 'react'
import {Text} from 'react-native'

import {Container,Input, Title, Button,TextButton, Wrapper, TextResult} from './styles'

export default function Login(){
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [resul, setResul ] = useState('')
  const [classification, setClassification] = useState('')


  function handleSubmit(){
    const heightFinish = height/100
    const imc = weight / (heightFinish*heightFinish)

    setResul(imc.toFixed(2))

    if(imc < 18.6){ 
      setClassification('Você esta abaixo do peso!')
    }else if(imc >= 18.6 && imc <24.9){
      setClassification("Você esta no peso Ideal! " )
    }else if(imc >=24.9 && imc <29.9){
      setClassification('Você esta com excesso de peso')
    }else if (imc>=29.9 && imc < 34.9 ){
      setClassification('Obesidade de Classe 1')
    }else if(imc >= 34.9 && imc < 39.9 ){
      setClassification('Obesidade de Classe 2')
    } else{
      setClassification('Obesidade de Classe 3')
    }
  }

  return(
    <Container>
      <Title>Calcule seu IMC</Title>

      <Input
        placeholder= "Peso em Kg"
        value={weight}
        onChangeText={(weight) => setWeight(weight)}
        keyboardType="numeric"
      />

      <Input
        placeholder= "Altura em cm"
        value={height}
        onChangeText={(height) => setHeight(height)}
        keyboardType="numeric"
      />

      <Button onPress={handleSubmit}>
        <TextButton>Calcular</TextButton>
      </Button>


     { resul ? (
        <Wrapper imc={resul}>
        <TextResult >
          Seu Imc: {resul }         
        </TextResult>
        <TextResult >
        {classification}
        
        </TextResult>
      </Wrapper>
     ) : <Text>''</Text>}
     
    </Container>
  )
}