import React from "react";
import boot from "../../assets/images/koftegel.jpg";

function HomeNL() {
    return (
        <div>
            <h2>Welkom bij Sonttolregisters Online (STRO)</h2>
            <div className="hcBlockText">
                <div className="hcHomeText">STRO is de elektronische database van de complete Sonttolregisters, 1497-1857.</div>
                <div className="hcHomeText">
                    STRO is gemaakt door:<br/>
                    - de Rijksuniversiteit Groningen<br/>
                    - Tresoar, Fries Historisch en Letterkundig Centrum te Leeuwarden.
                </div>
                <p>
                    De Sonttolregisters (STR) zijn de administratie van de tol die de koning van Denemarken hief over de scheepvaart door de Sont, de zeestraat die de belangrijkste verbinding vormt tussen de Noordzee en de Oostzee. Zij zijn (met hiaten in de eerste decennia) bewaard gebleven voor de periode 1497 tot 1857, toen de tol werd opgeheven. Vanaf 1574 is de serie vrijwel compleet.
                </p>

                <p>
                    De STR worden bewaard in het Deense Nationaal Archief (Rigsarkivet) in Kopenhagen.
                </p>

                <p>
                    De STR bevatten gegevens van 1,8 miljoen doorvaarten door de Sont. Van elke doorvaart noteerden de ambtenaren van de Tolkamer in Helsing&oslash;r in principe de volgende gegevens:<br/>
                    de datum<br/>
                    de naam van de schipper<br/>
                    de woonplaats van de schipper<br/>
                    de haven van vertrek <br/>
                    de haven van bestemming (vanaf het midden van de jaren 1660)<br/>
                    de samenstelling van de lading <br/>
                    de tol. <br/>
                </p>

                <p>
                    Deze kerngegevens zijn in STRO ingevoerd. De voortschrijdende keuzes die wij daarbij hebben gemaakt, zijn neergelegd in de invoerinstructies die wij voor de vrijwilligers opstelden.
                </p>

                <div className="hcHomeText hcClickable">Meer informatie over STRO</div>
            </div>
        </div>
    );
}

export default HomeNL;