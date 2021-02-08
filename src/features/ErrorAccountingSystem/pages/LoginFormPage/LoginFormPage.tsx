import * as React from 'react';

import { LoginForm } from 'src/features/UserLogin/components/LoginForm';
import { useAuth } from './hooks';

import './LoginFormPage.style.scss';

export const LoginFormPage = () => {
  const { LoginUser } = useAuth();

  return (
    <div className={'loginFormPage'}>
      <LoginForm
        onLogin={LoginUser}
      />
    </div>
  )
}