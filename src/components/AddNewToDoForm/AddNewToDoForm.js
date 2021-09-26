import React from "react";

import './styles/add-new-to-do-form.css'

function AddNewToDoForm(props) {

    let [toDoName,setToDoName] = React.useState("");
    let [toDoType,setToDoType] = React.useState("in-work");

    function handleToDoNameChange(event) {
        setToDoName(
            toDoName = event.target.value
        )
    }

    function handleToDoTypeChange(event) {
        setToDoType(
            toDoType = event.target.value
        )
    }

    function handleFormSubmit(event) {        
        event.preventDefault();
        props.onAddingNewToDo(toDoName,toDoType)
    
    }

    
    return (
        <form className="add-new-to-do-form"
         action="#"
         method="POST" 
         onSubmit={handleFormSubmit}>
            <label>
                <span className="visually-hidden">Input to do name</span>
                <input 
                type="text" 
                name="to-do-name" 
                placeholder="input to do name" 
                required="required" 
                value={toDoName}
                onChange={handleToDoNameChange}/>
            </label>
            <div className="add-new-to-do-form__radio-buttons-wrapper">

                <input 
                type="radio" 
                name="to-do-type" 
                id="in-work-radio-button" 
                defaultChecked="checked" 
                value="in-work" 
                onChange={handleToDoTypeChange}/>

                <label htmlFor="in-work-radio-button">
                    To do now
                </label>

                <input 
                type="radio" 
                name="to-do-type" 
                value={"in-plan"} 
                id="in-plan-radio-button" 
                onChange={handleToDoTypeChange} />

                <label htmlFor="in-plan-radio-button">
                    To do later
                </label>
            </div>
            <button type="submit">
                <span>Add</span>
            </button>
        </form>  
    )
}

export default AddNewToDoForm;