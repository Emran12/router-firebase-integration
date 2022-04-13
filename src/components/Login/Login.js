import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>Login </h1>
      <button onClick={signInWithGoogle}>google sign in</button>
      <form>
        <input type="email" placeholder="Enter your email" />
        <br />
        <input type="password" placeholder="password" /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
