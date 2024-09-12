import React from "react";

import UserContex from "./UserContex";

const UserContexProvider = ({ children }) => {
  const [user, setUser] = React.useState({ name: "Gajanan", age: 25 });

  return <UserContex.Provider value={{ user, setUser }}>{children}</UserContex.Provider>;
};

export default UserContexProvider;
