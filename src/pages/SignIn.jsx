import logo from '../assets/logo.png'
function SignIn(){
    return  (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="card p-2 p-md-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
            <div className="text-center mb-4">
              <img src={logo} alt="Logo" width="72" height="72" />
              <h1 className="h4 mt-3">
                Sign in to <span className="purple">Immerse</span>
              </h1>
            </div>
            <form action="" method="post" className="sign-in-form">
              <div className="form-group mb-3">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input type="email" id="email" className="form-control" placeholder="Email" required autoFocus />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input type="password" id="password" className="form-control" placeholder="Password" required />
              </div>
              <button type="submit" id="confirm" className="btn btn-purple btn-block custom-button">
                Sign In
              </button>
            </form>
            <div className="text-center mt-3">
              <a href="#" className="text-muted">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-2">
              <a href="./sign-up" className="text-muted">
                Don't have an account? Sign up
              </a>
            </div>
          </div>
        </div>
      );
 }
 export default SignIn;