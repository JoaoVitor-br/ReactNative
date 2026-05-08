import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfg';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerLogin = async () => {
    try {
      await signInWithEmailAndPassword(autenticacao, email, senha);
    } catch (erro) {
      setErro('Erro ao fazer login. Verifique seus dados.');
    }
  };

  return (
    <View style={estilos.screen}>
      <View style={estilos.card}>
        <Text style={estilos.title}>Login</Text>

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

        <TouchableOpacity style={estilos.button} onPress={fazerLogin}>
          <Text style={estilos.buttonText}>Login</Text>
        </TouchableOpacity>

        {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

        <TouchableOpacity style={estilos.linkContainer} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={estilos.linkText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7c9ce',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#456bbe',
    borderRadius: 32,
    paddingVertical: 36,
    paddingHorizontal: 28,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 22,
    elevation: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  title: {
    color: '#f5f6ff',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 24,
    color: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  button: {
    backgroundColor: '#63c1ff',
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 16,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  erro: {
    color: '#ffd4d7',
    marginTop: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  linkContainer: {
    marginTop: 22,
    alignItems: 'center',
  },
  linkText: {
    color: 'rgba(255,255,255,0.92)',
    fontSize: 14,
    fontWeight: '600',
  },
});