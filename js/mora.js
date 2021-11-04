$(document).ready( () => {

    const displayCards = () =>{
        
        $.ajax({
            method: 'GET',
            url: 'https://practica01-2de44-default-rtdb.firebaseio.com/.json',
            
            success: (response) =>{

                // callback cuando la petición es exitosa
                console.log(response)
                //const person = JSON.parse(response)
                
                const newArray = Object.entries(response);
                console.log(newArray);

                newArray.forEach(item=>{
                    const square = document.createElement('div');
                    square.className = 'postIt m-3 col-4';
                    square.id = item[0]
                    square.textContent = `${item[1].name} ${item[1].lastName} ${item[1].age}`;
                    $('#draw').append(square);
            
                })
            },
            error: (error) => {
                // callback para cuando hay un error
                console.log(error)
            },
            async: true,
        })
        
    }
    displayCards();

});