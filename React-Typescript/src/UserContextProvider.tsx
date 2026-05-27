import React, { createContext } from "react";

export interface User {
  name: string;
  age: number;
  isTall: boolean;
}

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const contextInitialValues = {
  users:null,
  addUser:()=>null,
  updateUser : ()=>null
  deleteUser:()=>null
}

const UserContext = createContext<UserContextType>(contextInitialValues)

interface Props {
  children:React.ReactNode
}
const UserProvider = (props:Props) => {
  return <div>{props.children}</div>;
};

export default UserProvider;
