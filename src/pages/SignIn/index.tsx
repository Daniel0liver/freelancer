import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Logo from '../../assets/images/logo.png';

import { signInResquest } from '../../store/modules/auth/actions';

import Input from '../../components/TextInput';

import {
  SafeAreaView,
  Title,
  Button,
  ImageContainer,
  Image,
  ArrowLeftIcon,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('daniel@dev.com');
  const [password, setPassword] = useState('123456');

  const handleSubmit = () => {
    if (email.length && password.length) {
      dispatch(signInResquest({ email, password }));
    } else {
      Alert.alert('Atenção', 'Preencha os campos corretamente.');
    }
  };

  return (
    <SafeAreaView>
      <ImageContainer>
        <Image width={'100%'} height={'10%'} source={Logo} />
      </ImageContainer>

      <Title>Welcome back!</Title>

      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          android: 'height',
        })}>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoFocus
          returnKeyType="next"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      </KeyboardAvoidingView>

      <Button onPress={handleSubmit}>
        <ArrowLeftIcon />
      </Button>
    </SafeAreaView>
  );
}
