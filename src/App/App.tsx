import * as React from 'react';

import { FakeServicesContextProvider } from 'src/common/context/FakeServicesContextProvider';

import { TaskAccountingSystem } from '../features/TaskAccountingSystem/component';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <div className='canvas'>
        <FakeServicesContextProvider>
          <TaskAccountingSystem />
        </FakeServicesContextProvider>
      </div>
    </div>
  );
}
