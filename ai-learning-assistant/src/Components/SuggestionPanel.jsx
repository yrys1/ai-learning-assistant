const SuggestionPanel = ({ onSelectSuggestion }) => {
  const suggestions = [
    "How learn JS",
    "Explain useEffect",
    "Make React study plan"
  ]

  return (
    <div className="suggestions">
      {suggestions.map((text, index) => (
        <button
          key={index}
          onClick={() => onSelectSuggestion(text)}
        >
          {text}
        </button>
      ))}
    </div>
  )
}

export default SuggestionPanel
