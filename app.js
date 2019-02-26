$(document).ready(() =>{

    $("#main-form").on("submit", (e) =>{
        e.preventDefault();
        const student = {
            fName: $("#fName").val(),
            sName:$("sName").val(),
            cadre: $("#cadre").val()
        }
        console.log(student);
    })



});