import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google login </button>
    </div>
  );
};

export default Login;
