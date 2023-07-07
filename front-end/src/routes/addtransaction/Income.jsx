import Card from "../../images/kreditcardbluefinal.png";
import Back from "../../images/Back.svg";
import Profil from "../../images/profilpic.png";
import { Label, Input, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../style/addincome.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
// import moment from "moment-timezone";

export default function Income() {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [income, setIncome] = useState([]);
    const [amount, setAmount] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState(null);
    const [formattedDate, setFormattedDate] = useState("");

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

    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch("/api/categories/incoming");
            const data = await response.json();
            setCategoryList(Array.isArray(data) ? data : []);
            console.log(data);
        }
        fetchCategories();
    }, []);

    console.log(category);

    const options = categoryList.map((incoming) => ({
        key: incoming._id,
        value: incoming.title,
        text: incoming.title,
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedDate = moment(date).utcOffset(0).format("DD-MM-YYYY"); // Datum im gewünschten Format formatieren
        console.log("Formatted Date:", formattedDate);

        const newIncome = {
            amount: amount,
            category: category,
            time: time,
            date: moment(date).utcOffset(0).toDate(), // Das Datum mit der UTC-Offset speichern
        };

        try {
            const response = await fetch("/api/incomes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newIncome),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setIncome([...income, data]);
            } else {
                console.error("Error:", response.status);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        console.log(income);
    }, [income]);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    useEffect(() => {
        if (date) {
            const parsedDate = dayjs(date).format("DD-MM-YYYY");
            setFormattedDate(parsedDate);
        }
    }, [date]);

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
                <form className="income_form" onSubmit={handleSubmit}>
                    <div className="income_form_input">
                        <Input
                            size="huge"
                            labelPosition="right"
                            type="text"
                            placeholder="Amount"
                        >
                            <Label basic>€</Label>
                            <Input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <Label>.00</Label>
                        </Input>
                    </div>
                    <div className="income_category">
                        <InputLabel id="demo-simple-select-label">
                            Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                            {options.map((option) => (
                                <MenuItem key={option.key} value={option.value}>
                                    {option.text}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    <div className="income_date_time">
                        <div className="income_form_date_time">
                            <label htmlFor="date">Date</label>
                            <div className="income_form_date">
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                    adapterLocale="DE"
                                >
                                    <DatePicker
                                        label="Date"
                                        value={date}
                                        onChange={handleDateChange}
                                        renderInput={(params) => (
                                            <input {...params} type="text" />
                                        )}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="income_form_date_time">
                            <label htmlFor="time">Time</label>
                            <div className="income_form_time">
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="income_form_button">
                        <Button
                            size="massive"
                            inverted
                            color="blue"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Add Income
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
