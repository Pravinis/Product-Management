import React, { useContext, useState } from 'react'
import styled from "styled-components";
import { TaskListContext } from '../contexts/TaskListContext'
import Taskview from './TaskView';

const HelpModal = () => {
  const [isModalOpenhelp, setIsModalOpenhelp] = useState(false);

  const CloseModal = () => {      
        setIsModalOpenhelp(false)      
  }
  
  return (
    <Root>
<button onClick={() => setIsModalOpenhelp(true)}>Help</button>
      {isModalOpenhelp && (
        <overlay>
          <Dialog>
              <div>
        <i class="fa fa-plus-circle">:Add task to the Tasklist</i>
        <i class="fas fa-pen">:Edit task to the Tasklist</i>
        <i class="fas fa-trash">:Delete the task from the List</i>
        <i class="fas fa-eye">:View the task from the List</i>
                  </div>
            <button onClick={CloseModal}><h2>X</h2></button>
          </Dialog>
        </overlay>
      )}
    </Root>
  );
}

export default HelpModal

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
