import React from "react";
import SearchBar from "./SearchBar";
import "./Bus.css";
import Map from "./Map";
import { useState, useRef, useEffect, createContext } from "react";
import { FaSearch, FaMapMarkerAlt, FaHome, FaInfoCircle } from "react-icons/fa";

function Bus() {
  const [busLine, setBusLine] = useState(true);
  const [homeClick, setHomeClick] = useState(false);
  const [mapClick, setMapClick] = useState(false);

  function GoHome() {
    setHomeClick(true);
  }

  function gotobusline() {
    setBusLine(true);
  }

  function gotofavorite() {
    setBusLine(false);
  }

  function gomap() {
    setMapClick(true);
  }

  return (
    <div id="mapPage">
      {!homeClick && !mapClick ? (
        <>
          <div id="buttons">
            <button className="commonButton" onClick={gotobusline}>
              Bus Line
            </button>
            <button className="commonButton" onClick={gotofavorite}>
              Favorite
            </button>
          </div>
          {busLine ? (
            <>
              <div className="element" id="Ele1">
                <p className="MapText" id="Bus1">
                  <div id="circleA">A</div>
                  <p className="lightText">Silo</p>
                  Amtrak/5th/Alhambra
                </p>
              </div>
              <div className="element" id="Ele2">
                <p className="MapText" id="Bus2">
                  <div id="circleA">B</div>
                  <p className="lightText">Memorial Union</p>
                  Sycamore/Drake
                </p>
              </div>
              <div className="element" id="Ele3">
                <p className="MapText" id="Bus3">
                  <div id="circleA">C</div>
                  <p className="lightText">Silo</p>
                  Sycamore/Wake Forest
                </p>
              </div>
              <div className="element" id="Ele4">
                <p className="MapText" id="Bus4">
                  <div id="circleA">D</div>
                  <p className="lightText">Silo</p>
                  Lake/Arlington
                </p>
              </div>
              <div className="element" id="Ele5">
                <p className="MapText" id="Bus5">
                  <div id="circleA">E</div>
                  <p className="lightText">Memorial Union</p>
                  Downtown/F St/J St
                </p>
              </div>
              <div className="element" id="Ele6">
                <p className="MapText" id="Bus6">
                  <div id="circleA">F</div>
                  <p className="lightText">Memorial Union</p>
                  Oak/Anderson/F St
                </p>
              </div>
              <div className="element" id="Ele7">
                <p className="MapText" id="Bus7">
                  <div id="circleA">G</div>
                  <p className="lightText">Memorial Union</p>
                  Anderson/Alvardo/N Sycamore
                </p>
              </div>
              <div className="element" id="Ele8">
                <p className="MapText" id="Bus8">
                  <div id="circleA">H</div>
                  <p className="lightText">Silo</p>
                  Anderson/Alvardo/N Sycamore
                </p>
              </div>
              <div className="element" id="Ele9">
                <p className="MapText" id="Bus9">
                  <div id="circleA">I</div>
                  <p className="lightText">Memorial Union</p>
                  Lake/Arlington/Arthur
                </p>
              </div>
              <div className="element" id="Ele10">
                <p className="MapText" id="Bus10">
                  <div id="circleA">J</div>
                  <p className="lightText">Silo</p>E 8th/Pole Line/Moore/Loyola
                </p>
              </div>
              <div className="element" id="Ele11">
                <p className="MapText" id="Bus11">
                  <div id="circleA">K</div>
                  <p className="lightText">Memorial Union</p>B St/Cowell/Drew
                </p>
              </div>
            </>
          ) : (
            <div>
              <div className="editButton">
                <button id="EditFav" className="element">
                  <p id="buttonText">Edit +</p>
                </button>
              </div>
              <div className="element" id="Ele1">
                <p className="MapText" id="Bus1">
                  <div id="circleA">K</div>
                  <p className="lightText">Memorial Union</p>B St/Cowell/Drew
                </p>
              </div>
              <div className="element" id="Ele2">
                <p className="MapText" id="Bus2">
                  <div id="circleA">J</div>
                  <p className="lightText">Silo</p>E 8th/Pole Line/Moore/Loyola
                </p>
              </div>
            </div>
          )}

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
                marginTop: "100px",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FaMapMarkerAlt size={30} />
              <button id="MainPageMapButton" onClick={gomap}>
                Map
              </button>
            </div>
            <div
              style={{
                marginTop: "100px",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FaHome size={30} />
              <button id="Home" onClick={GoHome}>
                Home
              </button>
            </div>
            <div
              style={{
                marginTop: "100px",

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
          {mapClick && <Map />}
          {homeClick && <SearchBar />}
        </>
      )}
    </div>
  );
}

export default Bus;