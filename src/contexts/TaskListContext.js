import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editItem, setEditItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewItem, setviewItem] = useState(null)
  const [isModalOpenview, setIsModalOpenView] = useState(false)

  // Add tasks
  const addTask = (title, barcode, description, category, price, pname) => {
    setTasks([
      ...tasks,
      { title, barcode, description, category, price, pname, id: uuid() },
    ])
  }

  // Remove tasks
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Clear tasks
  const clearList = () => {
    setTasks([])
  }

  // Find task
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id)

    setEditItem(item)
    setIsModalOpen(true)
  }

  // View task
  const viewUser = (id) => {
    const item = tasks.find((task) => task.id === id)

    setviewItem(item)
    setIsModalOpenView(true)
  }

  // Edit task
  const editTask = (
    title,
    barcode,
    description,
    category,
    price,
    pname,
    id
  ) => {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? { title, barcode, description, category, price, pname, id }
        : task
    )

    console.log(newTasks)

    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
        isModalOpen,
        setIsModalOpen,
        viewUser,
        isModalOpenview,
        setIsModalOpenView,
        viewItem,
        setviewItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
