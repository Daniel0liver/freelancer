import React from 'react';

import {
  Container,
  Input,
  SearchIcon,
  FilterIcon,
  MicrofoneIcon,
} from './styled';

interface ITextInput {
  onChange: Function;
}
export default function TextInput({ onChange }: ITextInput) {
  return (
    <Container>
      <SearchIcon />
      <Input
        placeholder="Find task"
        onChangeText={onChange}
        placeholderTextColor={'#fff'}
        underlineColorAndroid={'transparent'}
      />
      <MicrofoneIcon />
      <FilterIcon />
    </Container>
  );
}
