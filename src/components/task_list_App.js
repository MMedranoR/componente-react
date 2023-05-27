import React, { useState } from "react";
import "./task_list_App.css"

export default function TaskListApp({item, onUpdate, onDelete}) {
    // manejo del estado
    const [isEditing, setIsEditing] = useState(false);
   
    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(event) {
            event.preventDefault();
        }

        function handleChange(event) {
            const value = event.target.value;
            setNewValue(value);
        }

        function handleClick() {
            onUpdate(item.id, newValue);
            setIsEditing(false);
        }
            
        return(
            <form className="updateForm" onSubmit={handleSubmit}> 
                <input className="tasklistappInput" type="text" onChange={handleChange} value={newValue}/>
                <button className="update" onClick={handleClick}>Guardar</button>
            </form>
        );
    }

    function Element() {
        return (
            <div className="info">
                {item.title}<button onClick={() => setIsEditing(true)} className="editbutton">Editar</button>
                <button onClick={(e) =>  onDelete(item.id)} className="deletebutton">Eliminar</button>
            </div>
        );
    }

    return (
        <div className="tasklistapp">
            {isEditing ? <FormEdit/> : <Element/>}
        </div>
    );
}