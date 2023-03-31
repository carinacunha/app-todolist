import React, {  useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../context/MainContext';
import { getData } from '../services/requests';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState({
    title: '',
    description: '',
    doneDate: '',
  });

  const [allTasks, setAllTasks] = useState([]);

  const [idEdit, setIdEdit] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    getData('http://localhost:3000/tasks').then((resp) => {
      setAllTasks(resp);
    })
  },[]);

  const contextValue = useMemo(() => ({
    tasks,
    setTasks,
    allTasks,
    setAllTasks,
    idEdit,
    setIdEdit,
    isEditMode, 
    setIsEditMode
  }), [tasks, allTasks, idEdit]);

  return (
    <MainContext.Provider value={ contextValue }>
      {children}
    </MainContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;