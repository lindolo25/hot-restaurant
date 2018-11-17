function pushReservation(event) 
{
    event.preventDefault();
    $("#error-message").empty();
    var newRes = {
        name: $("#user-name").val().trim(),
        phone: $("#user-phone").val().trim(),
        email: $("#user-email").val().trim(),
        id: $("#user-id").val().trim()
    }

    if(newRes.name && newRes.phone && newRes.email && newRes.id)
    {
        $.post("/api/reserve", newRes, printAPIResponse);
    }
    else
    {
        console.log("Error with the data.")
        message = $("<div>").attr("role", "alert");
        message.addClass("alert alert-danger");
        message.text("The form has errors, please fix them and submit again.");
        message.appendTo("#error-message");
    }  
}

function printAPIResponse(response)
{
    //console.log("the request completed.");
    message = $("<div>").attr("role", "alert");
    
    if(response) 
    {
        message.addClass("alert alert-success");
        message.text("Registration completed, your table will be ready at arrival.");
    }
    else 
    {
        message.addClass("alert alert-warning");
        message.text("Tables are currently full, you've been added to the waiting list.");
    }
    message.appendTo("#error-message");
}