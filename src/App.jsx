import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import WelcomeCard from "./components/WelcomeCard.jsx";
import StatCard from "./components/StatCard.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import { student, fees } from "./data/mockData.js";

const money = (n) =>
  "Ksh. " + n.toLocaleString("en-KE", { minimumFractionDigits: 2 });

export default function App() {
  // useState: the "memory" of a component. Changing it re-renders the UI.
  const [page, setPage] = useState("dashboard");

  return (
    <>
      <Navbar onNavigate={setPage} />
      <main className="container">
        {page === "dashboard" && (
          <>
            <WelcomeCard firstName={student.firstName} stage={student.stage} />
            <StatCard label="FEES BILLED" value={money(fees.billed)} />
            <StatCard
              label="TOTAL PAID"
              value={money(fees.paid)}
              change={fees.paidChange}
            />
            <StatCard
              label="BALANCE"
              value={money(fees.balance)}
              change={fees.balanceChange}
            />
          </>
        )}

        {page === "profile" && (
          <>
            <ProfileCard student={student} />
            <PersonalInfo student={student} />
          </>
        )}

        {page !== "dashboard" && page !== "profile" && (
          <div className="card">
            <h2>Coming soon</h2>
            <p className="muted">
              The "{page}" page is empty. Build it as an exercise!
            </p>
          </div>
        )}
      </main>
    </>
  );
}
