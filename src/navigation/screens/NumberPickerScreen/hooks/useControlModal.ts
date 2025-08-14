import { useState } from 'react';
import type { TModalStatus } from '../NumberPickerScreen.types';
import { EMPTY_MODAL_STATUS } from '../NumberPickerScreen.constants';

export const useControlModal = () => {
  const [modalStatus, setModalStatus] =
    useState<TModalStatus>(EMPTY_MODAL_STATUS);

  const onModalClose = () => setModalStatus(EMPTY_MODAL_STATUS);

  return {
    modalStatus,
    setModalStatus,
    onModalClose,
  };
};
