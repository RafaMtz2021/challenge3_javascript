// identifying search-bar (input-form)

const searchBar = $(".form-control_bar");
const searchValue = searchBar.val();
console.log(searchValue);


//identifying search.button (button-object)
const searchButton = $(".btn-sucess");
// console.log(searchButton);


//adding listener to button
searchButton.click(event => {
    event.preventDefault()
    console.log(searchValue)
})


// regular expression ready!
// let re1 = /`${searchValue}`/gi

// console.log(re1)
let inputRegExp = new RegExp(searchValue, 'gi');    // this works good!
console.log(inputRegExp)

// let re3 = /adasdfas/gi
// console.log(re3, typeof(r2))


// test array for testing
let testObjectsArray = [[
    "-MnXMTky2hvq8C56e2WH", {
      "body": "Content Post Sample",
      "date": "2021-11-02",
      "likes": 82204,
      "tags": [
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "python"
      ],
      "title": "First Testing Post",
      "url": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?yCXmhi7e2ARwUtzHHlvtcrgETnDgFwCK&size=770:433"
    }
],
    ["-MnXNhXyO9kqtc-iW-7-", {
      "body": "In Ye Olden Days of Webbe Development™️, if we wanted to create websites and applications that were responsive, it meant writing a series of media queries based around specific device breakpoints and re-working our content for each size (inb4 someone in the comments says the truly old days of web dev were table-based layouts – I remember them, and they sucked too). CSS frameworks stepped in to ease the device-breakpoint paint point – Bootstrap, Skeleton, etc. – because writing all of those was a lot of work! Slowly, we saw the best practices around writing media queries shift (by necessity) from device-based breakpoints to content-based breakpoints as more and more devices came out in all shapes and sizes. Now, with screens available in more or less any size you can imagine, it's time to shift our approach once again – the era of breakpoints is over and the era of fluid design is here. Rather than hitting a point and snapping to a new layout, our content should always be adjusting based on the amount of space available.\n\nThankfully, CSS has also come a long way since then as well, but a lot of us got used to just throwing in a media query or five to make things responsive, and never quite broke the habit. Now that we have modern CSS features like grid, flexbox, vh, vw, calc, clamp, min, max, aspect-ratio, and more, it's time to ditch the media queries. In this article, we're going to start at the top and work our way down from the big-picture display formatting all the way to the smallest units. And as for your old stylesheets...we can refactor. We have the technology.\n\nThe Big Picture: Grid and Flexbox\nLet's start with some of the most popular responsive display options, grid and flexbox. They've been around for a minute, with grid hitting full browser support in 2017 and flexbox in 2013, but a lot of folks still don't fully understand the difference between them, or when they should use one or the other (or both!). Many people assume a false equivalency between the two that can create a misguided either/or approach to choosing a tool – when in reality they not only have very different use cases, but also can (and should) be used together to compliment each other!\n\nFor our purposes, though, let's focus on how they work and how you can use them to handle the layout of elements on your page in a way that allows for natural wrapping and responsive adjustment without the use of media queries.\n\nGrid\ngrid is primarily focused on, well, creating a grid with multiple rows and columns that you can populate with elements. You do this by creating a container <grid> element which you then fill with child elements. There's a great number of customizations you can make to the grid rows, columns, and cells, which allows you to create grids as simple or complex as you can imagine.\n\nBut for our goal of creating simple, responsive designs, let's take a look at the most relevant features. Grid comes with the ability to repeat columns or rows automatically, as well as auto-fit which will automatically size your columns into the available space. For example, the code below:\n.grid {\n   display: grid;\n   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); \n  }\n\n-------- \n\n<div class=\"grid\">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\nIn this situation, the grid will turn your content into columns which naturally fit in the space you have, with each column having a min width of at least 300px and a max width of no more than 1fr. The 1fr is a new CSS unit that stands for fraction, which tells the browser to divide the space evenly and give each column one fraction of that space. In this case, it will create three equal columns that each take up 1/3 of the available space, but never get smaller than 300px. Were we to add another div, or take one away, the grid would automatically handle the calculation and adjust the display. And if the screen is too small to fit all the columns side by side at the same time, it will automatically wrap the remaining columns down to the next row.\n\nIf you're looking to create a more complex layout using grid, here are a few of my favorite reference resources:\n\nA Complete Guide to Grid, which offers a fantastic breakdown of all the ways you can customize your grid – including creating columns of varying widths, setting template areas, setting the gap between grid cells, and so much more.\nGrid By Example is my favorite place to start when I'm looking for a jumping-off point on creating a new grid structure.\nAnd if you're looking for a real-world example of a more complex grid, check out the frame.scss file in the kendo-demo app, where CSS grid was used extensively to create the menu frame that's used on every page.\nFlexbox\nflexbox takes a similar (but not quite the same) approach in helping you lay out your elements on the page and adjust them automatically as needed. Rather than creating a full grid with multiple rows and columns, however, flexbox is about the positioning of child elements relative to each other within the parent element. Basically: if you need to work in two directions at once (rows and columns) look at grid. If you need to focus on one direction (a single row or column), this is where you'll want flexbox.\n\nAgain, there's a lot to look at in terms of when to use each one and what the differences of application are, but let's leave that to the other article. For now, let's focus on how flexbox handles responsiveness for you, so you can delete that unnecessary media query.\n\nThe main point of interest for this is the flex-wrap property. Flex will start by attempting to fit everything you've written into one row or column, but if that isn't going to work, you can tell flex to allow wrapping by setting flex-wrap to wrap. If flex-wrap isn't specified, flex will squish the elements to keep them all on the same line (if no min-width is specified for the child elements), or allow them to overflow out of view (if a min-width is specified).\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex > div {\n    width: 300px\n}\n\n-------- \n\n<div class=\"flex\">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\nBasically, with both grid and flex, you just have to decide whether you want your content to squish or wrap, and then set the properties accordingly! Both are good tools to have in your toolbox for creating responsive UIs.\n\nIf you're looking for some resources to master Flexbox, here are a few of my favorites:\n\nFlexbox Froggy: a fun game to help you master what all the different properties do using some adorable frog illustrations.\nFLEX: a simple, visual cheatsheet for you to reference as you work!\nMiddle of the Road: CSS Properties\nOnce we've got our general layout in place, it's time to set some specific properties on our elements – and good news, no media queries needed here either!\n\naspect-ratio\nDid you know that there's a CSS property specifically designed for aspect ratios? This is especially great if you're dealing with video or big hero images, where keeping the correct aspect ratio is very important. There's a fantastic deep dive on CSS Tricks, but in general, it's pretty easy to apply – all you need is that one line:\n  .video-wrapper { aspect-ratio: 16/9; }\nIf you set a specific width value along with aspect-ratio, then it will use that as a basis and automatically generate the height value to match (or vice-versa). However, if you declare both a width and a height, it will honor those over the aspect-ratio, so be careful!\n\nmin-height, max-height, min-width, and max-width\nAlthough min and max height and width properties can often be replaced in many use cases with the clamp() function (which we'll look at in the next section), these are still valid CSS and good to have in your pocket. They're also easy, since they pretty much do exactly what they say on the tin:\n.img {\n  width: 100%; \n  max-width: 50%;\n  min-width: 200px; \n}\nHere, we have an image that we're telling first and foremost to take up as much space as it has available, up to the max-width so that we default to the largest image size possible. Then, we're giving it some guide rails – we don't want it to take up more than half the container, but we also want to make sure it's still larger than a postage stamp, so we also don't want it smaller than 200px wide. In this case, we set an absolute value only on the small end, because we know exactly how small the image can get before it becomes unrecognizable. Now, no matter how the browser is resized, we know our image will always be as big as it can be...without being either ridiculously giant, or unreadably small.\n\nFully Functional: Math Functions\nThe math functions are a newer addition to CSS, and incredibly powerful. They fill a void that CSS developers had complained over for ages – the ability to compute values within stylesheets and set ranges for properties. The sooner you can master them and put them to use in your code, the more you'll benefit!\n\nclamp()\nclamp() allows us to set a base value for a property, along with upper and lower caps to contain it as it adjusts. This is one of our best tools to ditch the media queries, as it allows us to set those responsive limits without needing to define specific breakpoints to do so. Here's how it works:\n.img {\n  /* the format is `clamp(min value, base value, max value)` */ \n  width: clamp(200px, 100%, 50%);\n}\nHere's an updated version of our last example – the image with the min and max widths. Only here, we're doing it in one line using clamp() by telling the image to take up 100% of the available space, but never larger than half the container size, or smaller than 200px wide.\n\ncalc()\nIf you've ever looked at CSS and wished it had more math, calc() is for you. It allows us to do simple arithmetic with CSS units, right in the stylesheet. This is great for when you need to base something off a unit that's not absolute. You can also use CSS variables in your computations, for extra flexibility! Let's say we want to create columns that are evenly divided based on the current width of the browser:\n.child { width: calc(100vw / 3); }\nSetting 1/3 widths is difficult using percentage units because of the whole .333 repeating situation – but now, we can just say \"You know what, CSS – you handle it!\" Here, we take the full window width, divide it by three, and set that as the width property of the child element.\n\nmin() and max()\nIf you're a fan of having your stylesheets handle as many decisions for you as possible, enter min() and max(). They work similarly to clamp(), but rather than setting a range in both directions, it focuses on just one at a time, allowing us to set the smallest (or largest) value depending on how the math works out. Again, this is a super useful tool for handling non-fixed values, which is one of those things you have to do a lot when creating something responsive.\n.img1 { width: min(30%, 200px) }\n\n.img2 { width: max(50vh, 800px) }\nIn this case, we're setting the widths for two different images – one we'd like to keep small, and one we'd like to be large. min() will evaluate whether 200px is greater or lesser than 30% of the current container and choose whichever value is the smallest. max() will make the same comparison between 50vh and 800px and automatically go with the larger.\n\nAll the Small Things: CSS Units\nIt's all well and good to think about things from a birds-eye view, the way we need to when laying out the elements on our page, but we also can't forget about the little guys – the units that specify size for our various properties. When we set everything in hard units, like pixels, we have to go in and adjust it manually each time we need to resize it. But when we work in responsive units, we can let them do the work for us!\n\nvw and vh\nTwo of my favorite and most used responsive CSS units are vh and vw – viewport width and viewport height. Although there's no percentage sign, vh and vw are really a type of percentage-based measurement – 1vw is 1% of the viewport width.\n\nGone are the days when viewport measurements had to be obtained via window.innerWidth and window.innerLength (again, dark times); we can now get them automatically in our stylesheets. They'll also automatically update as a user resizes the window, so no hoops to jump through there, either. vh is especially useful for those times when you want to center something vertically, or stick something to the bottom of the viewport. So to create a container element that's always the exact height and width of the user's current browser, all you need is:\n.page-wrapper {\n   height: 100vh; \n   width: 100vh; \n}\nrem and em\nIf you're still defining font sizes in pixels, let me introduce you to the beauty of rem and em units. The name em actually comes from old typographic standards of measurement, based around the width of the letter M in the font (which is also where the words em-dash and en-dash come from – dashes equal to the width of the M or N characters). em units are a way of defining your font sizes relative to the font size of the parent element. So, you could do something like:\n.h2 { font-size: 2.5em } \nAnd that would set your h2 headers to 2.5 times the size of the body font in the parent element.\n\nrem, on the other hand, allows you to declare your font size relative to the root font size of the entire page. In fact, that's what the R stands for – root em. Both rem and em work in the same way, the difference is what they're using as the base size and scaling based upon. In general, I lean towards rem over em because I like the consistency it creates, but if you're looking to create a specific design in one area that differs from the overall style, em will be what you want to reach for.\n\nIf you're looking for a neat trick, you can combine vw with rem and clamp() to create a fluid typography system for your application:\np { font-size: clamp(1rem, 2.5vw, 2rem); }\nHere, we set the base font size to 2.5vw (remembering that 1vw is equal to 1% of the viewport width), and then set min and max values on either side to ensure that you don't end up in either a situation where the text becomes unreadably small or a situation where the text just keeps getting bigger.\n\nPercentages\nAnd, last but certainly not least, the humble percentage unit. If you're going to be setting widths by hand for any reason (as opposed to using a layout tool like grid or flex), you'll almost certainly want to reach for the % instead of any absolute measurement unit.\n.container { width: 25%; }\nThis probably isn't one you really needed an example on, but just in case – here we have an element that we're setting to be 1/4 the width of its parent. As the parent width changes, this element will automatically adjust as well. It's simple, yes, but foundational for building responsive UIs.\n\nConclusion\nIf you're still relying primarily on media queries to ensure your site or app is fully responsive, it might be time to take a look at everything CSS has to offer and see if you can swap some of those old-fashioned breakpoints out for some of these new, fluid approaches to styling. Working to create a fully fluid layout means less drastic changes for your user when they move between mobile and desktop, as well as less maintenance work for you – no more updating every breakpoint whenever there's a change to the design. Leverage these adaptive approaches to styling, and get ready to go with the flow!",
      "date": "2021-11-02",
      "likes": 90752,
      "tags": [
        "css",
        "frontend",
        "ux",
        "webdev",
        "python",
        "python"
      ],
      "title": "You Probably Don't Need Media Queries Anymore",
      "url": "https://res.cloudinary.com/practicaldev/image/fetch/s--bfBgl3GF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qspvr74it45vxok3p6vw.png"
    }
    ],
    ["-MnXO2zBNIL78bkYwF2c", {
      "body": "In a rush? Head down to the comments and share a domain name you own without a purpose, I (and hopefully some others) will give you a fun side project idea for it!\n\nFor those not in a rush!\nI own quite a few domain names. I recently wrote about my emoji domain 👩‍💻👨‍💻.to, I also own a domain name purely for the fact it sits on the million dollar homepage and is a part of internet history!\n\nI even bought a domain name a few years ago that I still think could be great for a codepen competitor - codersplayground.co.uk!\n\nOh and don't forget ultimatemot*******kingwebsite.com (Warning, do not click this link if swearing offends you), which is probably the naughtiest domain I own and actually use!\n\nToday, for the first time in a while, I bought a domain name that not only fit a big side project beautifully, but would also work for loads of different use cases.\n\nIt is probably the \"best\" (best when talking about commercial viability and an obvious use case) I have bought. In fact, I am that amazed it wasn't taken it prompted this whole article!\n\nThe domain is:\n\na2z.dev\nI will be writing loads about that domain as it will feature heavily in my content creation strategy over the next year, but it had me thinking about all the domains I have bought over the years that maybe weren't as great!\n\nThen I realised I can't be the only one with random domains (or really good domains that you are surprised weren't taken) sat idle and needing a purpose!\n\nSo that leads me to the question:\n\nHow many of you have random domains with no purpose?\nAs I said I have several domains that are good (and some not so good ones!), but have no purpose at the moment.\n\nAnd I certainly can't be the only one.\n\nSo put your unused domain name into the comments below and I will come up with a fun project and possibly a serious project as well that you could build around that domain name!\n\nI want to see who has a) the best domain name (can you beat a2z.dev?) and b) the silliest domain name.\n\nHopefully a bit of fun coming up with ideas for how to use a domain name will turn into a silly side project, that then turns into something beautiful and massive, and we can all say that it started here and we helped make it happen! 😁\n\nAdd your domain name(s) below that you want a project for and I (and hopefully others) will come up with a killer idea!",
      "date": "2021-11-02",
      "likes": 18757,
      "tags": [
        "watercooler",
        "discuss",
        "webdev",
        "startup",
      ],
      "title": "Do you own a domain name without a purpose? Let me give you a project for it!",
      "url": "https://res.cloudinary.com/practicaldev/image/fetch/s--3FRsn0BK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/68wct7ay4uddd20cdxza.jpg"
    }
    ]
]


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

// nex three lines is for testing getPostArrayStructure function
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



const matchedIDsArray = (array) => {
    let idsArray = [];
    let formattedArray = getPostArrayStructure(array)
    formattedArray.forEach((post) => {
        idsArray.push(...ocurrences(post))
    })
    return idsArray
}


// next line is for testing
console.log(matchedIDsArray(testObjectsArray))



const getResponse = () => {

    const requestInfo = {
        method: 'GET',
        url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
        success: (response) => {
            let objectedResponse = Object.entries(response);
            console.log(response)
            console.log(objectedResponse);
            let postStructure = getPostArrayStructure(objectedResponse);
            console.log(postStructure);

        // const alternResponseArray = getPostArrayStructure(responseArray);
        // testObjectsArrayFiltered(alternResponseArray)
        // let postsFromDB = Object.entries(response)
        //   console.log(Object.entries(xhr)) 
        // return (Object.entries(xhr))
        },
        error: (error) => {
            console.log(error)
        },
        async: true,
    }
    
    return $.ajax(requestInfo)

}


// console.log(postsFromDB)
// console.log(getResponse())
// console.log(Object.entries(getResponse()))

searchButton.click(event => {
    event.preventDefault()
    console.log(getResponse())
})


