import * as React from 'react';

import { JSONServerServicesContextProvider } from 'src/common/context/JSONServerServicesContextProvider';

import { TaskAccountingSystem } from '../features/TaskAccountingSystem/component';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <div className='canvas'>
        <JSONServerServicesContextProvider>
          <TaskAccountingSystem />
        </JSONServerServicesContextProvider>
      </div>
    </div>
  );
}
