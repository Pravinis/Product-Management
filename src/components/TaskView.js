import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Taskview = () => {
  const { viewItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')
  const [barcode, setBarcode] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('default')
  const [price, setPrice] = useState('')
  const [pname, setPname] = useState('')
  const [showModal, setModal] = useState(false)

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
    if (viewItem) {
      setTitle(viewItem.title)
      setBarcode(viewItem.barcode)
      setDescription(viewItem.description)
      setCategory(viewItem.category)
      setPrice(viewItem.price)
      setPname(viewItem.pname)
      console.log(viewItem)
    } else {
      setTitle('')
      setBarcode('')
      setDescription('')
      setCategory('')
      setPrice('')
      setPname('')
    }
  }, [viewItem])

  return (
    <form className="form">
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
      <br />
      <br />
      <label> Product Name </label>{' '}
      <input
        type="text"
        value={pname}
        placeholder="Product Name..."
        className="task-input"
        onChange={handleName}
        required
      ></input>{' '}
    </form>
  )
}

export default Taskview
