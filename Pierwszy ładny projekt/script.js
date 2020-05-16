function timer(){
    const today = new Date();

    var day = today.getDate();
    if(day<10) day="0"+day;
    var month = today.getMonth()+1;
    if(month<10) month="0"+month;
    var year = today.getFullYear();

    var hour = today.getHours();
    if(hour<10) hour="0"+hour;
    var minute = today.getMinutes();
    if(minute<10) minute="0"+minute;
    var second = today.getSeconds();
    if(second<10) second="0"+second;

    document.getElementById("watch").innerHTML = day+"/"+month+"/"+year+"|"+hour+":"+minute+":"+second;

    setTimeout("timer()",1000);
}

const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')
const error2Element = document.getElementById('error2')

form.addEventListener('submit', (e) =>{
    let messages = []
    if(name.value === ''|| name.value == null) {
        messages.push('Name is required')
        name.style.borderColor = "red";
    }
    if(name.value.length <= 4){
        messages.push('Name need to have more than 4')
        name.style.borderColor = "red";
    }else{
        messages.push('Name correct')
        name.style.borderColor = "green";
    }
    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
        
    }return false;

    
})

form.addEventListener('submit', (e2) =>{
    let messages = []
    if(password.value.length <= 6){
        messages.push('Password need to have more than 6')
        password.style.borderColor = "red";
    }else{
        messages.push('Password correct')
        password.style.borderColor = "green";
    }
    if(password.value === 'password'){
        messages.push('Password cant be password')
        password.style.borderColor = "red";
    }

    if(messages.length > 0) {
        e2.preventDefault()
        error2Element.innerText = messages.join(',')
        }else {
        const name = document.getElementById('name').value;
        alert("Witamy " + name);
    }return false;

})
