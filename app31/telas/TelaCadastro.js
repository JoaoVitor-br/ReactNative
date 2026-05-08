import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfg';

export default function TelaCadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerCadastro = async () => {
    try {
      await createUserWithEmailAndPassword(autenticacao, email, senha);
      navigation.navigate('Login');
    } catch (erro) {
      setErro('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <View style={estilos.screen}>
      <View style={estilos.card}>
        <Text style={estilos.title}>Cadastro</Text>

        <Text style={estilos.label}>Nome de usuário</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite seu email"
          placeholderTextColor="rgba(255,255,255,0.8)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={estilos.label}>Senha</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite sua senha"
          placeholderTextColor="rgba(255,255,255,0.8)"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={estilos.button} onPress={fazerCadastro}>
          <Text style={estilos.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

        <TouchableOpacity style={estilos.linkContainer} onPress={() => navigation.navigate('Login')}>
          <Text style={estilos.linkText}>Já tenho conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#382F2C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#3C635C',
    borderRadius: 32,
    paddingVertical: 36,
    paddingHorizontal: 28,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 16,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    color: '#B59333',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    color: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  button: {
    backgroundColor: '#34B8A1',
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 16,
    elevation: 8,
  },
  buttonText: {
    color: '#382F2C',
    fontSize: 16,
    fontWeight: '700',
  },
  erro: {
    color: '#ffcccb',
    marginTop: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  linkContainer: {
    marginTop: 22,
    alignItems: 'center',
  },
  linkText: {
    color: '#34B8A1',
    fontSize: 14,
    fontWeight: '600',
  },
});