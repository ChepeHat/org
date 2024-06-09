import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    
    // código para que insertar el array en la etiqueta label
    // Método map -> array.map ( (team, index) => { 
    //    return <option></option>
    //    })


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {props.equipos.map( (team, index) => <option key={index}>{team}</option>)};
        </select>
            
    </div>
}

export default ListaOpciones