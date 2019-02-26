$(document).ready(() =>{

    $("#main-form").on("submit", (e) =>{
        
        //prevent submit default behaviour
        e.preventDefault();

        //creating student obj from accepted data
        const student = {
            fName: $("#fName").val(),
            sName:$("sName").val(),
            cadre: $("#cadre").val()
        };

        //making AJAx POST call
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/students",
            data: student,
            dataType: "json",
            encode: true
        })
        .done(() =>{
            console.log("Data posted successfully")
        })
        .fail(() =>{
            console.log("Error postion data")
        });

        //reset form
        $("input[type='text']").val("");
        $('select option[value="Junior"]').attr("selected",true);

        // console.log(student);
    });



});