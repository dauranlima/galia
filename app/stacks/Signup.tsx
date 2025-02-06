import { AppleLogo, ArrowLeft, EnvelopeSimple, FacebookLogo, GithubLogo, GoogleLogo, LockKey } from 'phosphor-react-native'
import { useState } from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { Link } from 'expo-router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)



  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Link href="/stacks/Login" asChild>
        <TouchableOpacity style={styles.arrowLeft}>
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
      </Link>
      <View style={styles.content}>
        <Text style={styles.title}>Crie sua agora{'\n'}Conta</Text>
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
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <LockKey size={24} color="#757575" />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
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
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Crie sua conta</Text>
          </TouchableOpacity>
          <View style={styles.separator}>
            <View style={styles.separatorLine} />
            <Text style={styles.orText}>OU CONTINUE COM</Text>
            <View style={styles.separatorLine} />
          </View>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <FacebookLogo size={34} color="#1877f2" weight='fill' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <GithubLogo size={24} color="#fff" weight='fill' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <AppleLogo size={24} color="#fff" weight='fill' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../../assets/google.png')} 
                style={{ width: 24, height: 24 }} 
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta? </Text>
            <Link href="/stacks/Login" asChild>
              <TouchableOpacity>
                <Text style={styles.signInText}>Faça Login</Text>
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
    color: '#f4f4f4',
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
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#666',
    marginHorizontal: 20
  },
  


})