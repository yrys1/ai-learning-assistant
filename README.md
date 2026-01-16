
# 🤖 AI Learning Assistant (React)

## 📌 Projektbeschreibung

**AI Learning Assistant** ist eine Webanwendung, die Lernende beim Einstieg in **React** und **JavaScript** unterstützt.
Die Anwendung simuliert das Verhalten eines intelligenten Assistenten, indem sie Benutzerfragen analysiert und kontextabhängige Antworten liefert.

Das Projekt wurde mit **React + Vite** entwickelt und zeigt saubere Architektur, State-Management und durchdachte UX – mit Fokus auf eine **Ausbildung im IT-Bereich (Fachinformatiker)**.

---

## 🎯 Ziel des Projekts

* Unterstützung beim Lernen von React & JavaScript
* Simulation eines „intelligenten“ Assistenten ohne externe APIs
* Demonstration von **logischem Denken**, **Architektur** und **Clean Code**

---

## 🧠 Wie funktioniert der „AI“-Assistent?

Der Assistent basiert auf einer **rule-based Decision Engine**:

* Benutzerfragen werden normalisiert (Lowercase, Trim)
* Schlüsselwörter werden erkannt (z. B. *react*, *useEffect*, *javascript*)
* Abhängig vom Kontext wird eine passende Antwort generiert
* Fallback-Antwort, wenn keine Regel passt

👉 Kein echtes Machine Learning, sondern **nachvollziehbare Logik**, wie sie auch in realen Business-Anwendungen verwendet wird.

---

## ⚙️ Funktionen

* 📝 Texteingabe für Fragen
* 💡 Vorschläge (Suggestion Panel) für typische Fragen
* 🤖 Kontextabhängige Antworten
* 📜 Gesprächsverlauf (Conversation History)
* 💾 Speicherung im LocalStorage
* 🗑️ Löschen der History mit Bestätigung
* 🎨 Sauberes, übersichtliches UI

---

## 🛠️ Verwendete Technologien

* **React (Hooks: useState, useEffect)**
* **Vite**
* **JavaScript (ES6+)**
* **CSS**
* **LocalStorage**
* **Git & GitHub**

---

## 🧱 Projektstruktur

```
src/
 ├─ components/
 │   ├─ AssistantInput.jsx
 │   ├─ AssistantResponse.jsx
 │   ├─ ConversationHistory.jsx
 │   └─ SuggestionPanel.jsx
 ├─ logic/
 │   └─ assistantEngine.js
 ├─ App.jsx
 └─ main.jsx
```

* **UI-Komponenten** sind strikt von der Logik getrennt
* Die AI-Logik befindet sich in einer eigenen Datei (`assistantEngine.js`)

---

## 🚀 Installation & Start

```bash
npm install
npm run dev
```

## 🎓 Warum dieses Projekt für eine Ausbildung geeignet ist

* klare Trennung von Logik und UI
* verständliche, wartbare Architektur
* Fokus auf Problemlösung statt nur Design
* zeigt Eigeninitiative und Lernfähigkeit

---

## 👤 Entwickler

**Yryskeldi Akhmatbekov**
Bewerber für eine **IT-Ausbildung (Fachinformatiker)**
Interesse: Webentwicklung, React, moderne Frontend-Technologien


