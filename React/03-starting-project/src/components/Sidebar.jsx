import CustomButton from './CustomButton';

export default function Sidebar({ onAddProject, projects, onSelect }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        your projects
      </h2>
      <CustomButton onClick={onAddProject}>+ Add Project</CustomButton>
      <div className="mt-8">
        {projects.projects.map((project) => {
          let buttonCSS =
            'w-full text-left hover:text-stone-100 hover:bg-stone-700 px-4 py-2 rounded-md';

          if (projects.selectedProject === project.id) {
            buttonCSS += ' text-stone-100 bg-stone-700';
          } else {
            buttonCSS += ' text-stone-400';
          }

          return (
            <button
              key={project.id}
              onClick={() => {
                onSelect(project.id);
              }}
              className={buttonCSS}
            >
              {project.title}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
