import { useState } from "react"

export default function AnswerForm() {
  const [question, setQuestion] = useState("")
  const [answer] = useState("")
  const [loading] = useState(false)
  const [error] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="answer-form">
      <label htmlFor="question" className="form-label">Your question</label>
      <textarea
        id="question"
        className="form-control"
        rows="5"
        maxLength="500"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="Why does the moon change shape?"
      />
      <div className="form-footer">
        <span>{question.length}/500</span>
        <button className="btn btn-success" type="submit" disabled={loading || !question.trim()}>
          {loading ? "Asking..." : "Ask"}
        </button>
      </div>
      {error && <p className="message error-message">{error}</p>}
      {answer && <div className="message answer-message"><strong>Answer</strong><p>{answer}</p></div>}
      <div id="demo-value" className="demo-value" aria-live="polite" />
    </form>
  )
}
