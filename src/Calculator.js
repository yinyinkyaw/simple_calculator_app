/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FiDivide } from "react-icons/fi";
import { IoMdClose, IoMdAdd } from 'react-icons/io';
import { BsDash } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import { FaPercentage } from "react-icons/fa";
import "./calculator.css";

const Calculator = () => {

    const [finalResult, setFinalResult] = useState(0);
    const [keywordSequence, setKeywordSequence] = useState("");
    const [number, setNumber] = useState(0);
    const [currentEvent, setCurrentEvent] = useState("");


    const handleDeleteKeyWord = () => {

    }

    const restart = () => {
        setNumber(0);
        setKeywordSequence([]);
        setFinalResult(0);
    }
    
    const handleUpdateSequence = () => {
        let sequenceList = keywordSequence;
        switch (currentEvent) {
            case 'add': {
                sequenceList += "+";
                break;
            }
            case "subtract": {
                sequenceList += "-";
                break;
            }
            case "multiply": {
                sequenceList += "x";
                break;
            }
            case "divide": {
                sequenceList += "/";
                break;
            }
            case "modules": {
                sequenceList += "%";
                break;
            }
            default: {
                sequenceList += "";
                break;
            }
        };
        setKeywordSequence(sequenceList.toString());
    }

    const handleUpdateValue = () =>{
        let finalValue = finalResult;
        console.log("final value::",finalValue);
        switch(currentEvent){
            case "add":{
                setFinalResult(finalValue + number);
                break;
            }
            case "subtract":{
                setFinalResult(finalValue - number);
                break;
            }
            case "multiply":{
                setFinalResult(finalValue * number);
                break;
            }
            case "divide":{
                setFinalResult(finalValue / number);
                break;
            }
            case "modules":{
                setFinalResult(finalValue % number);
                break;
            }
            default:{
                setFinalResult(finalValue);
            }
        }
    }

    useEffect(() => {
        // setNumber(0);
        handleUpdateSequence()
    }, [finalResult]);

    useEffect(()=>{
        setNumber(0);
        handleUpdateSequence()
        // switch(currentEvent){
        //     case "add":{
        //         setFinalResult(finalResult + number);
        //         break;
        //     }
        //     case "subtract":{
        //         setFinalResult(finalResult - number);
        //         break;
        //     }
        //     case "multiply":{
        //         setFinalResult(finalResult * number);
        //         break;
        //     }
        //     case "divide":{
        //         setFinalResult(finalResult / number);
        //         break;
        //     }
        //     case "modules":{
        //         setFinalResult(finalResult % number);
        //         break;
        //     }
        //     default:{
        //         handleGetResult();
        //     }
        // }
    },[currentEvent])

    useEffect(()=> {
        setCurrentEvent("");
    }, [number])

    const add = () => {
        setCurrentEvent("add");
    }

    const substract = () => {
        setCurrentEvent("substract");
    }

    const multiply = () => {
        setCurrentEvent("multiply");
    }

    const dividen = () => {
        setCurrentEvent("divide");
    }

    const modules = () => {
        setCurrentEvent("modules")
    }

    const handleClickKeyWord = (value) => {
        let sequenceList = keywordSequence + value;
        let numberStr = number.toString() + value;
        setKeywordSequence(sequenceList.toString());
        setNumber(parseInt(numberStr));
    }

    console.log("number::", number, "\nsequence::", keywordSequence, "\nfinal result::", finalResult, "\ncurrent event::",currentEvent);


    const handleGetResult = () => {

    }


    const calculatorFuncList = [
        {
            value: 'AC',
            action: restart
        },
        {
            value: <RiDeleteBack2Line color="#0f53a5" />,
            action: handleDeleteKeyWord,
        },
        {
            value: <FaPercentage color="#0f53a5" />,
            action: modules,
        },
        {
            value: <FiDivide color="#0f53a5" />,
            action: dividen,
        }
    ];

    // console.log("sequence::",keywordSequence)
    return (
        <div className="calculator-app-container">
            <div className="calculator-app-calculation-display">
                {keywordSequence && <div className="calculator-app-calculation--sequence">
                    {keywordSequence}
                </div>}
                <div>= {finalResult}</div>
            </div>
            <div className="calculator-app-keyboard-section">
                <div className="calculator-app-function-container">
                    {
                        calculatorFuncList.map((data, index) =>
                            <button className="action-btn" key={index} onClick={data.action}>
                                {data.value}
                            </button>
                        )
                    }
                </div>
                <div className="calculator-app-keyboard-container">
                    <div className="calculator-app-keyboard-row">
                        {
                            [7, 8, 9].map((keyWordValue, keyWordIndex) =>
                                <button onClick={() => { handleClickKeyWord(keyWordValue) }} key={keyWordIndex}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="action-btn" onClick={multiply}>
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="calculator-app-keyboard-row">
                        {
                            [4, 5, 6].map((keyWordValue, keyWordIndex) =>
                                <button onClick={() => { handleClickKeyWord(keyWordValue) }} key={keyWordIndex}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="action-btn" onClick={substract}>
                            <BsDash />
                        </button>
                    </div>
                    <div className="calculator-app-keyboard-row">
                        {
                            [1, 2, 3].map((keyWordValue, keyWordIndex) =>
                                <button onClick={() => { handleClickKeyWord(keyWordValue) }} key={keyWordIndex}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="action-btn" onClick={add}>
                            <IoMdAdd />
                        </button>
                    </div>
                    <div className="calculator-app-keyboard-row">
                        {
                            [0, "."].map((keyWordValue, keyWordIndex) =>
                                <button onClick={() => { handleClickKeyWord(keyWordValue) }} key={keyWordIndex}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="calculator-equal-button" onClick={handleGetResult}>
                            =
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calculator