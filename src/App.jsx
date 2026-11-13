import { useEffect, useState } from "react"
import AnswerForm from "./components/AnswerForm.jsx"

export default function App() {
  const [serverStatus, setServerStatus] = useState("Checking server...")

  useEffect(() => {
    fetch("/api/health")
      .then((response) => {
        if (!response.ok) throw new Error("Health check failed")
        return response.json()
      })
      .then(() => setServerStatus("Server connected"))
      .catch(() => setServerStatus("Server unavailable"))
  }, [])

  return (
    <main className="app-shell">
      <section className="answer-card">
        <p className="eyebrow">SIGMASCHOOL AI LAB</p>
        <h1>Askly</h1>
        <p className="intro">Ask one clear question. Your Express server will safely carry it to an AI model and bring the answer back.</p>
        <div className="status-pill" aria-live="polite">{serverStatus}</div>
        <AnswerForm />
      </section>
    </main>
  )
}
