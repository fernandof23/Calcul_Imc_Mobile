import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native'

export const Container = styled.View`

flex:1;
`;



export const Title = styled.Text`
text-align:center;
margin-top:25px;
font-size:30px;
`

export const Input = styled.TextInput`
  background:#121212;
  border-radius:10px;
  margin:15px;
  padding:10px;
  color:#fff;
  font-size:23px;
`


export const Button = styled(TouchableOpacity)`

  justify-content:center;
  align-items:center;
  margin:15px;
  background:#41aef4;
  padding:10px;
  border-radius:4px;

`

export const TextButton = styled.Text`
  color:#fff;
  font-size:25px;
`;

export const Wrapper = styled.View`
  justify-content:center;
  align-items:center;
  margin:15px;
  
  
  padding:20px;


  ${props => (props.imc < 18.6 && css`
  background:#ffff01;
  border-radius:20px;
  `) || (props.imc>= 18.6 && props.imc <24.9 && css`
  background:#46AF50;
  border-radius:20px;
  `)  || ( props.imc >=24.9 && props.imc <29.9 && css`
  background: #F8BF8F;
  border-radius:20px;
  `) || (props.imc>=29.9 && props.imc < 34.9 && css`
    background :#F59B0C;
  border-radius:20px;
  `)  || (props.imc >= 34.9 && props.imc < 39.9 && css`
    background :#EF3439;
  border-radius:20px;
  `) || ( props.imc >= 40 && css`
    background: #EF2800;
  border-radius:20px;
  `)}


  `;

export const TextResult = styled.Text`
  margin:10px;
  font-size:19px;
  color:#000;

`;