export default function ProjectsList({ projects }) {
  return (
    <div>
      <ul>
        {projects.projects.map((project) => (
          <li>{project.title}</li>
        ))}
      </ul>
    </div>
  );
}
