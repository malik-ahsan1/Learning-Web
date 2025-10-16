import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjects((prevProjects) => ({
      ...prevProjects,
      selectedProject: null,
    }));
  }

  function handleSaveProject(projectInfo) {
    setProjects((prevProjects) => {
      const projectId = uuidv4();
      const projectData = {
        id: projectId,
        title: projectInfo.title,
        desc: projectInfo.desc,
        due: projectInfo.due,
        tasks: [],
      };

      return {
        ...prevProjects,
        selectedProject: undefined,
        projects: [...prevProjects.projects, projectData],
      };
    });
  }

  function handleSelectProject(id) {
    setProjects((prevProjects) => ({
      ...prevProjects,
      selectedProject: id,
    }));
  }

  function handleDeleteProject(id) {
    setProjects((prevProjects) => {
      const newProjcts = {
        ...prevProjects,
        selectedProject: undefined,
        projects: prevProjects.projects.filter((project) => project.id !== id),
      };

      return newProjcts;
    });
  }

  function handleAddTask(task) {
    setProjects((prevProjects) => {
      const taskId = uuidv4();
      const newTask = {
        text: task,
        projectId: prevProjects.selectedProject,
        id: taskId,
      };

      const updatedProjects = prevProjects.projects.map((project) => {
        if (project.id === prevProjects.selectedProject) {
          return {
            ...project,
            tasks: [newTask, ...project.tasks],
          };
        }
        return project;
      });

      return {
        ...prevProjects,
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteTask(taskToDel) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.projects.map((project) => {
        if (project.id === prevProjects.selectedProject) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskToDel.id),
          };
        }
        return project;
      });

      return {
        ...prevProjects,
        projects: updatedProjects,
      };
    });
  }

  const selectedProject = projects.projects.find(
    (project) => project.id === projects.selectedProject
  );

  let content = <NoProjectSelected onAddProject={handleStartAddProject} />;

  if (projects.selectedProject === null) {
    content = <NewProject onSave={handleSaveProject} />;
  } else if (projects.selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDelTask={handleDeleteTask}
      />
    );
  }

  return (
    <main className="h-screen mt-16 flex gap-8">
      <Sidebar
        onAddProject={handleStartAddProject}
        projects={projects}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
