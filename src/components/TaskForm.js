import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')
  const [barcode, setBarcode] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('default')
  const [price, setPrice] = useState('')
  const [pname, setPname] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!editItem) {
      addTask(title, barcode, description, category, price, pname)
      setTitle('')
      setBarcode('')
      setDescription('')
      setCategory('default')
      setPrice('')
      setPname('')
    } else {
      editTask(title, barcode, description, category, price, pname, editItem.id)
    }
  }

  const handleId = (e) => {
    setTitle(e.target.value)
  }
  const handleBarcode = (e) => {
    setBarcode(e.target.value)
  }

  const handleChangeDesc = (e) => {
    setDescription(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleName = (e) => {
    setPname(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      setBarcode(editItem.barcode)
      setDescription(editItem.description)
      setCategory(editItem.category)
      setPrice(editItem.price)
      setPname(editItem.pname)
      console.log(editItem)
    } else {
      setTitle('')
      setBarcode('')
      setDescription('')
      setCategory('default')
      setPrice('')
      setPname('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <label> Product Id: </label>{' '}
      <input
        type="text"
        placeholder="Product Id..."
        value={title}
        onChange={handleId}
        required
        className="task-input"
      ></input>{' '}
      <label> Product Barcode </label>{' '}
      <input
        type="text"
        placeholder="Product Barcode..."
        value={barcode}
        onChange={handleBarcode}
        required
        className="task-input"
      ></input>{' '}
      <label> Product Description: </label>{' '}
      <textarea
        type="textarea"
        placeholder="Product Description..."
        value={description}
        onChange={handleChangeDesc}
        required
        className="task-input"
      />
      <label> Category: </label>{' '}
      <select
        defaultValue={category}
        className="task-downlist"
        onChange={handleCategory}
      >
        <option value="Home Appliances">Home Appliances </option>{' '}
        <option value="Electronics & Mobile"> Electronics & Mobile </option>{' '}
        <option value="Cloth"> Cloth </option>{' '}
        <option value="General Items"> General Items </option>{' '}
      </select>{' '}
      <label> Product Price </label>{' '}
      <input
        type="number"
        value={price}
        className="task-input"
        placeholder="Product Price..."
        onChange={handlePrice}
        required
      ></input>{' '}
      <label> Product Name </label>{' '}
      <input
        type="text"
        value={pname}
        placeholder="Product Name..."
        className="task-input"
        onChange={handleName}
        required
      ></input>{' '}
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {' '}
          {editItem ? 'Edit Task' : 'Add Task'}{' '}
        </button>{' '}
      </div>{' '}
    </form>
  )
}

export default TaskForm
