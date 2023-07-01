import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3 className='tituloProducto'>{nombre} </h3>
        <p className='infoProducto'>${precio} </p>
        <p className='infoProducto'>ID: {id} </p>
        <Link className='btnDetalles' to={`/item/${id}`}> Ver Detalles</Link>
    </div>
  )
}

export default Item