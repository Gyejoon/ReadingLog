import React from 'react';
import styled from 'styled-components';
import { AuthMode } from 'modules/core';

const AuthFormBlock = styled.div``;

interface AuthFormProps {
  mode: AuthMode;
  onToggleMode: () => void;
}

const AuthForm: React.SFC<AuthFormProps> = () => {
  return <AuthFormBlock>Form</AuthFormBlock>;
};

export default AuthForm;
