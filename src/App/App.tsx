import * as React from 'react';

import { ErrorAccountingSystem } from '../features/ErrorAccountingSystem/component';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <div className='canvas'>
        <ErrorAccountingSystem />
      </div>
    </div>
  );
}
