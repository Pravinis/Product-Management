import './styles.css'
import React, { useContext, useState } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config)

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key) => {
    let direction = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}

const ProductTable = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  }

  const { items, requestSort, sortConfig } = useSortableData(props.products)

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }
  return (
    <table>
      <caption>
        <input
          type="text"
          placeholder="Search Id,category,price,name........"
          className="task-search"
          value={searchTerm}
          onChange={handleChange}
        />
      </caption>

      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('title')}
              className="task-table-column"
            >
              ProductId
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('category')}
              className="task-table-column"
            >
              Category
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('price')}
              className="task-table-column"
            >
              Product Price
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('pname')}
              className="task-table-column"
            >
              Product Name
            </button>
          </th>
          <th>
            <button type="button" className="task-table-column">
              Action
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* {items.map((item) => ( */}
        {/* To Search support in sorting */}
        {items
          .filter((itemt) => {
            return itemt.title.toLowerCase().includes(searchTerm)
          })
          .map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.pname}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(item.id)
                  }}
                  className="btn-edit task-btn"
                >
                  <i className="fas fa-pen"></i>
                </button>
                <button
                  onClick={() => props.deleteUser(item.id)}
                  className="btn-delete task-btn"
                >
                  <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
                <button
                  onClick={() => props.ViewUser(item.id)}
                  className="btn-delete task-btn"
                >
                  <i className="fas fa-eye" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default function SearchTable() {
  const { removeTask, findItem, viewUser } = useContext(TaskListContext)
  const { tasks } = useContext(TaskListContext)
  const Task = ({ task }) => {}
  const task_data = tasks.map((task) => {
    return <Task task={task} key={task.id} />
  })
  //console.log(task_data.length)

  const items = []

  for (const [index, value] of task_data.entries()) {
    items.push(task_data[index].props.task)
  }

  return (
    <div className="App">
      <ProductTable
        products={items}
        editRow={findItem}
        deleteUser={removeTask}
        ViewUser={viewUser}
      />
    </div>
  )
}
