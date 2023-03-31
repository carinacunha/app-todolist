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

  useEffect(() => {
    getData('http://localhost:3000/tasks').then((resp) => {
      setAllTasks(resp);
    })
  },[]);

  const contextValue = useMemo(() => ({
    tasks,
    setTasks,
    allTasks, 
    setAllTasks
  }), [tasks, allTasks]);

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