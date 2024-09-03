

function Login() {

  return (
    <div>
        <h3> Form</h3>
      <div className="mb-3" >
        <label htmlFor="email" className="form-label"> Email</label>
        <input type="email" id="email" placeholder="email@gamil.com"/></div>
        <div className="mb-3" >
        <label htmlFor="name" className="form-label"> Name</label>
        <input type="text" id="name" placeholder="Name"/></div>
        <div className="mb-3" >
        <button className="btn btn-secondary w-100">Login</button>
      </div>

    </div>
  );
}

export default Login;
