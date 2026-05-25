import { Eye, GraduationCap, LockKeyhole, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./facultyLogin.css";

export default function FacultyLogin() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/faculty/dashboard");
  };

  return (
    <main className="faculty-login-page">
      <header className="faculty-login-nav">
        <div className="faculty-login-brand">
          <span><GraduationCap size={18} strokeWidth={2.3} /></span>
          <strong>LearnUp</strong>
        </div>
        <div>
          <a href="/forgot-password">Help</a>
          <button type="button">Join Now</button>
        </div>
      </header>

      <section className="faculty-login-card" aria-labelledby="faculty-login-title">
        <h1 id="faculty-login-title">Welcome back Faculty Member!</h1>
        <p>Please enter your details to sign in.</p>

        <div className="faculty-login-tab">Login</div>

        <form onSubmit={handleSubmit}>
          <label className="faculty-login-field">
            <span>Email Address</span>
            <div>
              <Mail size={15} />
              <input type="email" placeholder="name@example.com" />
            </div>
          </label>

          <label className="faculty-login-field">
            <span>Password <a href="/forgot-password">Forgot?</a></span>
            <div>
              <LockKeyhole size={15} />
              <input type="password" placeholder="••••••••" />
              <Eye size={15} />
            </div>
          </label>

          <label className="faculty-login-remember">
            <input type="checkbox" />
            <span>Remember me for 30 days</span>
          </label>

          <button type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
}
