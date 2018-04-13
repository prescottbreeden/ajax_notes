$(document).ready(function(){
    console.log("Power Overwhelming...")

    //cross-off to-dos
    $(".post_it_note").on("click", "h2", function(){
        $(this).toggleClass("completed");
    });

    //click on trash icon to delete note
    $(".right").on("click", ".top", function(event){
        $(this).fadeOut('fast', function(){
            $(this).parent().remove();
        })
        //$("h2")todoText.remove()
    });

    //add new note
    $("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $(".right").append(`
            <div class="container slide">
                <form action="AddNote" method="POST">
                    <div class="top">
                        <h1><span><i class="far fa-trash-alt"></i></span>${todoText} <i class="fa fa-plus"></i></h1>
                        <input type="hidden" name="title" value="${todoText}">
                    </div>
                    <div class="bottom">
                        <button id="add_description" class="add_description">Add Description</button>
                    </div>
                </form>
            </div>
        `);
        $(".post_it_note").append(`
        <h2 id="${todoText}">${todoText}</h2>
        `)
    }
    });

    //click add description to toggle text area
    $(".right").on("click", "#add_description", function(event){
            $(this).parent().html(`
                <textarea name="description" cols="50" rows="5"></textarea>
                <button class="add_description" type="submit">Submit</button>
            `)
        })

    $(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
    });


})



   //click on trash icon to delete li
//    $("ul").on("click", "span", function(event){
//     $(this).parent().fadeOut(500, function(){
//         $(this).remove();
//     });
//     event.stopPropagation();
//     });