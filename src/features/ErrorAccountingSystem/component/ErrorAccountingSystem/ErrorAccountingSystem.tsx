import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ErrorFormPage, ErrorsBoardPage, LoginFormPage } from '../../pages';

import { RouterButtonLink } from 'src/common/controls';
import { AuthProvider, AuthButton, PrivateRoute } from 'src/common/auth';

import { ErrorAccountingSystemProps } from './ErrorAccountingSystem.types';
import './ErrorAccountingSystem.style.scss';

export const ErrorAccountingSystem = (props: ErrorAccountingSystemProps) => {
  return (
    <div className={'errorAccountingSystem'}>
      <AuthProvider>
        <Router>
          <div>
            <div className={'navigation'}>
              <AuthButton />

              <div className={'links'}>
                <RouterButtonLink label='Create error' to='/error' />
                <RouterButtonLink label='Errors board' to='/dashboard' />
              </div>
            </div>

            <Switch>
              <Route exact path="/">
                <LoginFormPage />
              </Route>

              <PrivateRoute path={["/error/:errorId", '/error']}>
                <ErrorFormPage />
              </PrivateRoute>

              <PrivateRoute path="/dashboard">
                <ErrorsBoardPage />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  )
}