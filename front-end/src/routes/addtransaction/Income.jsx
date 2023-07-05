import Card from "../../images/kreditcardbluefinal.png";
import Back from "../../images/Back.svg";
import Profil from "../../images/profilpic.png";
import { Label, Input, Select, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../style/addincome.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Income() {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const local = location.pathname;

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (touchStart - touchEnd > minSwipeDistance) {
            navigate(`expense`);
            console.log("swiped left");
        }
        if (touchStart - touchEnd < -minSwipeDistance) {
            console.log("swiped right");
        }
    };

    //! Nacher datenbank Fetchen und in die Select einfügen
    //TODO: Datenbank Cate
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/categories/incoming");
            const data = await response.json();
            setCategory(data);
            console.log(data);
        }
        fetchData();
    }, []);

    const options = category.map((incoming) => ({
        key: incoming._id,
        value: incoming.title,
        text: incoming.title,
    }));

    console.log(options);

    return (
        <div
            id="income"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <header id="income_header">
                <div className="income_back">
                    <img src={Back} alt="back" />
                </div>
                <div className="income_profil">
                    <img src={Profil} alt="profil" />
                </div>
            </header>
            <main id="income_main">
                <div className="income_title">
                    <h1>Add Income</h1>
                    <img src={Card} alt="card" />
                </div>
                <form className="income_form">
                    <div className="income_form_input">
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
                    <div className="income_category">
                        <label htmlFor="category">Category</label>
                        <div className="income_form_category">
                            <Select
                                size="large"
                                placeholder="Select your Income"
                                options={options}
                            />
                        </div>
                    </div>
                    <div className="income_date_time">
                        <div className="income_form_date_time">
                            <label htmlFor="date">Date</label>
                            <div className="income_form_date">
                                <input type="date" name="date" id="date" />
                            </div>
                        </div>
                        <div className="income_form_date_time">
                            <label htmlFor="time">Time</label>
                            <div className="income_form_time">
                                <input type="time" name="time" id="time" />
                            </div>
                        </div>
                    </div>
                    <div className="income_form_button">
                        <Button
                            size="massive"
                            inverted
                            color="blue"
                            type="submit"
                        >
                            Add Income
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
