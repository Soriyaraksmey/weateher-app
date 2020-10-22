
const Generatedata = (weather) =>{
             const { temperature, summary,windSpeed } = weather.currently;
             const {timezone } = weather;
             const {icon} = weather.hourly;
             let C = Math.floor((temperature - 32) * (5 / 9));
    const objToday = new Date();
    const weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    const Months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    const day = objToday.getDay();
    const month = objToday.getMonth();
    const year = objToday.getFullYear();
    const date = `${weekday[day]} ${day} ${Months[month]} ${year}`;
         
   const data = {
        temperature: C,
        summary: summary,
        windSpeed: windSpeed,
        timezone: timezone,
        date: date,
        weather: icon,
    }

    return data;
}
export default Generatedata;