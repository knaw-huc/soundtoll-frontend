import React from "react";
import boot from "../../assets/images/koftegel.jpg";

function HomeEN() {
    return (
      <div>
          <h2>Welcome to Sound Toll Registers Online (STRO)</h2>
          <div className="hcBlockText">
              <div className="hcHomeText">STRO is the electronic database of the complete Sound Toll Registers, 1497-1857.</div>
              <div className="hcHomeText">
                  STRO has been made by:<br/>
                  -	the University of Groningen<br/>
                  -	Tresoar, Frisian Historical and Literary Centre at Leeuwarden.
              </div>
              <p>
                  <img src={boot} alt="Ship"/>
              </p>
              <p>
                  The Sound Toll Registers (STR) are the accounts of the toll which the kings of Denmark levied on the shipping through the Sound, the strait which is the main connection between the North Sea and the Baltic Sea. They have been preserved (with gaps in the first decades) for the period from 1497 to 1857, when the toll was abolished. From 1574 on, the series is almost complete.
                  The STR are being kept by the Danish National Archives (Rigsarkivet) in Copenhagen.
              </p>

              <p>
                  The STR contain data on 1.8 million passages through the Sound. The officials of the tollhouse at Elsinore recorded in principle the following data of each passage:<br/>
                  - the date<br/>
                  - the name of the shipmaster<br/>
                  - the place of residence of the shipmaster<br/>
                  - the port of departure<br/>
                  - the port of destination (from the mid-1660s)<br/>
                  - the composition of the cargo <br/>
                  - the toll.
              </p>
              <p>
                  These core data were entered in STRO. The progressive choices we made during that process, are set down in the data entry instructions we wrote for the volunteers.
              </p>
              <div className="hcHomeText hcClickable" onClick={() => {window.scroll(0,0); window.location.href = "#about";}}>More about STRO</div>
          </div>
      </div>
    );
}

export default HomeEN;