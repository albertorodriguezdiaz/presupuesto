import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

    //Validad
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
        guardarError(true);
        return;
    }

    //Construir el gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }

    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);


    // resetear el form
    guardarNombre('');
    guardarCantidad(0);

    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar tus Gastos Aqui</h2>

            { error 
                ? 
                    <Error mensaje="Ambos campos son obligatorios, presupuesto incorrecto" />
                :
                    null
            }

            <div className="campo">
                <label>Nombre Gasto
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={ e => guardarNombre(e.target.value) }
                    />
                </label>
            </div>

            <div className="campo">
                <label>Cantidad Gasto
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={cantidad}
                        onChange={ e => guardarCantidad(e.target.value) }
                    />
                </label>
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />


        </form>
     );
}
 
export default Formulario;