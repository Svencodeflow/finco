import React from "react";

import {
    Image,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../style/transactiontotal.css";
import Logo from "../../images/Logo.svg";
import profil_logo from "../../images/profil_logo.svg";
import Date from "../../images/date.png";
import Search from "../../images/Search.png";



function onlysearch() {
  return (
      <>
          <div>
              <div className="header">
                  <aside>
                      <Image src={Logo} alt="Logo" />
                  </aside>
                  <section>
                      <Image src={profil_logo} alt="profil_logo" />
                  </section>
              </div>

              <main>
               <div>
                      <div className="allbutton">
                          <h1> All Transaction</h1>
                          <div className="button">
                          <button className="seacabutton">
                          <img src={Date} alt="Date" />
                          </button>
                          <button className="seacabutton">
                          <img src={Search} alt="Search" />
                          </button>
                          </div>
              </div> 

                      </div>
              </main>
          </div>
      </>
  );
}

export default onlysearch;