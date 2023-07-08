import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../images/kreditcardbluefinal.png";
import Back from "../../images/Back.svg";
import Profil from "../../images/profilpic.png";
import { Label, Input, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../style/addexpenses.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import dayjs from "dayjs";
import moment from "moment";

export default function Expenses() {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [expense, setExpense] = useState([]);
    const [amount, setAmount] = useState("");
    const [time, setTime] = useState(dayjs("15:30"));
    const [date, setDate] = useState(dayjs("17-04-2022"));
    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState("");
    const [formattedDate, setFormattedDate] = useState("");

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

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch("/api/categories/expense");
            const data = await response.json();
            setCategoryList(Array.isArray(data) ? data : []);
            console.log(data);
        }
        fetchCategories();
    }, []);

    const options = categoryList.map((expense) => ({
        key: expense._id,
        value: expense.title,
        text: expense.title,
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedDate = moment(date).utcOffset(0).format("DD-MM-YYYY"); // Datum im gewünschten Format formatieren
        console.log("Formatted Date:", formattedDate);

        const newExpense = {
            amount: amount,
            category: category,
            time: time,
            date: moment(date).utcOffset(0).toDate(), // Das Datum mit der UTC-Offset speichern
        };

        try {
            const response = await fetch("/api/expense", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newExpense),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setExpense([...expense, data]);
            } else {
                console.error("Error:", response.status);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    useEffect(() => {
        console.log(expense);
    }, [expense]);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const handleTimeChange = (selectedTime) => {
        setTime(selectedTime);
    };
    useEffect(() => {
        if (date) {
            const parsedDate = dayjs(date).format("DD-MM-YYYY");
            setFormattedDate(parsedDate);
        }
    }, [date]);

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
                    <h1>Add expense</h1>
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
                            <Input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <Label>.00</Label>
                        </Input>
                    </div>
                    <div className="expenses_category">
                        <Select
                            color="primary"
                            disabled={false}
                            placeholder="Category"
                            size="lg"
                            variant="outlined"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                            {options.map((option) => (
                                <Option key={option.key} value={option.value}>
                                    {option.text}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className="expenses_date_time">
                        <div className="expenses_form_date_time">
                            <label htmlFor="date">Date</label>
                            <div className="expenses_form_date">
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
                        <div className="expenses_form_date_time">
                            <label htmlFor="time">Time</label>
                            <div className="expenses_form_time">
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DemoContainer components={["TimeField"]}>
                                        <TimeField
                                            label="Format without meridiem"
                                            value={time}
                                            onChange={handleTimeChange}
                                            format="HH:mm"
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                    <div className="expenses_form_button">
                        <Button
                            size="massive"
                            inverted
                            color="blue"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Add expense
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
