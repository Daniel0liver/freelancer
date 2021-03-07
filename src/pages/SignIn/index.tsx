import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import Input from '../../components/TextInput';

import { SafeAreaView, Title, Button, ArrowLeftIcon } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <Title>Welcome back!</Title>

      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          android: 'height',
        })}>
        <Input label="Email" value={email} onChangeText={setEmail} />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </KeyboardAvoidingView>

      <Button>
        <ArrowLeftIcon />
      </Button>
    </SafeAreaView>
  );
}
