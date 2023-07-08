import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../images/Logo.svg";
import profil_logo from "../../images/profil_logo.svg";
import "../../style/accset.css";
import axios from "axios";

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState({});

    const handleSelectFile = (e) => setFile(e.target.files[0]);
    const handleUpload = async () => {
        try {
            setLoading(true);
            const data = new FormData();
            data.append("avatar", file);
            const res = await axios.post("/api/upload/avatar", data);
            setRes(res.data);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="accset">
            <div className="accset_logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="accset_text">
                <h2>Setup your Account</h2>
            </div>

            <div className="accset_profil_img">
                <div className="accset_profil_text">
                    <h4>Profil picture</h4>
                </div>
            </div>
            <div className="accset_profil_button">
                <label htmlFor="file">
                    {" "}
                    <img
                        src={profil_logo}
                        alt="logo"
                    />
                </label>
                {file && <center>Selected file: {file.name}</center>}
                <input
                    id="file"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleSelectFile}
                    multiple={false}
                />
                <code>
                    {Object.keys(res).length > 0
                        ? Object.keys(res).map((key) => (
                            <p className="" key={key}>
                                <span>{key}:</span>
                                <span>{typeof res[key] === "object" ? "object" : res[key]}</span>
                            </p>
                        )) : null}
                    console.log({res.secure_url});
                </code>
                {res && <img src={res.secure_url} />}
                {file && (
                    <>
                        <div className="accset_btn">
                            <button onClick={handleUpload}>
                                Upload Avatar
                            </button>
                            <div>
                                <center>{loading
                                    ? "uploading..." : "uploading to profile"}
                                </center>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="accset_form">
                <form>
                    <div className="accset_form_input">
                        <input
                            type="number"
                            id="c_number"
                            required
                            placeholder="Card Number"
                        />
                    </div>
                </form>
            </div>

        </div>
    );
}
