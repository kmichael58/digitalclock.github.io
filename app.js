function clock(){
    var monthnames = ["junuary", "February", "March", "April", "May", "June", "July", "Augast", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "tuesday", "Wednesday", "Thursday", "Friday", "Satuday"];

    var today = new Date();

    document.getElementById("Date").innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + " " + monthnames[today.getMonth()] + " " + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? "AM" : "PM";

    h = h<10 ? "0" + h: h;
    m = m<10 ? "0" + m: m;
    s = s<10 ? "0" + s: s;

    document.getElementById("hours").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;


}var inter = setInterval(clock,400);