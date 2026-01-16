const AssistantInput=({
    question,
    setQuestion,
    sendRequest
})=>{
    return(
        <div className="assistant-input">
        <input type="text"
        value={question} 
        onChange={(e)=> setQuestion(e.target.value)}/>
        <button onClick={sendRequest}>OnSend</button>
        </div>
    )
}

export default AssistantInput;