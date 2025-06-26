// src/utils/toastUtils.ts
import { toast } from 'react-toastify';

export const notifySuccess = (message: string) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    theme: 'light',
  });

export const notifyError = (message: string) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    theme: 'light',
  });

export const notifyInfo = (message: string) =>
  toast.info(message, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    theme: 'light',
  });

export const notifyWarning = (message: string) =>
  toast.warning(message, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    theme: 'light',
  });
