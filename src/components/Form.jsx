export default function Form ({addTask}){
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form))
        const id = crypto.randomUUID()

        addTask({id, ...data})
    }

    return (
        <form className="flex text-red-500 bg-gray-800" onSubmit={handleSubmit}>
            <label>
                Nombre
                <input type="text" placeholder="Nombre de tarea" name="nombre" />
            </label>
            <label>
                Descripcion
                <textarea name="descripcion"></textarea>
            </label>
            <button>Guardar</button>
        </form>
    )
}