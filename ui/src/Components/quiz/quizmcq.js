import React, { useState } from 'react';
import './quiz.css'
import axios from 'axios';
import {Avatar, Button, Grid, Paper, TextField} from "@material-ui/core";

export default function Quizmcq() {
    let pth = window.location.href;
    let x = pth.indexOf("=");
    let y = pth.length;
    let k = x+1;
    let str = "";
    while(k<y)
    {
        str = str + pth[k];
        k++;
    }

    let pid = parseInt(str);

    const [sub_section_id,setSubsectionId] = useState(0);
    const [qid, setQid] = useState("");
    const [qid2, setQid2] = useState("")
    const [question, setQuestion] = useState("");
    const [questiona, setQuestiona] = useState("[]");
    const [questionb, setQuestionb] = useState("");
    const [questionc, setQuestionc] = useState("");
    const [questiond, setQuestiond] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question2a, setQuestion2a] = useState("[]");
    const [question2b, setQuestion2b] = useState("");
    const [question2c, setQuestion2c] = useState("");
    const [question2d, setQuestion2d] = useState("");
    axios.get('http://localhost:8084/api/GetBySection/'+pid)
        .then(response => {

            setQid(response.data[3].qid)
            setQuestion(response.data[3].content)
            setQuestiona(response.data[3].a)
            setQuestionb(response.data[3].b)
            setQuestionc(response.data[3].c)
            setQuestiond(response.data[3].d)
            setQid2(response.data[5].qid)
            setQuestion2(response.data[5].content)
            setQuestion2a(response.data[5].a)
            setQuestion2b(response.data[5].b)
            setQuestion2c(response.data[5].c)
            setQuestion2d(response.data[5].d)

        });
    let qidd=[qid,qid2]
    console.log(qidd);
    const questions = [
        {
            questionText: question,
            answerOptions: [
                { answerText: questiona, isCorrect: true },
                { answerText: questionb, isCorrect: true },
                { answerText: questionc, isCorrect: true },
                { answerText: questiond, isCorrect: true },
            ],
        },
        {
            questionText: question2,
            answerOptions: [
                { answerText: question2a, isCorrect: true },
                { answerText: question2b, isCorrect: true },
                { answerText: question2c, isCorrect: true },
                { answerText: question2d, isCorrect: true },
            ],
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (answerText) => {
        console.log(answerText);

        let obj = {
            subsectionId:"",
            qid:qidd[currentQuestion],
            patient:localStorage.getItem("id"),
            response:answerText,
        }

        fetch("http://localhost:8084/addQuiz",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseData)=>{
                console.log(responseData);})

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='body1'>
        <div className='app1'>
            {showScore ? (
                <div className='score-section'>Congratz!! You Completed this SubSection.
                    <Button href="/subsessionlist1" style={{backgroundColor:'#708f32'}} id="sec1sub1" type="button">Back to Subsection</Button>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.answerText)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
        </div>
    );
}