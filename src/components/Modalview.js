import React, { useContext } from 'react'
import styled from "styled-components";
import { TaskListContext } from '../contexts/TaskListContext'
import Taskview from './TaskView';

const TaskModalview = () => {
  const {isModalOpenview, setIsModalOpenView} = useContext(TaskListContext);
  const {viewItem,setviewItem} = useContext(TaskListContext);

  const CloseModal = () => {
      
      if(viewItem){
        setIsModalOpenView(false)        
        setviewItem(null)
      }
      
  }
  
  return (
    <Root>

      {isModalOpenview && (
        <overlay>
          <Dialog>
              <div>
                <Taskview/>
              </div>
            <button onClick={CloseModal}>CLOSE MODAL</button>
          </Dialog>
        </overlay>
      )}
    </Root>
  );
}

export default TaskModalview

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
