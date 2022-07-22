const form_data = document.getElementById('form_data')
const show_time = document.getElementById('show_time')


//submit form data
form_data.onsubmit = (e) => {
    e.preventDefault();

   let count = setInterval( () => {
    //get form data
    let form_Data = new FormData(e.target)
    let {date , time} = Object.fromEntries(form_Data.entries())
    
    //get timestamps
    const start_time = Date.now();
    const end_time = new Date(date + ' ' + time);
    const order_time = Math.floor(Math.abs(end_time.getTime() - start_time));




    //get sec
    let total_sec = Math.floor(order_time /1000);
    // //get minite
    let total_minite = Math.floor(total_sec /60);
    // //get Hour
    let total_hour = Math.floor(total_minite /60);
    //Get Day
    let total_dey = Math.floor(total_hour /24);


   
    let hours = total_hour - (total_dey * 24 );
    let min  = total_minite - (total_dey * 24 * 60) - (hours * 60);
    let sec = total_sec - (total_dey * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);

    if (total_sec <= 0) {
        clearInterval(count)
    }

    show_time.innerHTML = `<h3> ${total_dey} Days - ${hours} Hours - ${min} Min - ${sec} Sec</h3>`


   },1000);
    
}
