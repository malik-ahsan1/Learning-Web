import NewTask from './NewTask';

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />

      {tasks.length === 0 ? (
        <p className="my-4 text-stone-800">
          This project does not have any tasks yet...
        </p>
      ) : (
        <ul className="mt-4">
          {tasks.map((task) => {
            return (
              <li className="mb-2">
                <div className="flex items-center gap-4">
                  <p className="w-64">{task.text}</p>
                  <button
                    onClick={() => {
                      onDelete(task);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
