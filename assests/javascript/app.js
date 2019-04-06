$(document).ready(function () {
    var displayimages
    var searchVariable
    var testings
    var sports = ['UGA', 'Georgia State', 'Georgia Southern', 'Penn State', "Florida State", "Auburn", "Alabama", "Missispi state"]
    var inputText
    var data
    // var numberofRowsButtons = $("<tr>").va
    // var tableBody = ("<table>")

    // function createButtonTable() {
    //     var newtable = $("<input>").attr({
    //         type: "table",
    //         id: "newTable"
    //     })

    //     $("testTable").append(newtable)
    // }

    // createButtonTable()

    for (i = 0; i < sports.length; i++) {

        searchVariable = sports[i]

        var createButtons = $('<input/>').attr({
            type: 'button',
            id: searchVariable,
            value: searchVariable,
            class: "button button-style  btn btn-primary"
        });


        $("#sportsdiv").append(createButtons)
    }

    $("#submit").on("click", function () {
        inputText = $('#searchTextBox').val().trim()
        console.log(inputText);

        sports.push(inputText)
        // sports.push(createButtons)

        console.log(sports);
        $("#sportsdiv").attr({
            value: inputText
        })

        // creates new buttons
        createDynamicButton()

    })

    function createDynamicButton() {
        var createButtons = $('<input/>').attr({
            type: 'button',
            id: inputText,
            value: inputText,
            class: "button button-style  btn btn-primary"
        });
        $("#sportsdiv").append(createButtons)
        $('#searchTextBox').val(" ")

    }
    $(document).on("click", ".button", function () {

        var test2 = $(this).attr("id")

        giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + test2 + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";
        // giphyurl = " https://api.giphy.com/v1/gifs/search?api_key=WnI8FnWU9ICjRJwARWWZVGx415L5pgFO&q=" + searchVariable + "&limit=10"

        $.ajax({
            url: giphyurl,
            method: "GET"
        }).then(function (response) {

                for (j = 0; j <= 10; j++) {

                    var image = '<img src= " ' + response.data[j].images.fixed_height_still.url +
                        '" data-still=" ' + response.data[j].images.fixed_height_still.url +
                        ' " data-animate=" ' + response.data[j].images.fixed_height.url +

                        '" data-state="still" class="gifImage" style= "width:250px; height:250px">';

                    // image = '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">' + image + "</div>";
                    $('#sportsdiv').append(image);

                }
            }

        )
    })

    $(document).on("click", "img", function (event) {

        console.log(event);

        data = event.target.dataset

        flipImage()
    })

    function flipImage() {
        var state = data.state;
        // to run the gif
        if (state == 'still') {
            event.target.src = data.animate
            data.state = "animate"
        } else {
            // To stop the gif
            event.target.src = data.still
            data.state = "still"
        };
    }

    $(document).on("click", ".reset", function () {
        window.location.reload();
    })
})