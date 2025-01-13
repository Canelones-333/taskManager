import { MdDelete } from "react-icons/md"

export default function List (props){
    const tasks = props.tasks
    const deleteTask = props.deleteTask

    return (
        <table>
         <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Eliminar</th>
          </tr>
         </thead>
         <tbody>
          {tasks.map(({id, nombre, descripcion}) => (
            <tr key={id}>
              <td>{nombre}</td>
              <td>{descripcion}</td>
              <td>
                <button  onClick={()=>deleteTask(id)}>
                  <MdDelete/>
                </button>
              </td>
            </tr>
          ))}
         </tbody>
        </table>
    )
}