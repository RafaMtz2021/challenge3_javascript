$(document).ready(() => {
    // identifying search-bar (input-form)

// next line defines object where string is typed
const searchBar = $(".form-control_bar");
// next line is to get the string typed
const searchValue = searchBar.val();
console.log(searchValue);


//identifying search.button (button-object)
const searchButton = $(".icon-container");
// console.log(searchButton);


// next two lines are for changing search page results of search
// const searchResultsNotif = $(".txtNotif");
// console.log(searchResultsNotif); 


//adding listener to button
// searchButton.click(event => {
//     event.preventDefault()
//     console.log(searchValue)
// })

// regular expression ready!
// let re1 = /`${searchValue}`/gi

// console.log(re1)
let inputRegExp = new RegExp(searchValue, 'gi');    // this works good!
console.log(inputRegExp)

// let re3 = /adasdfas/gi
// console.log(re3, typeof(r2))

// test array for testing


//function for fix response to a new form
// this function works well!
const getPostArrayStructure = (array) => {
    const postArrayStructure = [];
    array.forEach((post) => {
        postArray = [];
        postArray.push(post[0], post[1]["body"]);
        post[1]["tags"].forEach((tag) => postArray.push(tag))
        postArray.push(post[1]["title"], post[1]["url"]);
        postArrayStructure.push(postArray);
    })
    return postArrayStructure;
}

// next three lines are for testing getPostArrayStructure function
// let arrayTest = getPostArrayStructure(testObjectsArray)
// console.log(arrayTest)
// console.log(arrayTest[0])


const ocurrences = (post) => {
    let filteredIDs = [];
    const ocurreNum = post.reduce((counter, field) =>{
        if((field.match(inputRegExp)) != null){
            counter += (field.match(inputRegExp)).length
        }else if(field.matchAll(inputRegExp) == null){
             counter += 0
         }
        //  next commented line is for testing
        //  console.log(field, field.match(inputRegExp), counter)
         return counter
        },0)

        // next commented line is for testing
        // console.log(ocurreNum)
        if(ocurreNum !== 0){
            filteredIDs.push(post[0])
           }
    return filteredIDs;
    } 


// next line is for testing ocurrences function
// console.log((ocurrences(arrayTest[2])))



const getMatchedIDsArray = (array) => {
    let idsArray = [];
    let formattedArray = getPostArrayStructure(array)
    formattedArray.forEach((post) => {
        idsArray.push(...ocurrences(post))
    })
    return idsArray
}


// next line is for testing getMatchedIDsArray function
// console.log(getMatchedIDsArray(testObjectsArray))




const getResponse = () => {

    const requestInfo = {
        method: 'GET',
        url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
        success: (response) => {

            //next line is for testing //
            // console.log(response)  //ok
            let objectedResponse = Object.entries(response); //ok

            //next lines is for testing //
            // console.log(objectedResponse); //ok

            /* next process (next two line) is included in the matchedIDsArray (delete next line)
            when testing finish */
            // let postStructure = getPostArrayStructure(objectedResponse);

            //next line is for testing //
            // console.log(postStructure);

            let matchedIDs = getMatchedIDsArray(objectedResponse);
            //next line is for testing
            console.log(matchedIDs);

        },
        error: (error) => {
            console.log(error)
        },
        async: true,
    }
    
    return $.ajax(requestInfo)

}

//next line is for testing
// console.log(getResponse())

//next line is for testing. Don't delete it!
// let effectiveIDs = getResponse();
// console.log(effectiveIDs)

searchButton.click(event => {
    
    event.preventDefault() 
    // $(searchValue).attr('value', searchBar.val())
    console.log(searchValue);
    getResponse()
    console.log(searchValue)
    // $(location).attr("href","./pages/search.html")
    console.log(searchValue)
})


}
)


