const country=document.getElementById('Card')

async function getcountry(){
    const url=await fetch("https://restcountries.com/v3.1/all")
    const res=await url.json()
    res.forEach(e => {
        showcountry(e)
    });
}
getcountry();

function showcountry(data){
    console.log(data)
    const ele=document.createElement("div")
    ele.setAttribute("class","cardstofetch")
    ele.innerHTML=
    `
    <div class="card" style="width: 18rem;">
    <img src="${data.flags.png}">
    <div>
    <h3 class="">Name:${data.name.official}</h3>
    <p>Capital:${data.capital}</p>
    <p>latlong:${data.latlng}</p>
    <p>region:${data.region}</p>
    </div>
    `   
    country.append(ele)
}