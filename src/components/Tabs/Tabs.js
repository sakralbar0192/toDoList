import React from "react";
import ToDoItem from '../ToDoItem/ToDoItem';

import './styles/tabs.css';

function TabsContainer(props) {
    return (
        <div className="tabs">
            <input type="radio" name="tab-button" id="in-work-tab-button" defaultChecked="checked" />
            <label htmlFor="in-work-tab-button">In work</label>
            <input type="radio" name="tab-button" id="in-plan-tab-button" />
            <label htmlFor="in-plan-tab-button">In plan</label>
            <input type="radio" name="tab-button" id="done-tab-button" />
            <label htmlFor="done-tab-button">Done</label>

            <ul className="tabs__list" id="in-work">
                {props.toDoItems.filter(item =>  item.type === "in-work" && !item.completed).map(item => {
                    return (
                        <li className="tabs__list-item" key ={`${item.id}`}>
                            <ToDoItem item={item} onToDoMarkingCompleted={props.onToDoMarkingCompleted} onToDoDeleting={props.onToDoDeleting} />
                        </li> 
                    )
                })}
                               
            </ul>

            <ul className="tabs__list" id="in-plan">
                {props.toDoItems.filter(item =>  item.type === "in-plan" && !item.completed).map(item => {
                    return (
                        <li className="tabs__list-item" key ={`${item.id}`}>
                            <ToDoItem item={item} onToDoMarkingCompleted={props.onToDoMarkingCompleted} onToDoDeleting={props.onToDoDeleting} />
                        </li> 
                    )
                })}                  
            </ul>

            <ul className="tabs__list" id="done">
                {props.toDoItems.filter(item =>  item.completed).map(item => {
                    return (
                        <li className="tabs__list-item" key ={`${item.id}`}>
                            <ToDoItem item={item} onToDoMarkingCompleted={props.onToDoMarkingCompleted} onToDoDeleting={props.onToDoDeleting} />
                        </li> 
                    )
                })}
            </ul>
        </div>
    )
}

export default TabsContainer;