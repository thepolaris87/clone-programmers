import { toastAtom } from '@/atoms/toast';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { createToastElement, removeToastElement, transitionToast } from './helper';

export default function ToastMessage({ children }) {
    const toast = useAtomValue(toastAtom);

    useEffect(() => {
        if (!toast.message) return;

        const toastEl = createToastElement(toast.message);

        setTimeout(() => {
            transitionToast();
            setTimeout(() => removeToastElement(toastEl), 3000);
        });
    }, [toast]);

    return <>{children}</>;
}
