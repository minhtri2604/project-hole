import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    projectDate: '',
    pileNo: '',
    boringStartDate: '',
    boringStartTime: '',
    boringEndDate: '',
    boringEndTime: '',
    groutingStartDate: '',
    groutingStartTime: '',
    groutingEndDate: '',
    groutingEndTime: '',
    platformLevel: '',
    topOfCasing: '',
    cutOffLevel: '',
    toc: '',
    toe: '',
    ogl: '',
    pileLength: '',
    soilDrilling: '',
    totalWeathered: '',
    rockSocket: '',
    groutLength: '',
    ofBag: '',
    api: '',
    permanent: ''
  });

  const updateFormData = (newData) => {
    setData({ ...data, ...newData });
  };

  return (
    <AppContext.Provider value={{ data, updateFormData }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
