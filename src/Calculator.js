/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FiDivide } from "react-icons/fi";
import { IoMdClose, IoMdAdd } from 'react-icons/io';
import { BsDash } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import { FaPercentage } from "react-icons/fa";
import "./calculator.css";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

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
        setCurrentEvent("");
    }

    const handleUpdateValue = (value) =>{
        let finalValue = finalResult;
        console.log('final value::',finalValue);
        switch(currentEvent){
            case "add":{
                setFinalResult(finalValue + value);break;
            }
            case "substract":{
                setFinalResult(finalValue - value);break;
            }
            case "multiply":{
                setFinalResult(finalValue * value);break;
            }
            case "divide":{
                setFinalResult(finalValue / value);break;
            }
            case "modules":{
                setFinalResult(finalValue % value);break;
            }
            default:{
                setFinalResult(parseInt(finalValue));break;
            }
        }
    }
    
    const add = () => {
        let sequenceList = keywordSequence + " + ";
        setKeywordSequence(sequenceList);
        setCurrentEvent("add");
    }

    const substract = () => {
        let sequenceList = keywordSequence + " - ";
        setKeywordSequence(sequenceList);
        setCurrentEvent("substract");
    }

    const multiply = () => {
        let sequenceList = keywordSequence + " x ";
        setKeywordSequence(sequenceList);
        setCurrentEvent("multiply");
    }

    const dividen = () => {
        let sequenceList = keywordSequence + " / ";
        setKeywordSequence(sequenceList);
        setCurrentEvent("divide");
    }

    const modules = () => {
        let sequenceList = keywordSequence + " % ";
        setKeywordSequence(sequenceList);
        setCurrentEvent("modules")
    }

    const handleClickKeyWord = (value) => {
        let sequenceList = keywordSequence + value;
        let numberStr = "";
        if(currentEvent !== ""){
            handleUpdateValue(parseInt(value));
        }else{
            numberStr = number.toString() + value.toString() ;
            setNumber(parseInt(numberStr));
            setFinalResult(parseInt(numberStr));
        }    
        setKeywordSequence(sequenceList.toString());
        
    }

    console.log("number::", number, "\nsequence::", keywordSequence, "\nfinal result::", finalResult, "\ncurrent event::",currentEvent);


    const handleGetResult = () => {
        setCurrentEvent("equal");
        handleUpdateValue("equal");
    }


    const calculatorFuncList = [
        {
            value: 'AC',
            action: restart
        },
        {
            value: <RiDeleteBack2Line color="#fff" />,
            action: handleDeleteKeyWord,
        },
        {
            value: <FaPercentage color="#fff" />,
            action: modules,
        },
        {
            value: <FiDivide color="#fff" />,
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
                <div>{finalResult}</div>
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
                    <div className="calculator-app-keyboard-row" style={{gridTemplateColumns: "2.3fr 1fr 1fr"}}>
                        {
                            [0, "."].map((keyWordValue, keyWordIndex) =>
                                <button className={keyWordValue === 0 ? "long-keyword-btn":""} onClick={() => { handleClickKeyWord(keyWordValue) }} key={keyWordIndex}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="calculator-equal-button action-btn" onClick={handleGetResult}>
                            =
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calculator