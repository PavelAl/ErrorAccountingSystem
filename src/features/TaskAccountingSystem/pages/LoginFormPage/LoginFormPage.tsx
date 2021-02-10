import * as React from 'react';

import { LoginForm } from 'src/features/UserLogin/components/LoginForm';
import { useLogin } from './hooks';

import './LoginFormPage.styles.scss';

export const LoginFormPage = () => {
  const { LoginUser } = useLogin();

  return (
    <div className={'loginFormPage'}>
      <LoginForm
        onLogin={LoginUser}
      />
    </div>
  )
}