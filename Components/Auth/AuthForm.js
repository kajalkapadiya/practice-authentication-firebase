import { useRef, useState } from "react";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // validation
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjkf_wxXjPK_-kLxr4M8ZBXykAgHINIyc";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBjkf_wxXjPK_-kLxr4M8ZBXykAgHINIyc";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section>
      <h1>{isLogin ? "Login" : "SignUp"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          ></input>
        </div>
        <div>
          {!isLoading && (
            <button>{isLogin ? "Login" : "create account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
