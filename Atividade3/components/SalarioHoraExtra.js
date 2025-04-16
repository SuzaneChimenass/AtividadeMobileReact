import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Media = () => {
  const [salarioBase, setSalarioBase] = useState("0");
  const [quantidadeHora, setQuantidadeHora] = useState("0");
  const [salarioFinal, setSalarioFinal] = useState("");

  const calculo = () => {
    const salarioNum = parseFloat(salarioBase);
    const horasTrabalhadas = parseFloat(quantidadeHora);

    const jornadaNormal = 160;
    
    const valorHoraNormal = salarioNum / jornadaNormal;

    if (horasTrabalhadas <= jornadaNormal) {
      return salarioNum.toFixed(2);
    }

    const horasExtras = horasTrabalhadas - jornadaNormal;
    const valorHoraExtra = valorHoraNormal * 1.5;
    const totalExtra = horasExtras * valorHoraExtra;
    
    const salarioComExtra = salarioNum + totalExtra;
    return salarioComExtra.toFixed(2);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.calculo}>Salário com Hora Extra:</Text>
      <Text>Digite seu salário base:</Text>
      <TextInput
        value={salarioBase}
        onChangeText={setSalarioBase}
        style={estilos.input}
        placeholder="Salário Base"
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

    <TouchableOpacity 
      style={estilos.botao}
      onPress={() => setSalarioFinal(calculo())}>
      <Text style={estilos.botaoTexto}>Calcular Hora Extra</Text>
    </TouchableOpacity>

      <Text style={estilos.resultado}>O salário final é: R$ {salarioFinal}</Text>
    </View>
  );
}

export default Media;

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
