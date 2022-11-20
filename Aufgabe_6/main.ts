console.log("Einwohneranzahl der EU.")

//Einwohnergesamtzahl 2022
const Deutschland = 83.13 ;
const Frankreich = 67.50;
const Italien = 59.07;
const Schweden = 10.42;
const Europa = 447.70;

console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2022 schätzungsweise "+ Deutschland +" Mio .")
console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2022 schätzungsweise "+ Frankreich +" Mio .")
console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2022 schätzungsweise "+ Italien +" Mio .")
console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2022 schätzungsweise "+ Schweden +" Mio .")
console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2022 schätzungsweise "+ Europa +" Mio.")

//Einwohnergesamtanzahl 2008
const Deutschland08 = 82.11 ;
const Frankreich08 = 64.37;
const Italien08 = 58.83;
const Schweden08 = 9.22;
const Europa08 = 440.66;

console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2008 schätzungsweise "+ Deutschland08 +" Mio .")
console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2008 schätzungsweise "+ Frankreich08 +" Mio .")
console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2008 schätzungsweise "+ Italien08 +" Mio .")
console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2008 schätzungsweise "+ Schweden08 +" Mio .")
console.log("Die Einwohner Zahl von Deutschand betrug im Jahr 2008 schätzungsweise "+ Europa08 +" Mio .")

//Wachstum der Länder von 2008 bis 2022
//Deutschland
const DifferenzDT = Deutschland - Deutschland08
const WachstumDT = ( DifferenzDT/Deutschland08)*100
console.log("Der Wachstum von Deutschland betrug "+WachstumDT+" %")
//Frankreich
const DifferenzFR = Frankreich - Frankreich08
const WachstumFR = ( DifferenzFR/Frankreich08)*100
console.log("Der Wachstum von Frankreich betrug "+WachstumFR+" %")
//Italien
const DifferenzIT = Italien - Italien08
const WachstumIT = ( DifferenzIT/Italien08)*100
console.log("Der Wachstum von Italien betrug "+WachstumIT+" %")
//Schweden
const DifferenzSC = Schweden - Schweden08
const WachstumSC = ( DifferenzSC/Schweden08)*100
console.log("Der Wachstum von Schweden betrug "+WachstumSC+" %")
//Wachstum EU
const DifferenzEU = Europa - Europa08
const WachstumEU = ( DifferenzEU/Europa08)*100
console.log("Der Wachstum der EU betrug "+WachstumEU+" %")

//Anteil der Länder an der EU 2022
//Deutschland
const AnteilDT = (Deutschland*100)/Europa
console.log("Deutschlands Einwohner sind "+AnteilDT+" % der Einwohner der Europäischen Union")
//Frankreich
const AnteilFR = (Frankreich*100)/Europa
console.log("FRankreichs Einwohner sind "+AnteilFR+" % der Einwohner der Europäischen Union")
//Italien
const AnteilIT = (Italien*100)/Europa
console.log("Italiens Einwohner sind "+AnteilIT+" % der Einwohner der Europäischen Union")
//Schweden
const AnteilSC = (Schweden*100)/Europa
console.log("Schwedens Einwohner sind "+AnteilSC+" % der Einwohner der Europäischen Union")
