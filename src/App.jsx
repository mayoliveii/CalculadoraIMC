import React, {useState} from 'react';

import {
  Container,
  Text,
  Center,
  FormControl,
  FormLabel,
  Input,
  NumberInputStepper,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  FormHelperText,
  Button,
  Box,
} from '@chakra-ui/react';

function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState('');
  const [mensagem, setMensagem] = useState('');

let calculoImc = (e) => {
  e.preventDefault();
  if (altura === 0 || peso === 0 ) {
    alert('Por favor, digite um valor válido para altura/peso.')
  } else{
    let imc = (peso/ (altura**2))
    setImc(imc.toFixed(1))

    if (imc <=18.5) {
    setMensagem('Você está com o IMC muito baixo! Seu peso é muito baixo.');
  }else if (imc > 18.5 && imc <25) {
    setMensagem('Seu IMC está ideal! Seu peso é normal.');
  }else {
    setMensagem('Seu IMC está alto! Seu peso está elevado.');
  }}};

  let reload = () => {
    window.location.reload()
  };

  return (
    <Box bg={'#FF7168'}w={'100%'} h={'750px'} pt={'20px'}>
    <Container  border={'2px solid #000'} bg={'#FF8780'} borderRadius={'40px'} >
      <Center>
        <Text pt={'20px'} as={'h1'} fontSize={'40px'} fontWeight={'extrabold'}>{'Calculadora de IMC'}</Text>
      </Center>

      <FormControl onSubmit={calculoImc} mb={'15px'}>
        <FormLabel fontSize={'22px'} >{'Peso'}</FormLabel>
        <NumberInput 
        max={200} 
        min={5}
        >
    <NumberInputField  
        type={'string'} 
        value={peso} 
        onChange={(e) => setPeso(e.target.value)}/>
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
        <FormHelperText>{'Digite seu peso em quilos.'}</FormHelperText>
        <FormLabel pt={'20px'} fontSize={'22px'}>{'Altura'}</FormLabel>
        <Input 
        type={'number'} 
        value={altura}
        onChange={(e) => setAltura(e.target.value)}/>
        <FormHelperText>{'Digite sua altura em metros.'}</FormHelperText>
      <Box pt={'20px'}>
        <Center>
        <Button type={'submit'}  m={'5px'}>{'Submit'}</Button>
        <Button onClick={reload} type={'submit'} m={'5px'}>{'Limpar'}</Button>
        </Center>
      </Box>
      </FormControl>
      <Box pt={'20px'} pb={'50px'}>
        <Center>
        <Text> Seu IMC é: {imc}</Text>
        <Text>{mensagem}</Text>
        </Center>
      </Box>
    </Container>
    </Box>
  );
}

export default App;
