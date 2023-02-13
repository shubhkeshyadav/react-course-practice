import { authAction } from "../../store/auth";
import { useSelector, useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(authAction.login());

    console.log(isAuth);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label" htmlFor="exampleInputEmail1">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail2"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="exampleInputPassword1">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword2"
          placeholder="Password"
        />
      </div>
      <div className="mb-3 mb-0">
        <div className="checkbox checkbox-secondary">
          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
