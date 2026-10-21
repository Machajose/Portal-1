import { useState } from "react";
import { menuItems } from "../data/mockData.js";
import mutLogo from "../assets/mut-logo.png";

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const go = (page) => { onNavigate(page); setOpen(false); };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="brand">
          <img className="logo" src={mutLogo} alt="Murang’a University of Technology logo" />
          <span className="brand-name">MUT</span>
        </div>
        <button className="hamburger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      {open && <nav className="menu">
        {menuItems.map((item) => <button key={item.label} className="menu-item" onClick={() => go(item.page)}>
          {item.icon && <span>{item.icon} </span>}{item.label}{item.dropdown && <span className="caret"> ▾</span>}
        </button>)}
        <button className="close-btn" onClick={() => setOpen(false)}>✕ Close</button>
      </nav>}
    </header>
  );
}
