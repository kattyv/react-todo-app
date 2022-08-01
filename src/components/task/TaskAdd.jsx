import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/TaskContext'

export const TaskAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { addNewTask } = useContext( TaskContext );

  const formFieldsInitial = {
    title: "",
    text: "",
    priority: "Low"
  }
  const errorsInint = {
    formError: false,
    title: false,
    text: false,
    priority: false
  }
  const [formFields, setFormFields] = useState(formFieldsInitial);
  const [errors, setErrors] = useState(errorsInint);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prev => setIsOpen(!prev));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(formFields.title.trim()=== "" || formFields.text.trim() === "" || formFields.priority === "")
    {
      setErrors( errors => ({...errors, formError: true}) )
    }
    else{
      addNewTask( formFields );  // add task to list
      setFormFields(formFieldsInitial); // reset form fields
      setErrors(errorsInint); // reset errors
      setIsDisabled(false);
      setIsOpen(false); // close form
    } 
  }

  const handleChane =(event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if( fieldValue.trim() === "" ) {
      event.target.classList.add('error');
      setErrors(errors => ({...errors, [fieldName]: true}));
      setIsDisabled(true);
    } else {
      event.target.classList.remove('error');
      setErrors(errors => ({...errors, [fieldName]: false})) ;
      setIsDisabled(false);
    }

    setFormFields(values => ({...values, [fieldName]: fieldValue}))
  }

  const formCancel = () => {
    setFormFields(formFieldsInitial);
    setErrors(errorsInint);
    setIsDisabled(false);
    setIsOpen(false);
  }

  return (
    <>
      <button
      className={isOpen ? "btn-add open" : "btn-add"}
        onClick={ toggleOpen }
        title={isOpen ? "Close" : "Add Task"}
      >
        <span></span>
      </button>

      <div className={isOpen ? 'task-add open' : 'task-add'}>
      
        <button className="btn btn-toggle"
          onClick={ toggleOpen }
        >
          X
        </button>
        
        <h2>Add new task</h2>

        <form onSubmit={ handleSubmit }>

          <p className="text-error">
            { errors.formError && "Едно или няколко полета не са попълнени." }
          </p>

          <label>Task Title</label>
          <input 
              name="title"
              type="text" 
              value={ formFields.title || "" }
              onChange={ handleChane }
          />
          {errors.title &&
            <small className='text-error'>
              Required fields
            </small>
          }
          

          <label>Task description</label>
          <textarea
              name="text"
              value={ formFields.text || "" } 
              onChange={ handleChane }
          >
          </textarea>
          {errors.text &&
            <small className='text-error'>
              Required fields
            </small>
          }

          <label>Task Priority</label>
          
          <select 
              name="priority"
              value={ formFields.priority || "Low" }
              onChange={ handleChane }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {errors.priority &&
            <small className='text-error'>
              Required fields
            </small>
          }

          <button 
            type="reset" 
            className='btn'
            onClick={ formCancel }
          >
            Nah, not today
          </button>

          <button 
            type="submit" 
            disabled={ isDisabled }
            className='btn btn-primary' 
            onClick={ () => {addNewTask(a)} }
          >
            Add To My List
          </button>
        </form>
      </div>
    </>
  )
}
