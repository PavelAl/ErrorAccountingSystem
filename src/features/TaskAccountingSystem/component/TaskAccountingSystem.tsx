import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { TaskFormPage, TasksBoardPage, LoginFormPage } from '../pages';

import { AuthProvider, PrivateRoute } from 'src/features/Authorization';

import { NavigationLinks } from '../controls';

import './TaskAccountingSystem.styles.scss';

export const TaskAccountingSystem = () => {
  return (
    <div className={'taskAccountingSystem'}>
      <AuthProvider>
        <Router>
          <NavigationLinks />

          <Switch>
            <Route exact path="/">
              <LoginFormPage />
            </Route>

            <PrivateRoute path={["/task/:taskId", '/task']}>
              <TaskFormPage />
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <TasksBoardPage />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}