import {useState} from "react";
import axios from "axios";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import { Navigate } from "react-router-dom";

const SignInComponent = () => {
  const signIn = useSignIn();
  //const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/login", formData)
      .then((res) => {
        if (res.status === 200) {
          if (
            signIn({
              token: res.data.token,
              expiresIn: 120,
              tokenType: "Bearer",
              authState: res.data,
            })
          ) {
            // Only if you are using refreshToken feature
            // Redirect or do-something
            //console.log("Connexion ok");
          } else {
            return <button onClick={onSubmit()}>Connexion</button>;
          }
        }
      });
  };
  if (isAuthenticated()) {
    // If authenticated user, then redirect to secure dashboard

    return <Navigate to={"/posts"} replace />;
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="password">Mot de passe</label>
        <input
          type={"password"}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </p>

      <button>Connexion</button>
    </form>
  );
};

export default SignInComponent;
