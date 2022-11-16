import { useState } from 'react';
import { Block } from './Block';

import rates from './assets/rates.json';

import './index.scss';

function App() {
  const [fromCurr, setFromCurr] = useState('RUB');
  const [toCurr, setToCurr] = useState('RUB');

  return (
    <div className='App'>
      <Block
        value={0}
        currency={fromCurr}
        onChangeCurrency={setFromCurr}
      />
      <Block
        value={0}
        currency={toCurr}
      />
    </div>
  );
}

export default App;
