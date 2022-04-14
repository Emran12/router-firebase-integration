import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h1>Login </h1>
      <button onClick={() => signInWithGoogle()}>google sign in</button>
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
