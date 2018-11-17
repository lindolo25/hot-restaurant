function pushReservation(event) 
{
    event.preventDefault();
    console.log("button Clicked");

    $.post("/api/reserve",{ "command": "on" }, printAPIResponse);
}

function printAPIResponse(response)
{
    console.log("the request completed.");
}