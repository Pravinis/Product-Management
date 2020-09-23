
import React, { useState, useContext, useEffect } from 'react'
import styled from "styled-components";
import TaskForm from "./TaskForm"
import { TaskListContext } from '../contexts/TaskListContext'

const TaskModal = () => {
    const {isModalOpen, setIsModalOpen} = useContext(TaskListContext);
    const {editItem,setEditItem} = useContext(TaskListContext);

    const CloseModal = () => {
        
        if(!editItem)
        setIsModalOpen(false)
    }

    return (
      <Root>
        <button class="fa fa-plus-circle" onClick={() => setIsModalOpen(true)}></button>
  
        {isModalOpen && (
          <overlay>
            <Dialog>
                <div>
                <TaskForm/>
                </div>
              <button onClick={CloseModal}>CLOSE MODAL</button>
            </Dialog>
          </overlay>
        )}
      </Root>
    );
}

export default TaskModal

const Root = styled.div`
  font-family: sans-serif;
  text-align: center;
  position: relative;
`;

const overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
