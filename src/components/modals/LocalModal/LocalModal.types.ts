import type { ReactNode } from 'react';

export type TLocalModalProps = {
  title?: string;
  description?: string;
  visible: boolean;
  positiveButtonText?: string;
  onPositiveCallback?: () => void;
  onClose: () => void;
  children?: ReactNode;
};
