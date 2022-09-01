let myFavBook = { 
    title:  "Think and Grow Rich",
    author:  'Napoleon Hill',
    year:  '1937',
    description:  'Think and Grow Rich is a book written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book.',
}; 


let myFavMovie = {
    title: "American Sniper",
    director: 'Clint Eastwood',
     year: '2014',
     description: "The film follows the life of Kyle, who became the deadliest marksman in U.S. military history with 255 kills from four tours in the Iraq War, 160 of which were officially confirmed by the Department of Defense.",
     actors:[
      actor1 = {
        actorName1 : 'Sienna Miller',
         roleName1 :'Taya Kyle',
        },

        actor2 = {  
        actorName2: 'Bradley Cooper',
         roleName2: 'Chris Kyle',
        },

        actor3 = {
        actorName3: 'Luke Grimes' ,
        roleName3: 'Marc Lee',
        } ,

        actor4 ={
        actorName4: 'Jake McDorman' ,
        roleName4: 'Ryan \"Biggles\" Job',
     },

        actor5 = {
        actorName5: 'Navid Negahban' ,
        roleName5: 'Sheikh Al-Obodi',
},        
       
]
       };
     

     let myFavSeries= {
        title: "White Collar",
        description: "A white-collar criminal agrees to help the FBI catch other white-collar criminals using his expertise as an art and securities thief, counterfeiter, and conman.",
        actors: [ 
          actor1 = {
                actorName1: "Matt Bomer",
                roleName1: 'Neal Caffrey'
            },

            actor2 = {
                actorName2: 'Tim DeKay',
                actorRole2: 'Peter Burke'
            },

            actor3 = {
                actorName3: 'Willie Garson',
                actorRole3: 'Mozzie'
            },

            actor4 = {
                actorName4: "Tiffani Thiessen",
                roleName4: 'Elizabeth Burke'
            },
            
            actor5 = { 
                actorName5: 'Sharif Atkins',
                actorRole: 'Clinton Jones'
            },

            
        ],

        director: ["Jeff Eastin" ],
        seasons: [
            season1 = {
                Episodes : "14",
                startYear: "2009",
                endYear: "2009"
            },

            season2 = {
                Episodes : "16",
                startYear: "2010",
                endYear: "2010"
            },

            season3 = {
                Episodes : "16",
                startYear: "2011",
                endYear: "2011"
            },

            season4 = {
                Episodes : "16",
                startYear: "2012",
                endYear: "2012"
            },

            season5 = {
                Episodes : "13",
                startYear: "2013",
                endYear: "2013"
            },

            season6 = {
                Episodes : "6",
                startYear: "2014",
                endYear: "2014"
            },
        ],

     };
     

     let myFavs = {
        book: myFavBook,
        movie: myFavMovie,
        series: myFavSeries,
     };
     console.log(myFavBook.author);
     console.log(myFavMovie.actors[0].roleName1);
     console.log(myFavSeries.seasons[5].endYear);

    
     for( let i=1; i<=myFavSeries.seasons[5].Episodes; i++ )
     console.log(i);

     console.log(myFavSeries.director.length);
     