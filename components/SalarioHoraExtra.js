import{useState} from "react"

import{View, Text, StyleSheet, TextInput, Button} from 'react-native'

const Media = (props) => {

  const[salarioBase, setSalarioBase] = useState("0")
  const[quantidadeHora, setQuantidadeHora] = useState("0")
  const[salarioHoraExtra, setsalarioHoraExtra] = useState ("")

 const calculo = () => {
  let salarioPorHora = salarioBase / quantidadeHora;

    if (quantidadeHora > 160) {
      salarioPorHora * 0.50;
    } else if (idadeNum >= 8 && idadeNum <= 10) {
      categoria = 'Infantil B';
    } else if (idadeNum >= 11 && idadeNum <= 13) {
      categoria = 'Juvenil A';
    } else if (idadeNum >= 14 && idadeNum <= 17) {
      categoria = 'Juvenil B';
    } else if (idadeNum >= 18) {
      categoria = 'Adulto';
    } else {
      categoria = 'Fora das categorias';
    }

    setCategoria(categoria);
  };

  return(
  <View>
    <Text style={estilos.calculo}>Cálculo de Salário com Hora Extra</Text>
    <Text>Digite seu salário base:</Text>

      <TextInput
        value={salarioBase}
        onChangeText={setSalarioBase}
        style={estilos.input}
        placeholder="Salario Base"
        keyboardType="numeric"
      />

      <Text>Quantidade de horas trabalhadas no mês:</Text>
       <TextInput
        value={quantidadeHora}
        onChangeText={setQuantidadeHora}
        style={estilos.input}
        placeholder="Quantidade de horas"
        keyboardType="numeric"
      />

      <Button style={estilos.botao}
        title ="Calcular Hora Extra"
        onPress={() => setsalarioHoraExtra((+salarioBase + +quantidadeHora) / 5)}
        color="black"
      />
      <Text>O salário com hora extra é de: {salarioHoraExtra} </Text>
  </View>
  )
}
export default Media

const estilos = StyleSheet.create(
  {
    calculo: {
      color: 'black',
      fontSize: 30
    },
    input: {
      backgroundColor: 'white',
      marginTop: 5,
      marginBotton: 5
    }
  }
)