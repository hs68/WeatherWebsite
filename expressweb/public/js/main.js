const submitbtn = document.getElementById('submitBtn');
document.getElementById('submitBtn').onclick = () => {
    console.log("hello");
}
const cityname = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const getinfo = async (event) => {
    // console.log("helloooo");
    // console.log("hello i am here");
    let cityval = cityname.value;
    getdate();
    // console.log(`cityname is ${cityval}`);
    if (cityval === "") {
        //console.log("i am here");
        city_name.innerText = "Enter a Valid City Name";
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=7eef9ff479be2b4760bebd6dfe95c0ce`;
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];
            // console.log(arr);
            temp.innerText = `${arr[0].main.temp} C`;
            //temp_status.innerText=arr[0].weather[0].main;
            city_name.innerText = `${arr[0].name}, ${arr[0].sys.country}`;
            const tempMood = arr[0].weather[0].main;
            console.log(tempMood);
            if (tempMood == 'Clear') {
                temp_status.innerHTML = "<i class='fas fa-sun fa-7x' style='color:#eccc68;'></i>";
            }
            else if (tempMood == 'Clouds' || tempMood=='Mist') {
                temp_status.innerHTML = "<i class='fas fa-cloud fa-7x' style='color:#f1f2f6;'></i>";
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain fa-7x' style='color:#f1f2f6;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun fa-7x' style='color:#eccc68;'></i>";

            }
            // console.log(arr[0].weather[0].main);
            // console.log(`${arr[0].name}, ${arr[0].sys.country}`);
        }
        catch (err) {
            // console.log(err);
            city_name.innerText = "Enter a Valid City Name";
        }

    }
}
// const getinfo=()=>{
//     //alert("hi");
//     alert("shubham bhai")
//     console.log("hello");
// }

submitbtn.addEventListener('click', getinfo);
const day = document.getElementById('day');
const month = document.getElementById('today_data');
daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var mont = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getdate = () => {
    let date = new Date();
    let da = date.getDay();
    day.innerText = daysInWeek[(da + 1) % 7];

    month.innerText = mont[date.getMonth()];
    // console.log(date.getDate());
}
