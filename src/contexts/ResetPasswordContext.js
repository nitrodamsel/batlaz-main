import React, { useContext, useState } from "react";
const EmailContext = React.createContext();
const CodeContext = React.createContext();

export function useEmail() {
  return useContext(EmailContext);
}

export function useCode() {
  return useContext(CodeContext);
}

export function ResetPasswordProvider({ children }) {
  const [isEmail, setIsEmail] = useState();
  const [isCode, setIsCode] = useState();

  return (
    <EmailContext.Provider value={[isEmail, setIsEmail]}>
      <CodeContext.Provider value={[isCode, setIsCode]}>
        {children}
      </CodeContext.Provider>
    </EmailContext.Provider>
  );
}
