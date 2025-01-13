import { MdDelete } from "react-icons/md";

export default function List(props) {
  const tasks = props.tasks;
  const deleteTask = props.deleteTask;

  return (
    <div className="py-2 px-4 flex-[40%] rounded-lg bg-blue-400 overflow-y-auto">
      <table className="table-auto text-center w-full">
      <thead>
        <tr className="[&>*]:font-semibold">
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(({ id, nombre, descripcion }) => (
          <tr key={id} className="border border-blue-600 rounded align-top [&>*]:py-1">
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>
              <button onClick={() => deleteTask(id)} className="p-1 bg-white text-black">
                <MdDelete className-="size-5"/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}
