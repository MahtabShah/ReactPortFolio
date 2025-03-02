import "./Form.modules.css";

export default function Form() {
  return (
    <>
      <form>
        <div className="ms-top"></div>
        <div className="ms-bar-c">
          <div className="ms-bar ms-bar1"></div>
          <div className="ms-bar ms-bar2"></div>
        </div>
        <div className="ms-bar ms-bar3"></div>
        <div className="ms-what-sl">
          {/* <b>Login</b> */}
          <b>Massage</b>
        </div>
        <div className="ms-top"></div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          {/* <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          /> */}
          <label for="exampleInputPassword1" className="form-label">
            Send me a massage!
          </label>
          <textarea
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
