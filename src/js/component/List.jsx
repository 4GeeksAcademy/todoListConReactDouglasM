import React, { useState } from 'react';
import "/workspaces/todoListConReactDouglasM/src/styles/index.css";

function List() {
    const [tareas, setTareas] = useState([]);
    const [tareaNombre, setTareaNombre] = useState('');

    const agregarTarea = () => {
        if (tareaNombre === '') {
            alert('Por Favor Agrega Una Tarea');
            return;
        }

        setTareas([...tareas, tareaNombre]);
        setTareaNombre('');
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((tarea, i) => {
            return i !== index;
        });
        setTareas(nuevasTareas);
    };
    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    };

    const borrarTodasLasTareas = () => {
        setTareas([]);
    };

    return (
        <div className="contenedor">
            <div className="hoja">
                <h1>Lista de Tareas</h1>
                <div className="divBotonInput d-flex">
                    <input
                        type="text"
                        value={tareaNombre}
                        onChange={(e) => setTareaNombre(e.target.value)}
                        onKeyDown={pressEnter}
                        placeholder="Agregar Tareas"
                    />
                    <button onClick={agregarTarea}>Agregar</button>
                    <button onClick={borrarTodasLasTareas}>Borrar todas las tareas</button>
                </div>
                <div className='headLista2'>
                    <div className='headLista3'></div>
                </div>
                <div className="headLista1"></div>
                <div className="lista">
                    <ul>
                        {tareas.map((tarea, index) => (
                            <li key={index}>
                                <span className="viñeta">•</span> 
                                <span className="textoTarea">{tarea}</span>
                                <span
                                    className="BotonEliminarTarea"
                                    onClick={() => eliminarTarea(index)}
                                >
                                    X
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className='d-flex align-items-end mt-5'>
                        <span className='spanNumTareas'>Numero de tareas: {tareas.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
