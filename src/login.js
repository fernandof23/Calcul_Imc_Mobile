import React, {useState} from 'react'


import {Container,Input, Title, Button,TextButton} from './styles'

export default function Login(){
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')


  function handleSubmit(){
    const heightFinish = height/100
    const imc = weight / (heightFinish*heightFinish)

    if(imc < 18.6){
      alert("Você esta abaixo do peso! " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc <24.9){
      alert("Você esta no peso Ideal! " + imc.toFixed(2))
    }else if(imc >=24.9 && imc < 34.9){
      alert("Você esta levemente acima do peso! " + imc.toFixed(2))
    }else{
      alert("Você esta com sobrepeso! " + imc.toFixed(2))
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
     
    </Container>
  )
}