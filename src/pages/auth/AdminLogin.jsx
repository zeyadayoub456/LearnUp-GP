import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./adminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <main className="admin-login-page">
      <header className="admin-login-nav">
        <div className="admin-login-brand">
          <span>⌂</span>
          <strong>LearnUp</strong>
        </div>
        <button type="button">Join Now</button>
      </header>

      <section className="admin-login-card" aria-labelledby="admin-login-title">
        <h1 id="admin-login-title">Welcome, Admin!</h1>
        <p>Access your dashboard and manage your courses of computer science department</p>

        <form onSubmit={handleSubmit}>
          <label>
            <span><Mail size={14} /> Email Address</span>
            <input type="email" placeholder="name@university.edu" />
          </label>
          <label>
            <span><LockKeyhole size={14} /> Password <a href="/forgot-password">Forgot Password?</a></span>
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit">
            log In
            <ArrowRight size={20} />
          </button>
        </form>
      </section>
    </main>
  );
}
