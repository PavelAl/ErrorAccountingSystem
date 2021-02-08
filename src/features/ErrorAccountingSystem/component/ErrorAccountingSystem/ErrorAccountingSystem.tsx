import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ErrorFormPage, ErrorsBoardPage, LoginFormPage } from '../../pages';

import { User, UserRole } from 'src/common/types';
import { AuthContext } from 'src/common/context/authContext';

import { ErrorAccountingSystemProps } from './ErrorAccountingSystem.types';
import './ErrorAccountingSystem.style.scss';

export const ErrorAccountingSystem = (props: ErrorAccountingSystemProps) => {
  const [user, setUser] = React.useState<User>({
    name: '',
    role: UserRole.admin
  });

  return (
    <div className={'errorAccountingSystem'}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Router>
          <div>
            <div className={'navigation'}>
              <div>{user.name}</div>

              <div className={'links'}>
                <Link to="/">Login</Link>
                <Link to="/error">Error form</Link>
                <Link to="/dashboard">Errors board</Link>
              </div>
            </div>

            <hr />

            <Switch>
              <Route exact path="/">
                <LoginFormPage />
              </Route>

              <Route path="/error">
                <ErrorFormPage />
              </Route>

              <Route path="/dashboard">
                <ErrorsBoardPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}