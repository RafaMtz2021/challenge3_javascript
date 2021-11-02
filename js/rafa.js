$(document).ready( ()=>{

    $('#createPost').click( () => {
        const title = $.trim($("#title").val());
        const body = $.trim($("#body").val());
        const url = $.trim($('#url').val());
        const protoTags = $.trim($("#tags").val());
        const tags = protoTags.split(',')
        const date_format = new Date();
        const date = date_format.toISOString().split('T')[0];
        const likes = Math.floor((Math.random() * (100000 + 1 -100)) + 100)

        console.log(title);
        console.log(body);
        console.log(url);
        console.log(tags);
        console.log(date);
        console.log(likes);

        $.ajax({
            method: 'POST',
            url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
            data: JSON.stringify({title, body, url,tags,date,likes}),
            
            success: (response) =>{
                // callback cuando la petición es exitosa
                console.log(response)
            } ,
            error: (error) => {
                // callback para cuando hay un error
                console.log(error)
            },
            async: true,
        })

    });























});
