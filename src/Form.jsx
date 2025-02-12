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

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          {/* <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          /> */}
          <label for="exampleInputPassword1" class="form-label">
            Send me a massage!
          </label>
          <textarea
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
