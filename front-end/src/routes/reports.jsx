import React from "react";
import Back from "../images/profil_logo.svg";
import Profil from "../images/profilpic.png";
import income from "../images/income.png";
import incomeMoney from "../images/Back.svg";
import Expenses from "../images/expense.png";
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area,
} from "recharts";

export default function reports() {
    //! UV = Ausgaben PV = Einnahmen
    //TODO: Datenbankabfrage für die Grafik

    const data = [
        {
            name: "01.07",
            Einnahmen: 3490,
            Ausgabe: 0,
        },
        {
            name: "02.07",
            Einnahmen: 0,
            Ausgabe: 1000,
        },

        {
            name: "03.07",
            Einnahmen: 500,
            Ausgabe: 1000,
        },
    ];

    //* Saldo = Saldo + Einnahmen - Ausgaben

    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            data[i].Saldo = data[i].Einnahmen - data[i].Ausgabe;
        } else {
            data[i].Saldo =
                data[i - 1].Saldo + data[i].Einnahmen - data[i].Ausgabe;
        }
    }

    return (
        <div id="reports">
            <header id="reports_header">
                <div className="reports_back">
                    <img src={Back} alt="back" />
                </div>
                <div className="reports_profil">
                    <img src={Profil} alt="profil" />
                </div>
            </header>

            <div className="reports_content">
                <div className="reports_content_header">
                    <h1>Reports</h1>
                </div>
                <div className="reports_content_body">
                    <img src={income} alt="income" />
                    <p>Income</p>
                    <p>
                        {/* 
                        //! DB Platzhalter wieviel Geld eingenommen wurde
                        //TODO: placeholder = Platzhalter für die Datenbankabfrage
                        */}
                        +$<span>placeholder</span>
                    </p>
                </div>
                <div className="reports_content_body_current">
                    <img src={Expenses} alt="income" />
                    <p>Current</p>
                    <p>
                        {/* 
                        //! DB Platzhalter wieviel Geld ausgegeben wurde
                        //TODO: placeholder = Platzhalter für die Datenbankabfrage
                        */}
                        +$<span>placeholder</span>
                    </p>
                </div>
            </div>

            <div className="reports_graph">
                <AreaChart
                    width={410}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#0f0"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#0f0"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#ff0000"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#ff0000"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorupv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#000"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#000"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Einnahmen"
                        stroke="#0f0"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Ausgabe"
                        stroke="#ff0000"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Saldo"
                        stroke="#000"
                        fillOpacity={1}
                        fill="url(#colorupv)"
                    />
                </AreaChart>
            </div>

            <div className="reports_table">
                <h2>Total Transactions</h2>
                {/* 
                //! Platzhalter Table DB
                //TODO: Datenbankabfrage für die Gesamttransaktionen
                */}
                {/* Table */}
            </div>
        </div>
    );
}
