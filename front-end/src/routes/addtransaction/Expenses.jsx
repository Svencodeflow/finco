import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../images/kreditcardbluefinal.png";
import Back from "../../images/Back.svg";
import Profil from "../../images/profilpic.png";
import { Label, Input, Select, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../style/addexpenses.css";

export default function Expenses() {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const navigate = useNavigate();

    const minSwipeDistance = 100;

    const onTouchStart = (e) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (touchStart - touchEnd > minSwipeDistance) {
            console.log("swiped left");
        }
        if (touchStart - touchEnd < -minSwipeDistance) {
            console.log("swiped right");
            navigate("/addtransaction");
        }
    };

    //! Nacher datenbank Fetchen und in die Select einfügen
    //TODO: Datenbank Category Fetchen und in die Select einfügen
    const incoming = [
        { key: "Shopping", value: "Shopping", text: "Shopping" },
        { key: "Other", value: "Other", text: "Other" },
        {
            key: "Fixed_costs",
            value: "fixed_costs",
            text: "Fixed costs",
        },
        { key: "spare_time", value: "spare_time", text: "Spare Time" },
    ];

    return (
        <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <header id="expenses_header">
                <div className="expenses_back">
                    <img src={Back} alt="back" />
                </div>
                <div className="expenses_profil">
                    <img src={Profil} alt="profil" />
                </div>
            </header>
            <main id="expenses_main">
                <div className="expenses_title">
                    <h1>Add expenses</h1>
                    <img src={Card} alt="card" />
                </div>
                <form className="expenses_form">
                    <div className="expenses_form_input">
                        <Input
                            size="huge"
                            labelPosition="right"
                            type="text"
                            placeholder="Amount"
                        >
                            <Label basic>€</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                    </div>
                    <div className="expenses_category">
                        <label htmlFor="category">Category</label>
                        <div className="expenses_form_category">
                            <Select
                                size="large"
                                placeholder="Select your expenses"
                                options={incoming}
                            />
                        </div>
                    </div>
                    <div className="expenses_date_time">
                        <div className="expenses_form_date_time">
                            <label htmlFor="date">Date</label>
                            <div className="expenses_form_date">
                                <input type="date" name="date" id="date" />
                            </div>
                        </div>
                        <div className="expenses_form_date_time">
                            <label htmlFor="time">Time</label>
                            <div className="expenses_form_time">
                                <input type="time" name="time" id="time" />
                            </div>
                        </div>
                    </div>
                    <div className="expenses_form_button">
                        <Button
                            size="massive"
                            inverted
                            color="blue"
                            type="submit"
                        >
                            Add expenses
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
