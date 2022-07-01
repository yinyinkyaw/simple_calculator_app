/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FiDivide } from "react-icons/fi";
import { IoMdClose, IoMdAdd } from 'react-icons/io';
import { BsDash } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import { FaPercentage } from "react-icons/fa";
import "./calculator.css";

const Calculator = () => {

    const [finalResult, setFinalResult] = useState([]);
    const [keywordSequence, setKeywordSequence] = useState("");
    const [calculateResult, setCalculateResult] = useState(0);


    const handleClickKeyWord = (keyWord) => {
        let sequenceList = "";
        if (keyWord === "delete") {
            sequenceList = keywordSequence.slice(0, -1);
        } else {
            sequenceList = keywordSequence + keyWord;
        }
        setKeywordSequence(sequenceList);
    }

    const restart = () => {
        setKeywordSequence("");
        setCalculateResult(0);
    }

    const calculatorFuncList = [{
        icon: <RiDeleteBack2Line color="#fff" />,
        name: "delete"
    },
    {
        icon: <FaPercentage color="#fff" />,
        name: "%"
    },
    {
        icon: <FiDivide color="#fff" />,
        name: "/"
    }
    ];

    // console.log("sequence::",keywordSequence)
    return (
        <div className="calculator-app-container">
            <div className="calculator-app-calculation-display">
                {keywordSequence && <div className="calculator-app-calculation--sequence">{keywordSequence}</div>}
                <div>{calculateResult}</div>
            </div>
            <div className="calculator-app-keyboard-section">
                <div className="calculator-app-function-container">
                    <button onClick={restart}>
                        AC
                    </button>
                    {
                        calculatorFuncList.map((actionIcon, actionIconIndex) =>
                            <button key={actionIconIndex} onClick={() => handleClickKeyWord(actionIcon.name)}>
                                {actionIcon.icon}
                            </button>
                        )
                    }
                </div>
                <div className="calculator-app-keyboard-container">
                    <div className="calculator-app-keyboard-row">
                        {
                            [7, 8, 9].map((keyWordValue, keyWordIndex) =>
                                <button key={keyWordIndex} onClick={() => handleClickKeyWord(keyWordValue.toString())}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="action-btn" onClick={() => handleClickKeyWord(" * ")}>
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="calculator-app-keyboard-row" >
                        {
                            [4, 5, 6].map((keyWordValue, keyWordIndex) =>
                                <button key={keyWordIndex} onClick={() => handleClickKeyWord(keyWordValue)}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="action-btn" onClick={() => handleClickKeyWord(" - ")}>
                            <BsDash />
                        </button>
                    </div>
                    <div className="calculator-app-keyboard-row">
                        {
                            [1, 2, 3].map((keyWordValue, keyWordIndex) =>
                                <button key={keyWordIndex} onClick={() => handleClickKeyWord(keyWordValue)}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="action-btn" onClick={() => handleClickKeyWord(" + ")}>
                            <IoMdAdd />
                        </button>
                    </div>
                    <div className="calculator-app-keyboard-row" style={{ gridTemplateColumns: "2.3fr 1fr 1fr" }}>
                        {
                            [0, "."].map((keyWordValue, keyWordIndex) =>
                                <button className={keyWordValue === 0 ? "long-keyword-btn" : ""} key={keyWordIndex} onClick={() => handleClickKeyWord(keyWordValue)}>
                                    {keyWordValue}
                                </button>
                            )
                        }
                        <button className="calculator-equal-button action-btn" onClick={() => setCalculateResult(eval(keywordSequence))} >
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;