import React from 'react'
import TaskListContextProvider from '../contexts/TaskListContext'

import TaskModal from './TaskModal'
import '../App.css'
import Header from './Header'
import SearchTable from './SearchTable'
import TaskModalview from './Modalview'
import HelpModal from './HelpModal'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <HelpModal />
          <Header />
          <SearchTable />
          <TaskModalview />
          <TaskModal />
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App
