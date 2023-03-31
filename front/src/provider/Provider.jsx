import React, {  useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../context/MainContext';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState({
    title: '',
    description: '',
    doneDate: '',
  });

  const contextValue = useMemo(() => ({
    tasks,
    setTasks,
  }), [tasks]);

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