var Aufgabe7;
(function (Aufgabe7) {
    console.log("Einwohneranzahl der EU.");
    //Einwohnergesamtzahl 2022
    const Deutschland = 83.13;
    const Frankreich = 67.50;
    const Italien = 59.07;
    const Schweden = 10.42;
    const Europa = 447.70;
    function Jahr22(land22) {
        console.log("Die Einwohneranzahl betrug im Jahr 2022 schätzungsweise " + land22 + " Mio .");
    }
    Jahr22(Deutschland);
    Jahr22(Frankreich);
    Jahr22(Italien);
    Jahr22(Schweden);
    Jahr22(Europa);
    //Einwohnergesamtanzahl 2008
    const Deutschland08 = 82.11;
    const Frankreich08 = 64.37;
    const Italien08 = 58.83;
    const Schweden08 = 9.22;
    const Europa08 = 440.66;
    function Jahr08(land08) {
        console.log("Die Einwohneranzahl betrug im Jahr 2008 schätzungsweise " + land08 + " Mio .");
    }
    Jahr08(Deutschland08);
    Jahr08(Frankreich08);
    Jahr08(Italien08);
    Jahr08(Schweden08);
    Jahr08(Europa08);
    function Differenz(land, land08) {
        let Differenz = land - land08;
        return Differenz;
    }
    //Wachstum der Länder von 2008 bis 2022
    function wachstum(land, land08) {
        let Wachstum = ((land - land08) / land08) * 100;
        console.log("Der Wachstum betrug " + Wachstum + " %");
        return Wachstum;
    }
    wachstum(Deutschland, Deutschland08);
    wachstum(Frankreich, Frankreich08);
    wachstum(Italien, Italien08);
    wachstum(Schweden, Schweden08);
    wachstum(Europa, Europa08);
    //Anteil der Länder an der EU 2022
    //Deutschland
    function Anteil(land) {
        let Anteil = (land * 100) / Europa;
        return Anteil;
        console.log("Relativer Anteil zur Gesamtzahl der EU:" + Anteil);
    }
    Anteil(Deutschland);
    Anteil(Frankreich);
    Anteil(Italien);
    Anteil(Schweden);
    function country(Land, Anzahlbew, Anzahlprozent, Wachstumzahl, Wachstumprozent) {
        document.getElementById("headline").innerHTML = "Einwohnerzahl von " + Land + "";
        document.getElementById("Gesamtzahl").innerHTML = "<h2>" + Anzahlbew.toFixed(2) + " Mio </h2> Gesamtzahl Einwohnerinnen und Einwohner in " + Land + " in 2022";
        document.getElementById("Anzahlprozent").innerHTML = Anzahlprozent.toFixed(2) + "%";
        document.getElementById("Wachstumzahl").innerHTML = Wachstumzahl.toFixed(2) + " Mio";
        document.getElementById("Wachstumprozent").innerHTML = Wachstumprozent.toFixed(2) + "%";
        document.querySelector(".chart").setAttribute('style', 'height:' + (Anzahlprozent).toString() + '%;');
    }
    document.querySelector(".germany").addEventListener('click', function () {
        country("Deutschland", Deutschland, Anteil(Deutschland), Differenz(Deutschland, Deutschland08), wachstum(Deutschland, Deutschland08));
    });
    document.querySelector(".france").addEventListener('click', function () {
        country("Frankreich", Frankreich, Anteil(Frankreich), Differenz(Frankreich, Frankreich08), wachstum(Frankreich, Frankreich08));
    });
    document.querySelector(".italy").addEventListener('click', function () {
        country("Italien", Italien, Anteil(Italien), Differenz(Italien, Italien08), wachstum(Italien, Italien08));
    });
    document.querySelector(".sweden").addEventListener('click', function () {
        country("Schweden", Schweden, Anteil(Schweden), Differenz(Schweden, Schweden08), wachstum(Schweden, Schweden08));
    });
    document.querySelector(".stars").addEventListener('click', function () {
        country("Europa", Europa, Anteil(Europa), Differenz(Europa, Europa08), wachstum(Europa, Europa08));
    });
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=main1.js.map