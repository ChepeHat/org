import "./Colaborador.css"
import { RiCloseCircleFill } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";



const Colaborador = (props) => {

    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    const colorDeCard = { backgroundColor: colorPrimario }

    return <div className="colaborador">
        <RiCloseCircleFill className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={colorDeCard}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <GoHeartFill size='25px' color="red" onClick={() => like(id)}/> : <GoHeart size='25px' onClick={() => like(id)} /> }
        </div>
    </div>

}

export default Colaborador