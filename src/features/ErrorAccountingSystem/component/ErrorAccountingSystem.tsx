import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ErrorFormPage, ErrorsBoardPage, LoginFormPage } from '../pages';

import { AuthProvider, PrivateRoute } from 'src/common/auth';

import { ErrorAccountingSystemProps } from './ErrorAccountingSystem.types';
import './ErrorAccountingSystem.styles.scss';
import { NavigationLinks } from '../controls';

export const ErrorAccountingSystem = (props: ErrorAccountingSystemProps) => {
  return (
    <div className={'errorAccountingSystem'}>
      <AuthProvider>
        <Router>
          <NavigationLinks />

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
        </Router>
      </AuthProvider>
    </div>
  )
}