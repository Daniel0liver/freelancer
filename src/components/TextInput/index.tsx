import React, { useState, useRef, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input, Label } from './styles';

interface ITextInput extends TextInputProps {
  label: string;
}

export default function TextInputFloat({
  label,
  value,
  onChangeText,
  ...props
}: ITextInput) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (value?.length) {
      setIsFocused(true);
      setText(value);
    }
  }, []);

  const handleChange = (changedValue: string) => {
    onChangeText && onChangeText(changedValue);
    setText(changedValue);
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
        value={value}
        isFocused={isFocused}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChange}
        blurOnSubmit
      />
    </Container>
  );
}
