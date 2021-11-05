$(document).ready( () => {

    const getInfoPostByID = (id) => {
        $.ajax({
            method: 'GET',
            url: `https://js-challenge-a0b1c-default-rtdb.firebaseio.com/${id}.json`,
            
            success: (response) =>{
                // success
                console.log(response)

                
                const postId= id;
                const postTitle= response.title;
                const postUrl= response.url;
                const postTags=  response.tags;
                const postLikes = response.likes;
                const protoDate = response.date;

                // createCard(postId,postTitle,postUrl,postTags,postLikes,protoDate);
            },
            error: (error) => {
                // callback para cuando hay un error
                console.log(error)
            },
            async: true,
        });
        
    }
    getInfoPostByID('-MnXMTky2hvq8C56e2WH')

});