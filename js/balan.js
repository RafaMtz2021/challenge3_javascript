const searchBar = $(".form-control_bar");
const searchValue = searchBar.val();
console.log(searchValue);

const searchButton = $(".btn-sucess");
console.log(searchButton);




searchButton.click(event => {
    event.preventDefault()
    console.log(searchValue)
})

// get posts and make search

// const xhr = jqXHR;

let xhr;

const getResponse = () => {
    $.ajax({
        method: 'GET',
        url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
        success: (response) => {
            let xhr = Object.entries(response);
            console.log(xhr);
            Object.entries(xhr)
            console.log(xhr);
        },
        error: (error) => {
            console.log(error)
        },
        async: true,
    })
}

getResponse()



