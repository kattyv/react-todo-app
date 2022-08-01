import React, { useContext, useEffect } from 'react'
import { TaskContext } from '../../context/TaskContext';
import { TaskItem } from './TaskItem'

export const TaskList = () => {
    const dataLink = './data.json';
    const { records, setRecords } = useContext(TaskContext);

    const getData = () => {
        fetch( dataLink, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then( response => {
            return response.json();
        } )
        .then( jsonData => { 
            setRecords( jsonData );
        } )
    }

    useEffect( () => {
        getData();
    }, [] )

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
