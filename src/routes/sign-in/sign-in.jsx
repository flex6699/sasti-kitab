import { signInWithGooglePopup, createUserAuth } from "../../utils/firebase";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserAuth(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in page</button>
    </div>
  );
};

export default SignIn;
