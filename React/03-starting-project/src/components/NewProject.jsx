import { useRef } from 'react';
import CustomInput from './CustomInput';
import Modal from './Modal';

export default function NewProject({ onSave }) {
  const projectInfo = {
    title: useRef(),
    desc: useRef(),
    due: useRef(),
  };

  const errorModal = useRef();

  function onSaveClick() {
    const enteredTitle = projectInfo.title.current.value;
    const enteredDesc = projectInfo.desc.current.value;
    const enteredDue = projectInfo.due.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDesc.trim() === '' ||
      enteredDue.trim() === ''
    ) {
      // Show modal
      errorModal.current.open();
      return;
    }

    onSave({ title: enteredTitle, desc: enteredDesc, due: enteredDue });
  }

  return (
    <>
      <Modal buttonCaption={'Okay'} ref={errorModal} type="error">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a value for every input field.
        </p>
      </Modal>
      <div className="w-[45rem] mt-12">
        <div>
          <CustomInput label={'Title'} type="text" ref={projectInfo.title} />
          <CustomInput label={'Description'} textarea ref={projectInfo.desc} />
          <CustomInput label={'Due Date'} type="date" ref={projectInfo.due} />
        </div>
        <menu className="flex items-center justify-end gap-4 mt-6">
          <button className="text-stone-700 hover:text-stone-950">
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-stone-900 text-stone-200 hover:bg-stone-700 hover:text-stone-100"
            onClick={onSaveClick}
          >
            Save
          </button>
        </menu>
      </div>
    </>
  );
}
