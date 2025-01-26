import React, { useState, createContext, ReactNode } from "react";

interface InitialObj {
  category: string;
}
interface ContextForFilterType {
  settingObj: InitialObj;
  setSettingObj: React.Dispatch<React.SetStateAction<InitialObj>>;
  setCategory: (category: string) => void;
}

export const ContextForFilter: React.Context<ContextForFilterType | undefined> =
  createContext<ContextForFilterType | undefined>(undefined);

interface FilterContext {
  children: ReactNode;
}

function FilterContext({ children }: FilterContext) {
  const initialobj: InitialObj = {
    category: "all",
  };

  const [settingObj, setSettingObj] = useState(initialobj);

  const setCategory = (category: string) => {
    setSettingObj((prevState) => ({
      ...prevState,
      category: category,
    }));
  };
  const value = {
    settingObj,
    setSettingObj,
    setCategory,
  };

  return (
    <ContextForFilter.Provider value={value}>
      {children}
    </ContextForFilter.Provider>
  );
}

export default FilterContext;
