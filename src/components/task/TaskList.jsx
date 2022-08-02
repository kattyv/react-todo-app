import React, { useContext, useEffect } from 'react'
import { TaskContext } from '../../context/TaskContext';
import { TaskItem } from './TaskItem'
import todoItems from '../../data.json'


export const TaskList = () => {
    const { records, setRecords } = useContext(TaskContext);

    useEffect( () => {
        setRecords(todoItems);
    }, [])
    

    return (
        <section className='list'>
            <h2>What to do next?</h2>

            <div className='task-list'>
                
                {records && records.length !== 0 && 
                    records.map( item => (
                        <TaskItem key={ item.id } {...item} />
                        ) 
                )}

                {!records || records.length === 0 &&
                    <p>You made it, no task! Yaaay!</p>
                }

            </div> 

        </section>
    )
}
