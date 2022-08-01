import React, { createContext, useState, useEffect } from 'react'
import { TaskAdd } from '../components/task/TaskAdd'
import { TaskList } from '../components/task/TaskList'
import { TaskContextProvider } from '../context/TaskContext'

import '../styles/Tasks.css'

export const Tasks = () => {
    return (
        <div className="tasks">
            <TaskContextProvider>
                <TaskAdd />
                <TaskList />
            </TaskContextProvider>
        </div>
    )
}
