$(document).ready(function () {
    var displayimages
    var searchVariable
    // var testings
    var sports = ['running', 'football', 'soccer', 'baseball', "hockey"]
    for (i = 0; i < sports.length; i++) {

        //creates buttons from array
        searchVariable = `#` + sports[i];
        console.log(searchVariable);
        //creates a new button for each object in the array
        var createButtons = $('<input/>').attr({
            type: 'button',
            id: searchVariable,
            value: searchVariable
        });

        // testings = `#` + searchVariable;
        // console.log(testings);

        //appends the new buttons to the div on the page
        $("#sportsdiv").append(createButtons);
    };


    $("#submit").on("click", function () {
        var inputText = $('#searchTextBox').val().trim();
        console.log(inputText);

        sports.push(inputText);
        // sports.push(createButtons)

        console.log(sports);
        $("#sportsdiv").attr({
            value: inputText
        });

        // creates new buttons
        var createButtons = $('<input/>').attr({
            type: 'button',
            id: inputText,
            value: inputText
        });
        $("#sportsdiv").append(createButtons)
        $('#searchTextBox').val(" ")

    });

    var buttonval = $("");

    //$(`#` + searchVariable).on("click", function () {

    //giphyurl = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + searchVariable.value + "";
    // giphyurl = " https://api.giphy.com/v1/gifs/search?api_key=WnI8FnWU9ICjRJwARWWZVGx415L5pgFO&q=" + searchVariable + "&limit=10&rating=g"

    // $.ajax({
    //     url: giphyurl,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);
    //     searchVariable = response.data.image_original_url;
    //     // console.log(response.data[i].images["480w_still"].url);
    //     searchVariable2 = response.data.image_mp4_url;
    //     searchVariable3 = response.data.fixed_height_small_url;
    //     console.log(searchVariable);
    //     console.log(searchVariable2);
    //     console.log(searchVariable3);
    //     var imageonPage = $("<img>")
    //     imageonPage.attr("src", searchVariable)


    //     searchVariable === true ? searchVariable2 : searchVariable


    // ******** See what you think about this part ********
    // Begining of change

    function gifDisplay(response) {
        // Emptying the images from previous click
        $('#giphyImages').empty();
        // For loop i 0-9 to display 10 images
        for (var i = 0; i < 10; i++) {
            // Displaying G rated images
            var Ratings = "g";
            // Still and animation images url
            var image = Ratings + '<img src= " ' + response.data[i].images.fixed_height_still.url +
                '" data-still=" ' + response.data[i].images.fixed_height_still.url +
                ' " data-animate=" ' + response.data[i].images.fixed_height.url +
                '" data-state="still" class="gifImage" style= "width:250px; height:250px">';
            // display the image

            image = '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">' + image + "</div>";
            $('#sportsdiv').append(image);
        };

        //checking for state of the image
        //stop or run the gif

        $('.gifImage').on('click', function () {
            var state = $(this).attr('data-state');
            // to run the gif
            if (state == 'still') {
                $(this).attr('src', $(this).attr("data-animate"));
                $(this).attr('data-state', 'animate');
            } else {
                // To stop the gif
                $(this).attr('src', $(this).attr("data-still"));
                $(this).attr('data-state', 'still');
            };
            

        });

            // if else statement
            //state==='still' ? $(this).attr('src', $(this).attr("data-animate")),
            //   $(this).attr('data-state', 'animate') : $(this).attr('src', $(this).attr("data-still")),
            //  $(this).attr('data-state', 'still');

        // End of change

        //$("#giphyImages").append(imageonPage)
    });
    });
//})

// var buttonValue = searchVariable.value

// $("")





// console.log(response.data[i].images["480w_still"].url);
// var searchVariable = response.data.image_original_url;

// displayimages = response.data[i].images["480w_still"].url;
// var imageonPage = $("<img>")
// imageonPage.attr("src", displayimages)

// $("#giphyImages").append(imageonPage)


//     })

// })
// Performs search based on click
// $("running").on("click", ".btn", function () {
//     var btnval = this.value
//     console.log(this.value);


//     // giphyurl = " https://api.giphy.com/v1/gifs/search?api_key=WnI8FnWU9ICjRJwARWWZVGx415L5pgFO&q=" + searchVariable + "&limit=10&rating=g"
//     giphyurl = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

//     $.ajax({
//         url: giphyurl,
//         method: "GET"

//     }).then(function (response) {
//         console.log(response);

//         // console.log(response.data[i].images["480w_still"].url);
//         var searchVariable = response.data.image_original_url;

//         displayimages = response.data[i].images["480w_still"].url;
//         var imageonPage = $("<img>")
//         imageonPage.attr("src", displayimages)

//         $("#giphyImages").append(imageonPage)

//     })

// })