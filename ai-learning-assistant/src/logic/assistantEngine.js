function Antwort(question) {
  if (!question || typeof question !== "string") {
    return "Please ask a question.";
  }

  const q = question.toLowerCase().trim();

  if (q.includes("useeffect")) {
    return "useEffect is a React Hook used to handle side effects such as data fetching, subscriptions, or manually changing the DOM.";
  }

  if (q.includes("usestate")) {
    return "useState is a React Hook that allows you to add and manage state in functional components.";
  }

  if (q.includes("useref")) {
    return "useRef is a React Hook that lets you persist values between renders or directly access DOM elements.";
  }

  if (q.includes("react")) {
    return "React is a JavaScript library for building user interfaces using reusable components.";
  }

  if (q.includes("javascript") || q.includes("js")) {
    return "JavaScript is a programming language used to build interactive and dynamic web applications.";
  }

  if (q.includes("plan") || q.includes("learn")) {
    return "A good learning plan is: understand basics, practice daily, build small projects, and review mistakes.";
  }

  if (q.includes("motivat") || q.includes("tired")) {
    return "Learning can be hard. Take small steps, practice consistently, and don’t be afraid to make mistakes.";
  }

  if (q.includes("created") || q.includes("boss")) {
    return "I was created by Akhmatbekov Yryskeldi.";
  }

  return "I am not sure I understand the question. Try asking about React, JavaScript, or hooks.";
}

export default Antwort;
