import { useReducer } from "react";
import { ProfileContext } from "../context";
import { innitialState, profileReducer } from "../reducers/ProfileReducer";

export default function PropfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, innitialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}
