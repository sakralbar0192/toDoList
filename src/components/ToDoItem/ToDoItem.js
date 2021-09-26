import React from "react";

import './styles/to-do-item.css';

function ToDoItem(props) {
    return (
        <div 
        className={
            `to-do-item to-do-item--${props.item.type} to-do-item--${props.item.completed}`} >
            <label>
                <span className="visually-hidden">Mark as completed</span>
                <input type="checkbox" onChange={() => props.onToDoMarkingCompleted(props.item.id)} /> 
            </label>
            <span>{props.item.title}</span>
            <button type="button" onClick={() => props.onToDoDeleting(props.item.id)}>
                <svg width="30" height="30" viewBox="0 0 48 48" xlink="http://www.w3.org/1999/xlink">
                    <g><g><path d="M41,6h-9V4c0-2.2-1.8-4-4-4h-8c-2.2,0-4,1.8-4,4v2H7c-2.2,0-4,1.8-4,4v4h1c2.6,0,3,1.9,3,2.1     l3.5,27c0.3,2.7,2.8,4.9,5.5,4.9h16c2.7,0,5.1-2.2,5.5-4.8l3.5-27c0-0.1,0.4-2.1,3-2.2h1v-4C45,7.8,43.2,6,41,6z M18,4     c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v2h-2V5.5C28,4.7,27.3,4,26.5,4h-5C20.7,4,20,4.7,20,5.5V6h-2V4z M5,10c0-1.1,0.9-2,2-2h34     c1.1,0,2,0.9,2,2v2H5V10z M39,15.9l-3.5,27C35.3,44.6,33.7,46,32,46H16c-1.7,0-3.3-1.4-3.5-3.1L9,15.8c-0.1-0.5-0.3-1.2-0.8-1.8     h31.6C39.3,14.7,39.1,15.4,39,15.9z" fill="#303033"/><g><rect height="18" fill="#7D50F9;" width="4" x="22" y="21"/><polygon points="30,21 34,21 32,39 30,39     " fill="#7D50F9;"/><polygon points="14,21 18,21 18,39 16,39     " fill="#7D50F9;"/></g></g></g>
                </svg>
            </button>
        </div>
    )
};

export default ToDoItem;