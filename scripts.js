$("#first").click(() => {
    console.log("Yeah, you clicked me");
});

$("#second").click(() => {
    $('#first').text('Coronavirus outbreak!');
});

let i = 0;

$("#third").click(() => {
    if (i<1) {
        let colorVal = $("input").val();
        $("p").text("Input color is: " + colorVal);
        $("#third").css("background-color", colorVal);
    };
    i = i+1;
});