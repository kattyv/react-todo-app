import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext';
import { formatDate } from '../../utils/formatDate';

export const TaskItem = ({
    id, 
    title, 
    text,
    dateCreated,
    priority,
    isCompleted
}) => {
  
  const {records, setRecords, markAsCompleted, deleteTask} = useContext(TaskContext);

  return (
    <article className={ `card ${ priority == "High" && "pr-h"} ${ priority == "Medium" && "pr-m" } ${ isCompleted && "completed" }` }>  
      <header>
        <h3>{ title }</h3>
        <small>
          Added on: { formatDate( new Date(dateCreated) ) }
          {'  |  '}
          Priority: <span className='t-color'>{ priority }</span>
        </small>

        <button className='btn btn-nostyle'> 
          <span className="marker"></span>
        </button>  
      </header>
      
      <p className='desc'>{ text }</p>

      <footer>
        <small className='t-color'>
          {isCompleted ? (
            <>
              &#10003; Completed
            </>
          ) : (
            "Pending..."
          )}
        </small>
      
        <button 
          className='btn btn-ico btn-delete' 
          onClick={ () => { deleteTask(id) } }
          title="Delete"
        >
            <svg width="32px" height="32px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="12" width="2" height="12"/>
              <rect x="18" y="12" width="2" height="12"/>
              <path d="M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"/>
              <rect x="12" y="2" width="8" height="2"/>
            </svg>
        </button>

        {!isCompleted &&
          <button 
            className='btn btn-ico' 
            onClick={ () => { markAsCompleted(id) } }
            title="Mark as completed"
          >
            {/*<svg width="32px" height="32px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
              <polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414"/>
              <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/>
        </svg>*/}

            <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <polygon points="13 24 4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24"/>
            </svg>
          </button>
         }

      </footer>
    </article>
  )
}
