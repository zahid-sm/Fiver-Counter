const form_data = document.getElementById('form_data')
const show_time = document.getElementById('show_time')


//submit form data
form_data.onsubmit = (e) => {
    e.preventDefault();

   //get form data
    let form_Data = new FormData(e.target)
    let {date , time} = Object.fromEntries(form_Data.entries())
    
    //get timestamps
    let start_time = Date.now();
    let end_time = new Date(date +''+ time);
    let order_time = end_time.getTime() - start_time;


    console.log(time);


    



    //get Minite
    let minite = start_time /1000;
    //get Hour
    let hour =  minite /60 ;
    //get Day
    let day =  hour / 24 ;

   
    
}