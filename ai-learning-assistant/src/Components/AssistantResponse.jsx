const AssistantResponse=({ 
    status,
    answer
})=>{
return(
    <div className="assistant-response">
       {status ==="thinking"?"AI thinkning": status==="answered"?answer:
       "No text"}
    </div>
)


}

export default AssistantResponse