import "./style/login.scss";
// import HeaderTop from "@/component/Header/HeaderTop";
// import Navbar from "@/component/Header/Navbar";
// import Footer from "@/component/Footer/Footer";
function Login() {
    return (
        <div>
            {/* <HeaderTop></HeaderTop>
            <Navbar></Navbar> */}
            <div className="card col-lg col-xl-9 flex-row mx-auto px-0">
                <div className="img-left d-none d-md-flex"></div>
                <div className="card-body">
                    <h4 className="title text-center mt-2 mb-3">
                        Login to your account
                    </h4>
                    <form className="form-box px-3">
                        <div className="form-input">
                            <span>
                                <i className="fa fa-envelope"></i>
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="form-control"
                                
                               
                            ></input>
                        </div>

                        <div className="form-input">
                            <span>
                                <i className="fa fa-key"></i>
                            </span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control "
                                required=""
                                autocomplete="current-password"
                            />
                        </div>

                        <div className="mb-3">
                            <div className="custom-control custom-check">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="remember"
                                    id="remember"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="remember"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-block">
                                Login
                            </button>
                        </div>

                        <div className="text-right">
                            <a href="/" className="forget-link">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="text-center mb-3">or login with</div>

                        <div className="row mb-3">
                            <div className="col-6">
                                <a
                                    href="/login/facebook"
                                    className="btn btn-block btn-social btn-facebook"
                                >
                                    Facebook
                                </a>
                            </div>
                            <div className="col-6">
                                <a
                                    href="/login/google"
                                    className="btn btn-block btn-social btn-google"
                                >
                                    Google
                                </a>
                            </div>
                        </div>
                        <hr className="my-4"></hr>

                        <div className="text-center mb-2">
                            Check out as a guest?
                            <a href="/" className="register-link">
                                Click Here
                            </a>
                        </div>
                        <div className="text-center mb-2">
                            Don't have an account?
                            <a
                                href="/"
                                className="register-link"
                            >
                                Register Here
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default Login;
