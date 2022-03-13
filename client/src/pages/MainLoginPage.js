import React, { useEffect, useState } from "react";
import SignupForm from "./Register";
import LoginForm from "./Login";
import ForgotPassword from "./ForgotPassword";

export default function InternForm({ userType }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [isLogin, setIsLogin] = React.useState(2)
  console.log("lawde ka user", isLogin)

  const [selectedCSC, setSelectedCSC] = useState({country:"", state:"", city:"", streetAddress:"", pinCode:1234})

  return (
    <div className="px-4 mt-10 flex w-full justify-center">
      {!user && (
        <>
          {isLogin == 1 ? (
            <LoginForm
              userType={userType}
              setIsLogin={setIsLogin}
            />
          ) : isLogin == 2 ? (
            <SignupForm
              userType={userType}
              selectedCSC={selectedCSC}
              setSelectedCSC = {setSelectedCSC}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          ) : (
            <ForgotPassword
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          )}
        </>
      )}
    </div>
  );
}