import * as React from 'react';

import { DefaultButton, TextField } from '@fluentui/react';

import './LoginForm.styles.scss';

interface Props {
  onLogin: (login: string, password: string) => void;
}

export const LoginForm = (props: Props) => {
  const { onLogin } = props;

  const [login, setLogin] = React.useState('User 1');
  const [password, setPassword] = React.useState('user1');

  return (
    <div className={'loginForm'}>
      <TextField
        label={'Login'}
        onChange={(e, newValue) => setLogin(newValue ?? '')}
        value={login}
      />

      <TextField
        label={'Password'}
        onChange={(e, newValue) => setPassword(newValue ?? '')}
        value={password}
        type={'password'}
      />

      <div className={'toolbar'}>
        <DefaultButton
          text={'Login'}
          onClick={() => onLogin(login, password)}
          primary={true}
        />
      </div>
    </div>
  )
}
