import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, Lock, Mail } from "lucide-react";
import AuthHeader from "../../components/AuthHeader";
import "./loginPage.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const passwordPlaceholder = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString().trim() ?? "";
    const isEruEmail = /^[^\s@]+@eru\.edu\.eg$/i.test(email);

    console.log("login submitted", {
      email,
      rememberMe,
    });

    if (!isEruEmail) {
      setEmailError("Please login with your ERU email ending with @eru.edu.eg");
      return;
    }

    setEmailError("");
    navigate("/student/dashboard");
  };

  return (
    <div className="login-page">
      <AuthHeader />

      <main className="login-page__main">
        <section className="login-card">
          <div className="login-card__intro">
            <h1>Welcome back!</h1>
            <p>Please enter your details to sign in.</p>
          </div>

          <div className="login-tabs" role="tablist" aria-label="Auth tabs">
            <button
              type="button"
              className="login-tabs__tab login-tabs__tab--active"
              role="tab"
              aria-selected={true}
            >
              Login
            </button>
            <button
              type="button"
              className="login-tabs__tab"
              role="tab"
              aria-selected={false}
              onClick={() => navigate("/create-account")}
            >
              Create New Account
            </button>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <label className="login-field">
              <span className="login-field__label">Email Address</span>
              <span className="login-field__control">
                <Mail size={16} strokeWidth={2.1} />
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  aria-invalid={emailError ? "true" : "false"}
                  onChange={() => {
                    if (emailError) {
                      setEmailError("");
                    }
                  }}
                />
              </span>
              {emailError && (
                <span className="login-form__error" role="alert">
                  {emailError}
                </span>
              )}
            </label>

            <div className="login-field">
              <div className="login-field__row">
                <span className="login-field__label">Password</span>
                <Link to="/forgot-password" className="login-field__link">
                  Forgot Password?
                </Link>
              </div>

              <span className="login-field__control">
                <Lock size={16} strokeWidth={2.1} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder={passwordPlaceholder}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="login-field__toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  <Eye size={16} strokeWidth={2.1} />
                </button>
              </span>
            </div>

            <label className="login-remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Remember me for 30 days</span>
            </label>

            <button type="submit" className="login-submit">
              Sign In
            </button>

            <div className="login-divider">
              <span />
              <p>OR CONTINUE WITH</p>
              <span />
            </div>

            <div className="login-socials">
              <button type="button" className="login-social">
                <span
                  className="login-social__icon login-social__icon--google"
                  aria-hidden="true"
                >
                  G
                </span>
                <span>Google</span>
              </button>

              <button type="button" className="login-social">
                <span
                  className="login-social__icon login-social__icon--facebook"
                  aria-hidden="true"
                >
                  f
                </span>
                <span>Facebook</span>
              </button>
            </div>
          </form>

          <div className="login-card__footer">
            <p>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="login-card__footer-link"
                onClick={() => navigate("/create-account")}
              >
                Sign up for free
              </button>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
