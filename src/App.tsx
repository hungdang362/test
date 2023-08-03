import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDisclosure } from '@chakra-ui/react';
import { CustomModal } from './components/common/customModal';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const {
    isOpen: isOpenCustomModal,
    onOpen: onOpenCustomModal,
    onClose: onCloseCustomModal,
  } = useDisclosure();
  
  const onConfirmHandler = async () => {
    //process here
    onCloseCustomModal();
  }

  return (
    <div className="App">
      <CustomModal
        isOpen={isOpenCustomModal}
        onClose={onCloseCustomModal}
        title={t('notification')}
        children={t('deleteConfirm')}
        onConfirm={onConfirmHandler}
        cancelText={t('cancel')}
        confirmText={t('confirm')}
        animation='dropInTop'
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
        <div
          onClick={onOpenCustomModal}
        >
          Demo Custom Modal
        </div>
      </header>
    </div>
  );
}

export default App;
