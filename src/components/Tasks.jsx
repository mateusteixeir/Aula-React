import PropTypes from "prop-types";

function Tasks(props) {
  const { tasks } = props;

  // Verifica se tasks existe e tem pelo menos um item

  return (
    <div>
      {tasks ? (
        <h1>
          {tasks.map((task) => (
            <p key={task.id}>{task.title}</p>
          ))}
        </h1>
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
