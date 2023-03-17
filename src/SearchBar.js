import React from "react";
import { FaSearch, FaMapMarkerAlt, FaBus, FaInfoCircle } from "react-icons/fa";
import { useState, useRef, useEffect, createContext } from "react";
import Bus from "./Bus";
import img from "./image.png";
import Map from "./Map";

function SearchBar() {
  const [mapClick, setMapClick] = useState(false);
  const [bus, setBus] = useState(false);
  const [unitran, setUnitran] = useState(false);


  function gotomap() {
    setMapClick(true);
  }
  function gotobus() {
    setBus(true);
  }
  function gotouni() {
    setUnitran(true);
  }

  return (
    <div>
      {!mapClick && !bus ? (
        <>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <div style={{ position: "relative", marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Enter your destination"
                style={{
                  width: "400px",
                  height: "30px",
                  fontSize: "16px",
                  paddingLeft: "35px",
                }}
              />
              <FaSearch
                style={{ position: "absolute", left: "10px", top: "7px" }}
              />
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "#eee",
                width: "500px",
                height: "20px",
                textAlign: "center",
                lineHeight: "20px",
              }}
            >
              Next P Line arrives in 8 minutes
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "#eee",
                width: "500px",
                height: "20px",
                textAlign: "center",
                lineHeight: "20px",
              }}
            >
              Next K Line arrives in 5 minutes
            </div>
            <img
              src={img}
              alt="Bus"
              style={{ marginTop: "30px", maxWidth: "100%", height: "auto" }}
            />
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaMapMarkerAlt size={30} />
                <button id="MainPageMapButton" onClick={gotomap}>
                  Map
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaBus size={30} />
                <button id="BusButton" onClick={gotobus}>
                  Bus Line
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaInfoCircle size={30} />
                <button id="AboutUnitrans" >
                  About Unitrans
                </button>              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <>{bus && <Bus />}</>
          <> {mapClick && <Map />} </>
        </>
      )}
    </div>
  );
}
export default SearchBar;
