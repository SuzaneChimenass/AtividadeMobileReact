import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ContaDeLuz = () => {
  const [consumoKwh, setConsumoKwh] = useState("0");
  const [tipoBandeira, setTipoBandeira] = useState("");
  const [valorContaLuz, setValorContaLuz] = useState("");

  const calcularContaDeLuz = () => {
    const consumo = parseFloat(consumoKwh);
    if (isNaN(consumo) || consumo < 0) {
      return "Consumo inválido";
    }

    const bandeira = tipoBandeira.trim().toLowerCase();

    let tarifa;
    switch (bandeira) {
      case "verde":
        tarifa = 0.50;
        break;
      case "amarela":
        tarifa = 0.55;
        break;
      case "vermelha 1":
      case "vermelha1":
        tarifa = 0.60;
        break;
      case "vermelha 2":
      case "vermelha2":
        tarifa = 0.70;
        break;
      default:
        return "Bandeira inválida";
    }

    const total = consumo * tarifa;
    return total.toFixed(2);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Cálculo da Conta de Luz</Text>

      <Text>Consumo em kWh:</Text>
      <TextInput
        value={consumoKwh}
        onChangeText={setConsumoKwh}
        style={estilos.input}
        placeholder="Ex: 250"
        keyboardType="numeric"
      />

      <Text>Tipo de bandeira (Verde, Amarela, Vermelha 1 ou Vermelha 2):</Text>
      <TextInput
        value={tipoBandeira}
        onChangeText={setTipoBandeira}
        style={estilos.input}
        placeholder="Ex: Vermelha 1"
      />

      <TouchableOpacity 
        style={estilos.botao}
        onPress={() => setValorContaLuz(calcularContaDeLuz())}
      >
        <Text style={estilos.botaoTexto}>Calcular Conta</Text>
      </TouchableOpacity>

      <Text style={estilos.resultado}>
        Para consumo de <Text style={{ fontWeight: 'bold' }}>{consumoKwh} kWh</Text>  
        com bandeira <Text style={{ fontWeight: 'bold' }}>{tipoBandeira}</Text>,  
        o valor da conta é: R$ {valorContaLuz}
      </Text>
    </View>
  );
};

export default ContaDeLuz;

const estilos = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    color: 'black',
    fontSize: 24,
    marginBottom: 16
  },
  input: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8
  },
  botao: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#3385ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
  },
  resultado: {
    fontSize: 18,
    paddingTop: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
