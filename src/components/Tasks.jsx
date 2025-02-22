import PropTypes from "prop-types";

function Tasks(props) {
  const { tasks } = props;

  // Verifica se tasks existe e tem pelo menos um item

  return (
    <div>
      {tasks ? (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          {tasks.map((task) => (
            <li
              className="bg-slate-400 text-white p-2 rounded-md"
              key={task.id}
            >
              {task.title}
            </li>
          ))}
        </ul>
      ) : (
        <h1>Nenhuma task disponível</h1>
      )}
    </div>
  );
}

// Defina a validação das props
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Tasks;
