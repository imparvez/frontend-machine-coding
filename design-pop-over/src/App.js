import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }
  return (
    <div className="App">
      {/* Modal Component */}
      <Modal open={open} onClose={handleClose}>
        <div className='modal-content-wrapper'>
          <p>This is your custom modal content.</p>
          <div className='modal-button-wrapper'>
            <button onClick={handleClose}>CANCEL</button>
            <button onClick={handleClose}>SUBMIT</button>
          </div>
        </div>
      </Modal>
      {/* Action to open simple dialog popup */}
      <button onClick={handleClickOpen}>OPEN SIMPLE DIALOG</button>
    </div>
  );
}

export default App;
