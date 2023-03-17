import React from "react";
import { FaSearch, FaBus, FaHome, FaInfoCircle } from "react-icons/fa";
import { useState, useRef, useEffect, createContext } from "react";
import SearchBar from "./SearchBar";
import Bus from "./Bus";

function Map() {
  const [busLine, setBusLine] = useState(false);
  const [homeClick, setHomeClick] = useState(false);

  function gohome() {
    setHomeClick(true);
  }

  function gobus() {
    setBusLine(true);
  }

  return (
    <div>
      {!homeClick && !busLine ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <iframe
              title="UC Davis Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12023.14292712881!2d-121.74989339768725!3d38.538212149965034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5139d7e329a08c!2sUC%20Davis!5e0!3m2!1sen!2sus!4v1647583037002!5m2!1sen!2sus!maptype=satellite"
              width="800"
              height="600"
              style={{ border: "0", borderRadius: "10px" }}
            ></iframe>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                marginTop: "-100px",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FaHome size={30} />
              <button id="Home" onClick={gohome}>
                Home
              </button>
            </div>

            <div
              style={{
                marginTop: "-100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FaBus size={30} />
              <button id="BusButton" onClick={gobus}>
                Bus Line
              </button>
            </div>

            <div
              style={{
                marginTop: "-100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FaInfoCircle size={30} />
              <button>About Unitrans</button>
            </div>
          </div>
        </>
      ) : (
        <>
          {homeClick && <SearchBar />}
          {busLine && <Bus />}
        </>
      )}
    </div>
  );
}

export default Map;