import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import CustomButton from './CustomButton';

export default function Modal({
  children,
  buttonCaption,
  ref,
  type = 'default',
}) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  let dialogClasses = 'p-10 rounded-lg shadow-lg';
  let buttonClass = '';

  if (type === 'error') {
    dialogClasses += ' bg-red-100';
    buttonClass = 'bg-red-700 text-red-100 hover:bg-red-800';
  } else {
    dialogClasses += ' bg-stone-100';
    buttonClass = 'bg-stone-800 text-stone-100 hover:bg-stone-950';
  }

  return createPortal(
    <dialog ref={modal} className={dialogClasses}>
      {children}
      <form method="dialog" className="mt-4 text-right">
        <CustomButton className={buttonClass}>{buttonCaption}</CustomButton>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}
