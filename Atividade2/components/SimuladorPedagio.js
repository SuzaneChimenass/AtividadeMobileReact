import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ValorPedagio = () => {
  const [tipoVeiculo, setTipoVeiculo] = useState("0");
  const [distanciaPercorrida, setDistanciaPercorrida] = useState("0");
  const [valorPedagio, setValorPedagio] = useState("");

  const calculoPedagio = () => {
    
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.calculo}>Salário com Hora Extra:</Text>
      <Text>Digite tipo do seu veiculo:</Text>
      <TextInput
        value={tipoVeiculo}
        onChangeText={setTipoVeiculo}
        style={estilos.input}
        placeholder="Tipo de veiculo"
        keyboardType="string"
      />

      <Text>Digite a distância percorrida:</Text>
      <TextInput
        value={distanciaPercorrida}
        onChangeText={setDistanciaPercorrida}
        style={estilos.input}
        placeholder="Distância Percorrida"
        keyboardType="numeric"
      />

    <TouchableOpacity 
      style={estilos.botao}
      onPress={() => setValorPedagio(calculoPedagio())}>
      <Text style={estilos.botaoTexto}>Calcular Valor do Pedágio</Text>
    </TouchableOpacity>

      <Text style={estilos.resultado}> Para {tipoVeiculo} em uma distância de {distanciaPercorrida}, o valor do pedagio é de: R$ {valorPedagio}</Text>
    </View>
  );
}

export default ValorPedagio;

const estilos = StyleSheet.create({
  container: {
    padding: 20,
  },
  calculo: {
    color: 'black',
    fontSize: 30,
    marginBottom: 20
  },
  input: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20
  },
  botao: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#b3675d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
  },
  resultado: {
    fontSize: 18,
    paddingTop:20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
