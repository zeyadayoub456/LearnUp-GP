import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader";
import "./whoAreYou.css";
import { ShieldCheck, Presentation, BookOpen } from "lucide-react";

const roles = [
  {
    id: "admin",
    title: "Admin",
    desc: "Manage the platform, users, and courses effectively.",
    icon: <ShieldCheck size={27} strokeWidth={2.4} />,
  },
  {
    id: "instructor",
    title: "Instructor",
    desc: "Create courses, upload materials, and monitor progress.",
    icon: <Presentation size={27} strokeWidth={2.4} />,
  },
  {
    id: "student",
    title: "Student",
    desc: "Enroll in courses and track your learning journey.",
    icon: <BookOpen size={27} strokeWidth={2.4} />,
  },
];

const RoleCard = ({ role, selected, onSelect }) => {
  return (
    <div className={`card ${selected ? "active" : ""}`}>
      <div className="icon">{role.icon}</div>
      <h3>{role.title}</h3>
      <p>{role.desc}</p>
      <button type="button" onClick={() => onSelect(role.id)}>
        Select {role.title}
      </button>
    </div>
  );
};

export default function WhoAreYou() {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();
  const handleContinue = () => {
    console.log("selected role:", selectedRole);

    if (selectedRole === "student") {
      navigate("/create-account");
      return;
    }

    navigate("/register");
  };

  return (
    <div className="container">
      <AuthHeader />

      {/* Content */}
      <div className="content">
        <h1>Who are you?</h1>
        <p className="subtitle">
          Please select your role to continue to the platform. Your workspace
          will be customized based on your selection.
        </p>

        <div className="cards">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              selected={selectedRole === role.id}
              onSelect={setSelectedRole}
            />
          ))}
        </div>

        <button
          className="continue"
          disabled={!selectedRole}
          onClick={handleContinue}
        >
          Continue →
        </button>

        <p className="terms">
          By continuing, you agree to our <span>Terms of Service</span>
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        <span>© 2024 LearnUp Platform</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
}
