import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="max-lg:py-32">{children}</div>;
};

export default AuthLayout;
