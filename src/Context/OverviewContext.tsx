import React, { useReducer, createContext, ReactNode } from "react";
import Product from "../InfoType/infotype";

interface OverviewContextType {
  state: Product | undefined;
  dispatch: React.Dispatch<CountAction>;
}

export const ContextForOverview = createContext<
  OverviewContextType | undefined
>(undefined);

interface CountAction {
  type: string;
  payload?: Product;
}

interface OverviewContextProps {
  children: ReactNode;
}

function OverviewContext({ children }: OverviewContextProps) {
  const reducer = (
    state: Product | undefined,
    action: CountAction
  ): Product | undefined => {
    const { type, payload } = action;
    switch (type) {
      case "AddToState":
        console.log(state);
        return payload;
      case "DeleteFromState":
        console.log(state);
        return undefined;
      default:
        return state;
    }
  };

  const initialState: Product | undefined = undefined;
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: OverviewContextType = {
    state,
    dispatch,
  };

  return (
    <ContextForOverview.Provider value={value}>
      {children}
    </ContextForOverview.Provider>
  );
}

export default OverviewContext;
