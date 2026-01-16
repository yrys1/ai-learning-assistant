const ConversationHistory = ({ history }) => {
  return (
    <div className="history">
      {history.length === 0 ? (
        <p>No history</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <strong>{item.question}</strong>
              <br />
              {item.answer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConversationHistory;
