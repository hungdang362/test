import {
  ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, ModalCloseButton, ModalProps, Button, Modal,
} from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import "./customModal.css";

export interface CustomModalProps extends ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  animation?: 'dropInTop' | 'dropInBottom';
}

export function CustomModal({
  children, isOpen, title, onConfirm, onClose, confirmText = 'Confirm', cancelText = 'Cancel', animation = 'dropInTop', ...props
}: CustomModalProps) {

  const className = `modalContent ${animation}`;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} {...props}>
      <ModalOverlay />

      <ModalContent className={className}>
        <ModalHeader className='modalHeader'><QuestionOutlineIcon className='qaIcon' /> {title}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          {children}
        </ModalBody>

        <ModalFooter>
          <Button className='btCancel' colorScheme='green' mr={3} onClick={onClose}>
            {cancelText}
          </Button>
          <Button className='btConfirm' colorScheme='red' onClick={onConfirm} >
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>

    </Modal>
  );
}
