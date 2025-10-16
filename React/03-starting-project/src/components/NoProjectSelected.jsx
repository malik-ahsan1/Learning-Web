import noProjectSelected from '../assets/no-projects.png';
import CustomButton from './CustomButton';

export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-3/4">
      <img
        src={noProjectSelected}
        alt="an empty task list"
        className="w-16 h-16 object-cover mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p>
        <CustomButton onClick={onAddProject}>Create new project</CustomButton>
      </p>
    </div>
  );
}
