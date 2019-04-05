$(document).ready(function () {
    var displayimages
    var searchVariable
    var testings
    var sports = ['running', 'football', 'soccer', 'baseball', "hockey"]
    for (i = 0; i < sports.length; i++) {

        //creates buttons from array
        searchVariable = sports[i]
        // console.log(searchVariable);
        //creates a new button for each object in the array
        var createButtons = $('<input/>').attr({
            type: 'button',
            id: searchVariable,
            value: searchVariable,
            class: "button",
        });


        $("#sportsdiv").append(createButtons)
    }


    $("#submit").on("click", function () {
        var inputText = $('#searchTextBox').val().trim()
        console.log(inputText);

        sports.push(inputText)
        // sports.push(createButtons)

        console.log(sports);
        $("#sportsdiv").attr({
            value: inputText
        })

        // creates new buttons
        var createButtons = $('<input/>').attr({
            type: 'button',
            id: inputText,
            value: inputText,
            class: "button"
        });
        $("#sportsdiv").append(createButtons)
        $('#searchTextBox').val(" ")

    })
    $(document).on("click", ".button", function () {

        var test2 = $(this).attr("id")

        giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + test2 + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";
        // giphyurl = " https://api.giphy.com/v1/gifs/search?api_key=WnI8FnWU9ICjRJwARWWZVGx415L5pgFO&q=" + searchVariable + "&limit=10&rating=g"

        $.ajax({
            url: giphyurl,
            method: "GET"
        }).then(function (response) {

                for (j = 0; j <= 10; j++) {


                    var image = '<img src= " ' + response.data[j].images.fixed_height_still.url +
                        '" data-still=" ' + response.data[j].images.fixed_height_still.url +
                        ' " data-animate=" ' + response.data[j].images.fixed_height.url +

                        '" data-state="still" class="gifImage" style= "width:250px; height:250px">';
                    // display the image




                    image = '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">' + image + "</div>";
                    $('#sportsdiv').append(image);

                }
            }

        )
    })

    $(document).on("click", "img", function (event) {

        console.log(event);

        var data = event.target.dataset

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
    })

})