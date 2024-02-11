import React, {useState} from 'react';
import axios from 'axios'

function TextAnalysis(){
    const [inputText, setInputText] = useState('');
    const [analysisResult, setAnalysisResult] = useState('')
    const handleSubmit = async () => {
        try {
            const response = await axios.post("YOUR_API_ENDPOINT/text", {text: inputText})
            setAnalysisResult(response.data.result)
        }
        catch(error){
            console.error("Error in analysing text:", error)
            setAnalysisResult('Error Analyzing text');
        }
    };

    return (
        <div>
            <h2>Text Sentiment Analysis</h2>
            <textarea value = {inputText} onChange = {(e) => setInputText(e.target.value)}/>
            <button onclikc ={handleSubmit}>Analyze</button>
            <p>Analysis Result: {analysisResult}</p>
        </div>
    );
}

export default TextAnalysis