import React from "react";

import { useState, useEffect } from 'react';

function MiTodoList() {
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [errores, setErrores] = useState('');

  function agregarTarea() {
    setTareas([...tareas, {texto: inputValue, completada:false, isEditing:false}])
    setInputValue("")
  } 

  const eliminarTarea = (indiceObjetivo) => {
    const nuevaLista = tareas.filter((_, indexActual)=> indexActual !== indiceObjetivo);
    setTareas(nuevaLista);
  }
  const completarTarea = (indiceObjetivo) => {
    const nuevaClase = tareas.map((tarea, index) => {
      if (index === indiceObjetivo){
        tarea.completada=!tarea.completada
      }
      return tarea
    })
    setTareas(nuevaClase);
  };
  const EditarTarea = (id, nuevoTexto) =>{
     
  }
  const validarTarea = () => {
    if (inputValue === "") {
      setErrores("error")
      return false
    }
    else agregarTarea() , setErrores("")
  }

  // ❓ TODO: Implementar funciones:
  // - editarTarea(id, nuevoTexto)

  return (
    <div className="container">
      <h1>Mi TodoList</h1>
      
      {/* Formulario */}
      <div className="formulario">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button onClick={() => {validarTarea()}}>
          Agregar
        </button>
      </div>

      {/* Errores */}
      {errores && <p className="error">{errores}</p>}

      {/* Contador */}
      <div className="stats">
        <p>Total: {tareas.length}</p>
        <p>Completadas: {tareas.filter(t => t.completada).length}</p>
      </div>

      {/* Lista */}
      <ul className="lista">
        {tareas.map((tarea , index)=>
          <li key={index} className={tarea.completada ? 'completada' : ''}>
            {tarea.isEditing && <input onChange={handleEdit} value={tarea.texto}/>}
            {!tarea.isEditing && <span>{tarea.texto}</span>}
            <button onClick={() => {completarTarea(index)}}>✓</button>
            <button onClick={() => {EditarTarea()}}>✏️</button>
            <button onClick={() => {eliminarTarea(index)}}>✕</button>
          </li>
        )}
      </ul>

      {tareas.length === 0 && (
        <p className="vacio">No hay tareas. ¡Crea una!</p>
      )}
    </div>
  );
}

export default MiTodoList;