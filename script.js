function submitHandler(){
    let inputDate = document.querySelector("inputDate");
    let outputDate = document.querySelector("outputDate");

    let formatedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formatedDate;
}
function timestamp() { var response = document.getElementById("g-recaptcha-response");
 if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());
 document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 