import React, { useState, useRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input, Label } from './styles';

interface ITextInput extends TextInputProps {
  label: string;
}

export default function TextInputFloat({
  label,
  onChangeText,
  ...props
}: ITextInput) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  const handleChange = (value: string) => {
    onChangeText && onChangeText(value);
    setText(value);
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    if (!text.length) {
      setIsFocused(false);
    }
  };

  return (
    <Container>
      <Label isFocused={isFocused}>{label}</Label>
      <Input
        ref={inputRef}
        {...props}
        isFocused={isFocused}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChange}
        blurOnSubmit
      />
    </Container>
  );
}
