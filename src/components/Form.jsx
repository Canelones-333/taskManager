export default function Form ({addTask}){
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form))
        const id = crypto.randomUUID()

        addTask({id, ...data})
    }

    return (
        <form className="flex flex-col gap-2 text-black bg-blue-400 size-fit p-8 shadow-lg rounded-lg" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1">
                Nombre
                <input type="text" className="shadow px-3 py-1 rounded-md" placeholder="Nombre de tarea" name="nombre" />
            </label>
            <label className="flex flex-col gap-1">
                Descripcion
                <textarea name="descripcion" className="shadow px-3 py-1 rounded-md" placeholder='Descripción'></textarea>
            </label>
            <button className="mt-2 py-1 rounded-lg bg-blue-500 text-white">Guardar</button>
        </form>
    )
}