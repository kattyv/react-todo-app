import React, { createContext, useState } from 'react'

export const TaskContext = createContext(null);

export const TaskContextProvider = ({ children }) => {
    const [records, setRecords] = useState([]); 

    // Adding new record to list
    const addNewTask = ( formData ) => {
        const newTask = {
            id: records.length > 0 ? (records[records.length - 1].id + 1) : 1,
            title: formData.title,
            text: formData.text,
            dateCreated: new Date(),
            priority: formData.priority,
            isCompleted: false
        }
        setRecords( prev => [ ...prev, newTask ] );
    }
    // Mark as completed
    const markAsCompleted = ( id ) => {
        setRecords( prev => prev.map( item => {
            if( item.id === id ) {
                return {...item, isCompleted: true}
            } else {
                return item;
            }
        })
        )
    }
    // Delete task 
    const deleteTask = (id) => {
        setRecords(prev => prev.filter( item => item.id !== id));
    }

    const value = {
        records,
        setRecords,
        addNewTask,
        markAsCompleted,
        deleteTask
    }

    return (
        <TaskContext.Provider value={ value }>
            { children }
        </TaskContext.Provider>
    )
}
