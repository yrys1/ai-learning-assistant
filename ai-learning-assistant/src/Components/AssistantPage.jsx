import { useState,useEffect } from "react"

import AssistantResponse from "./AssistantResponse"
import AssistantInput from "./AssistantInput"
import ConversationHistory from "./ConversationHistory"
import SuggestionPanel from "./SuggestionPanel"

import Antwort from "../logic/assistantEngine"



const AssistantPage=()=>{
const[question,setQuestion]=useState("")
const[answer,setAnswer]=useState("")
const[status,setStatus]=useState("idle")
const[history,setHistory]=useState(()=>{
    const saveHistory=localStorage.getItem("assistant_history")

    return saveHistory? JSON.parse(saveHistory):[];
})



const sendRequest=()=>{
    if(question.trim()==="") return;
    setStatus("thinking")
    setAnswer("")

    setTimeout(()=>{
     const answerText=Antwort(question)

       setAnswer(answerText)
        setStatus("answered")

        const newObject={
            question:question,
            answer:answerText
        }
        setHistory(prev=>[...prev,newObject])
       
        
        
    },3000);
    
}


const onSelectSuggestion=(text)=>{
   
    setQuestion(text)
}


const deleteHistory=()=>{
     const ques=confirm("Are you sure?")
        if(ques){setHistory([])}
        
}

useEffect(()=>{
localStorage.setItem("assistant_history",JSON.stringify(history))
},[history])


return(
    <div className="app">
        <div className="assistant">
   <AssistantResponse
   status={status}
   answer={answer}
   />

    <AssistantInput
    question={question}
    setQuestion={setQuestion}
    sendRequest={sendRequest}
    />

    <ConversationHistory
    history={history}/>
    {history.length>0? <button className="deleteHistory" onClick={deleteHistory}>delete history</button>:null}
   
   <SuggestionPanel 
   onSelectSuggestion={onSelectSuggestion}
   />

    </div>
</div>
)

}
export default AssistantPage;