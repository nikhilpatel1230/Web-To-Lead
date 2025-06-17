function submitHandler(){
    let inputDate = document.querySelector("inputDate");
    let outputDate = document.querySelector("outputDate");

    let formatedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formatedDate;
}