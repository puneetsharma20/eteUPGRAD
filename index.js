

function covidSearch(){
    var country=document.getElementById("f").value;
    var startDate=document.getElementById("g").value;
    var endDate=document.getElementById("h").value;
    const url=`https://api.covid19api.com/country/${country}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`;
    fetch(url).then((response) => {
        return response.json();
    })
    .then(data => {
        var num=data.length;
        var confirmedCases= (data[num - 1].Confirmed);
        var active=(data[num-1].Active);
        var death=(data[num-1].Deaths);
        console.log(confirmedCases + " " + active + " " + death);

        document.getElementById("z").innerHTML+="<p class=\"para\">Confirmed Cases: " + confirmedCases +
          "</p><p class=\"para\">Active Cases: " + active + "</p><p class=\"para\">Death Cases:" + death +"</p>"
    });
}