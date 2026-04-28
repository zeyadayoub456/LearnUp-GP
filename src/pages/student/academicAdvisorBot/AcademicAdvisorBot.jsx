import { useState } from "react";
import {
  Bot,
  Image,
  LayoutDashboard,
  LogOut,
  Map,
  Mic,
  MoreVertical,
  Paperclip,
  Search,
  SendHorizontal,
  Share2,
  SquareChartGantt,
  SquareLibrary,
  MessageSquarePlus,
  Trash2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import learnupLogo from "../../../assets/learnup-logo.png";
import "./academicAdvisorBot.css";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/student/dashboard" },
  { label: "Course board", icon: SquareLibrary, to: "/student/course-board" },
  { label: "Academic map", icon: Map, to: "/student/academic-map" },
  { label: "Semester result", icon: SquareChartGantt, to: "/student/semester-result" },
];

const historySections = [
  {
    title: "Today",
    items: [
      {
        title: "K-means Clustering Basics",
        meta: '"Explain the distance formula..."',
        active: true,
      },
      { title: "Calculus HW Help", meta: "10:45 AM" },
    ],
  },
  {
    title: "Yesterday",
    items: [
      { title: "Linear Algebra Recap", meta: "Yesterday, 04:20 PM" },
      { title: "Study Schedule Generator", meta: "Yesterday, 09:12 AM" },
    ],
  },
  {
    title: "Last 7 Days",
    items: [
      { title: "Python Library Pandas", meta: "Oct 24, 2023" },
      { title: "Art History Essay Outline", meta: "Oct 22, 2023" },
    ],
  },
];

const suggestionChips = [
  "When is my next quiz?",
  "Explain K-means clustering",
  "Show my grades",
  "Help with Calculus",
];

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text:
      "Hello Alex! I've analyzed your upcoming assignments. You have a quiz on Machine Learning Algorithms this Thursday at 2:00 PM. Would you like to start a practice session or review specific concepts like K-means clustering?",
    meta: "Learnbot \u2022 10:48 AM",
  },
  {
    id: 2,
    sender: "user",
    text:
      "Yes, please. Can you explain K-means clustering in simple terms? I'm specifically struggling with how the 'K' is initially chosen.",
    meta: "You \u2022 10:49 AM",
  },
  {
    id: 3,
    sender: "bot",
    text:
      "Great question! Think of K-means clustering like trying to group people at a party into 'K' different conversation circles.\n\nChoosing 'K' is often the trickiest part. Here are the most common ways we do it:\n\nWe test different values and look for the 'bend' in a graph.\n\nSometimes we already know how many groups we need (e.g., T-shirt sizes: S, M, L).\n\nDomain Knowledge:\n\nA mathematical way to see how well each point fits in its group.",
    meta: "Learnbot \u2022 10:50 AM",
  },
];

function AdvisorSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="advisor-bot__sidebar">
      <Link to="/student/dashboard" className="advisor-bot__logo" aria-label="LearnUp dashboard">
        <img src={learnupLogo} alt="LearnUp" className="learnup-logo" />
      </Link>

      <nav className="advisor-bot__nav" aria-label="Student navigation">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.label} to={item.to} className="advisor-bot__nav-item">
              <Icon size={25} strokeWidth={2.35} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="advisor-bot__sidebar-actions">
        <Link
          to="/student/academic-advisor-bot"
          className="advisor-bot__advisor-button"
          aria-current="page"
        >
          <Bot size={21} strokeWidth={2.35} />
          <span>Academic Advisor Bot</span>
        </Link>
        <button
          type="button"
          className="advisor-bot__logout-button"
          onClick={() => {
            localStorage.clear();
            navigate("/who-are-you");
          }}
        >
          <LogOut size={15} strokeWidth={2.35} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function HistoryPanel({ search, onSearchChange, onClear }) {
  return (
    <aside className="advisor-bot__history">
      <div className="advisor-bot__history-top">
        <h1>History</h1>
        <button
          type="button"
          aria-label="New chat"
          onClick={() => console.log("New chat")}
        >
          <MessageSquarePlus size={22} strokeWidth={2.5} />
        </button>
      </div>

      <label className="advisor-bot__history-search">
        <Search size={17} strokeWidth={2.15} />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search conversations..."
        />
      </label>

      <div className="advisor-bot__history-list">
        {historySections.map((section) => (
          <section key={section.title} className="advisor-bot__history-section">
            <h2>{section.title}</h2>
            {section.items.map((item) => (
              <button
                key={item.title}
                type="button"
                className={`advisor-bot__history-item ${
                  item.active ? "advisor-bot__history-item--active" : ""
                }`}
                onClick={() => console.log(`Open conversation: ${item.title}`)}
              >
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </button>
            ))}
          </section>
        ))}
      </div>

      <button type="button" className="advisor-bot__clear-button" onClick={onClear}>
        <span>Clear Chat History</span>
        <Trash2 size={16} strokeWidth={2.15} />
      </button>
    </aside>
  );
}

function BotIcon() {
  return (
    <span className="advisor-bot__bot-icon" aria-hidden="true">
      <Bot size={17} strokeWidth={2.45} />
    </span>
  );
}

function UserAvatar() {
  return <span className="advisor-bot__user-avatar" aria-label="Alex Rivera" role="img" />;
}

function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  return (
    <article
      className={`advisor-bot__message ${
        isUser ? "advisor-bot__message--user" : "advisor-bot__message--bot"
      }`}
    >
      {!isUser && <BotIcon />}
      <div className="advisor-bot__message-content">
        <div className="advisor-bot__bubble">
          {message.text.split("\n").map((line, index) => (
            <p key={`${message.id}-${index}`}>{line}</p>
          ))}
        </div>
        <span className="advisor-bot__message-meta">{message.meta}</span>
      </div>
      {isUser && <UserAvatar />}
    </article>
  );
}

function ChatArea({ messages, input, onInputChange, onSend, onSuggestion }) {
  const hasMessages = messages.length > 0;

  return (
    <section className="advisor-bot__chat" aria-label="Learnbot chat">
      <header className="advisor-bot__chat-header">
        <div className="advisor-bot__chat-title">
          <BotIcon />
          <h2>
            <span>Ask</span>
            <span>Learnbot</span>
          </h2>
        </div>

        <div className="advisor-bot__chat-actions">
          <button type="button" aria-label="Share chat" onClick={() => console.log("Share chat")}>
            <Share2 size={18} strokeWidth={2.2} />
          </button>
          <button type="button" aria-label="More options" onClick={() => console.log("More options")}>
            <MoreVertical size={20} strokeWidth={2.2} />
          </button>
        </div>
      </header>

      <div className="advisor-bot__chips" aria-label="Suggested prompts">
        {suggestionChips.map((chip) => (
          <button key={chip} type="button" onClick={() => onSuggestion(chip)}>
            {chip}
          </button>
        ))}
      </div>

      <main className="advisor-bot__messages">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {hasMessages && (
          <div className="advisor-bot__typing" aria-label="Learnbot is typing">
            <BotIcon />
            <span>
              <i />
              <i />
              <i />
            </span>
          </div>
        )}
      </main>

      <form className="advisor-bot__composer-wrap" onSubmit={onSend}>
        <div className="advisor-bot__composer">
          <input
            type="text"
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder="Type your question here..."
          />
          <div className="advisor-bot__composer-bottom">
            <div className="advisor-bot__composer-tools">
              <button type="button" aria-label="Attach file" onClick={() => console.log("Attach file")}>
                <Paperclip size={15} strokeWidth={2.2} />
              </button>
              <button type="button" aria-label="Attach image" onClick={() => console.log("Attach image")}>
                <Image size={15} strokeWidth={2.2} />
              </button>
              <button type="button" aria-label="Use microphone" onClick={() => console.log("Use microphone")}>
                <Mic size={15} strokeWidth={2.2} />
              </button>
            </div>
            <span>Press Enter to send</span>
          </div>
        </div>
        <button type="submit" className="advisor-bot__send-button" aria-label="Send message">
          <SendHorizontal size={23} strokeWidth={2.6} />
        </button>
      </form>

      <p className="advisor-bot__disclaimer">
        Learnbot AI may occasionally provide inaccurate information. Verify critical facts.
      </p>
    </section>
  );
}

function AcademicAdvisorBot() {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const addUserMessage = (text) => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now(),
        sender: "user",
        text: trimmedText,
        meta: "You \u2022 now",
      },
    ]);
    setInput("");
  };

  const handleSend = (event) => {
    event.preventDefault();
    addUserMessage(input);
  };

  const handleSuggestion = (suggestion) => {
    setInput(suggestion);
    addUserMessage(suggestion);
  };

  const clearHistory = () => {
    setMessages([]);
    console.log("Clear Chat History");
  };

  return (
    <div className="advisor-bot">
      <AdvisorSidebar />
      <HistoryPanel search={search} onSearchChange={setSearch} onClear={clearHistory} />
      <ChatArea
        messages={messages}
        input={input}
        onInputChange={setInput}
        onSend={handleSend}
        onSuggestion={handleSuggestion}
      />
    </div>
  );
}

export default AcademicAdvisorBot;
