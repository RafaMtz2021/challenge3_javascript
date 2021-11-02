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

        $.ajax({
            method: 'POST',
            url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
            data: JSON.stringify({title, body, url,tags,date,likes}),
            
            success: (response) =>{
                console.log(response)
            } ,
            error: (error) => {
                console.log(error)
            },
            async: true,
        })

    });























});
