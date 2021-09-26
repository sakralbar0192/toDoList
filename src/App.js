import React from 'react';
import Title from './components/Title/Title';
import Tabs from './components/Tabs/Tabs'
import AddNewToDoForm from './components/AddNewToDoForm/AddNewToDoForm';

import './styles/App.css';

function App() {
    let [toDoItems, setToDoItems] = React.useState(
        [
            {id: 1, type: 'in-work', completed: false, title: 'feed the fish'},
            {id: 2, type: 'in-plan', completed: false, title: 'go diving'},
            {id: 3, type: 'in-plan', completed: false, title: 'Get the Nobel Peace Prize'},
            {id: 4, type: 'in-plan', completed: true, title: 'Find a business to your liking'},
            {id: 5, type: 'in-work', completed: false, title: 'buy a cream'},
            {id: 6, type: 'in-work', completed: true, title: 'do some exercises'},
            {id: 7, type: 'in-work', completed: true, title: 'clean up the house'},
            {id: 8, type: 'in-work', completed: false, title: 'go out for a run'},
            {id: 9, type: 'in-work', completed: false, title: 'do something good'},
            {id: 10, type: 'in-plan', completed: false, title: 'prepare lunch'},
        ]
    )

    let [isAddingNewToDoFormOpen, setNewToDoForm] = React.useState(false)
        
    function markToDoAsCompleted(markedToDoId) {
        toDoItems = toDoItems.map(item => {
            if (item.id === markedToDoId) {
                item.completed = true
            }
            return item
        })

        setToDoItems(toDoItems)        
    }

    function deleteToDo(deletedToDoId) {  
        toDoItems = toDoItems.slice(0,deletedToDoId-1).concat(toDoItems.slice(deletedToDoId))
        toDoItems = toDoItems.map((item, index) => {
            item.id = index+1;
            return item
        })  
        setToDoItems(toDoItems)  
    }

    function addNewToDo(toDoName,toDoType) { 
        const newToDo = {
            id: toDoItems.length+1,
            type: toDoType,
            completed: false,
            title: toDoName
        }
        setToDoItems(([...toDoItems, newToDo])) 
        setNewToDoForm(!isAddingNewToDoFormOpen)
    }

  return (
    <div className="app">
      <div className="app__wrapper">  
        <div className="app__title-container">
            <Title />
        </div>       
        <div className="app__inner-wrapper">
            <input 
            type="checkbox" 
            id="tabs-add-new-to-do-form-toggle"
            onChange={()=>setNewToDoForm(!isAddingNewToDoFormOpen)}
            checked={isAddingNewToDoFormOpen} />
            <label htmlFor="tabs-add-new-to-do-form-toggle">
                <span>Add new to do</span>
            </label>
            <div className="app__tabs-container">
                <Tabs toDoItems={toDoItems} onToDoMarkingCompleted={markToDoAsCompleted} onToDoDeleting={deleteToDo} />
            </div>            
            <div className="app__add-new-to-do-form-container">
                <AddNewToDoForm onAddingNewToDo={addNewToDo} />           
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
