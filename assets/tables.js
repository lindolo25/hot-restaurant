function getTables() 
{
    $.ajax({
        url: "/api/tables",
        method: "GET"
    })
    .then(printAPIResponse);
    //console.log("por aqui")
}

function printAPIResponse(response)
{
    for(var i = 0; i < response.length; i++)
    {
        var item =  $("<li>");
        item.addClass("list-group-item");
        item.append("<div>"+ response[i].Name +"</div>");
        item.append("<div>"+ response[i].Email +"</div>");
        item.append("<div>"+ response[i].Phone +"</div>");
        if(i < 5) $("#table-list").append(item);
        else $("#waiting-list").append(item);
        //console.log(item);
    }
}