import { useState, useCallback } from 'react';
import { type VariantColor } from '../../utils/cn';

export interface ToastItem {
  id: string;
  title?: string;
  subtitle?: string;
  message: string;
  variant?: VariantColor;
  delay?: number;
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}
