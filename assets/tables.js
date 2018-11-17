function getTables() 
{
    console.log("button Clicked");
    var queryURL = "/api/tables";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(printAPIResponse);
}

function printAPIResponse(response)
{
    console.log(response);
}