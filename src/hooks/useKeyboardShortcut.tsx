import { useEffect } from 'react';

const useKeyboardShortcut = (keyCombination: string[], callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keys = `${event.ctrlKey ? 'ctrl' : ''} ${event.shiftKey ? 'shift' : ''} ${event.key}`.trim().split(' ').sort().join(' ');
      const combination = keyCombination.sort().join(' ');

      if (keys === combination) {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyCombination, callback]);
};

export default useKeyboardShortcut;
