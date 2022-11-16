import { useState } from 'react';

import { Modal } from './components/Modal';
import './index.scss';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const onClickOpenButton = () => {
    setIsVisible(true);
  };
  const onClickCloseButton = () => {
    setIsVisible(false);
  };

  return (
    <div className='App'>
      <button
        onClick={onClickOpenButton}
        className='open-modal-btn'>
        ✨ Открыть окно
      </button>
      {isVisible && <Modal onClose={onClickCloseButton} />}
    </div>
  );
}

export default App;
