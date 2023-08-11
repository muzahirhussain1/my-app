import "./facebook.css";

function Facebook() {
  return (
    <>
      <div className="main">
        <input
          className="email"
          type="text"
          placeholder="Enter email or phone  number"
        ></input>
        <input className="pass" type="password" placeholder="Password"></input>
        <button className="log">Login</button>
        <button className="acount">Create new account</button>
      </div>
    </>
  );
}

export default Facebook;
