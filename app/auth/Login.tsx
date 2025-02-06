import React from 'react'
import { ArrowLeft, EnvelopeSimple, LockKey } from 'phosphor-react-native'
import { useState } from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Link, useRouter } from 'expo-router'

export default function Login() {

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)


  const handleLogin = () => {
    console.log('Olá, Dauran! - Login realizado com sucesso!')
    router.navigate('/tabs/Home')
  }


  return (
    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />
      <Link href="/auth/Login" asChild>
        <TouchableOpacity style={styles.arrowLeft}>
          <ArrowLeft size={24} color="#fff" />

        </TouchableOpacity>
      </Link>

      <View style={styles.content}>
        <Text style={styles.title}>Faça Login na {'\n'}Conta</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <EnvelopeSimple size={24} color="#757575" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <LockKey size={24} color="#757575" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity 
            style={styles.rememberContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
            <Text style={styles.signupButtonText}>Faça Login</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Não tem uma conta?</Text>
            <Link href="/stacks/Signup" asChild>
              <TouchableOpacity>
                <Text style={styles.signInText}>Crie sua conta</Text>

              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a20',
  },
  arrowLeft: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#1F222A',
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 10,
  },

  input: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1ab65c',
  },
  checkboxChecked: {
    backgroundColor: '#1ab65c',
  },
  rememberText: {
    color: '#fff',
    fontSize: 14,
  },
  signupButton: {
    backgroundColor: '#1ab65c',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1F222A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  signInText: {
    color: '#1ab65c',
    fontSize: 14,
    fontWeight: 'bold',
  },
})