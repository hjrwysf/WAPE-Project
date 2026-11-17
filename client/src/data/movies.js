
const movies = [
    {
      id: 1,
      title: "The Super Mario Bros. Movie",
      genre: "Animation",
      rating: 7.0,
      year: 2023,
      duration: 92,
      description: "Mario and Luigi travel to a magical kingdom on an adventure to save it.",
      poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
    },
    {
      id: 2,
      title: "Beauty and the Beast",
      genre: "Animation",
      rating: 8.0,
      year: 1991,
      duration: 84,
      description: "A young woman discovers the kindness hidden inside a mysterious Beast.",
      poster: "https://image.tmdb.org/t/p/w500/hUJ0UvQ5tgE2Z9WpfuduVSdiCiU.jpg"
    },
    {
      id: 3,
      title: "Finding Nemo",
      genre: "Animation",
      rating: 8.2,
      year: 2003,
      duration: 100,
      description: "A clownfish travels across the ocean to find his missing son.",
      poster: "https://image.tmdb.org/t/p/w500/5lc6nQc0VhWFYFbNv016xze8Jvy.jpg"
    },
    {
      id: 4,
      title: "Shrek",
      genre: "Animation",
      rating: 7.9,
      year: 2001,
      duration: 90,
      description: "An ogre sets out on an adventure to rescue a princess.",
      poster: "https://image.tmdb.org/t/p/w500/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg"
            },
    {
      id: 5,
      title: "The Incredibles",
      genre: "Animation",
      rating: 8.0,
      year: 2004,
      duration: 115,
      description: "A family of superheroes returns to action to save the world.",
      poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg"
    },
    {
      id: 6,
      title: "Deadpool",
      genre: "Action",
      rating: 8.0,
      year: 2016,
      duration: 108,
      description: "A former soldier becomes an unconventional superhero seeking revenge.",
      poster: "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg"
        },
    {
      id: 7,
      title: "Black Panther",
      genre: "Action",
      rating: 7.3,
      year: 2018,
      duration: 134,
      description: "T'Challa must protect Wakanda and defend his kingdom.",
      poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
    },
    {
      id: 8,
      title: "The Greatest Showman",
      genre: "Drama",
      rating: 7.5,
      year: 2017,
      duration: 105,
      description: "A visionary entertainer creates a spectacular show celebrating individuality.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Zh5CoCzu-YGaooSHWJYGVn1VI5jCMvH79KZvcMDIzg&s=10"
        },
    {
      id: 9,
      title: "The Lion King",
      genre: "Animation",
      rating: 8.5,
      year: 1994,
      duration: 88,
      description: "A young lion learns to accept his destiny.",
      poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
    },
    {
      id: 10,
      title: "The Maze Runner",
      genre: "Sci-Fi",
      rating: 7.2,
      year: 2014,
      duration: 113,
      description: "A young man wakes up in a mysterious maze with no memory of his past.",
      poster: "https://image.tmdb.org/t/p/w500/ode14q7WtDugFDp78fo9lCsmay9.jpg"
        },
    {
      id: 11,
      title: "Kung Fu Panda",
      genre: "Animation",
      rating: 7.6,
      year: 2008,
      duration: 92,
      description: "A clumsy panda discovers his destiny as a kung fu warrior.",
      poster: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg"
    },
    {
      id: 12,
      title: "Jumanji: Welcome to the Jungle",
      genre: "Adventure",
      rating: 6.9,
      year: 2017,
      duration: 119,
      description: "Four teenagers enter a video game and must survive its dangerous world.",
      poster: "https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg"
    },

    {
        id: 13,
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        rating: 7.6,
        year: 2001,
        duration: 152,
        description: "Harry discovers he is a wizard and begins his magical journey at Hogwarts.",
        poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
    },
    {
        id: 14,
        title: "Harry Potter and the Chamber of Secrets",
        genre: "Fantasy",
        rating: 7.4,
        year: 2002,
        duration: 161,
        description: "Harry returns to Hogwarts and investigates a mysterious chamber.",
        poster: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg"
    },
    {
        id: 15,
        title: "Harry Potter and the Prisoner of Azkaban",
        genre: "Fantasy",
        rating: 7.9,
        year: 2004,
        duration: 142,
        description: "Harry learns about Sirius Black and uncovers secrets from his past.",
        poster: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg"
    },
    {
        id: 16,
        title: "Harry Potter and the Goblet of Fire",
        genre: "Fantasy",
        rating: 7.7,
        year: 2005,
        duration: 157,
        description: "Harry competes in the dangerous Triwizard Tournament.",
        poster: "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg"
    },
    {
        id: 17,
        title: "Harry Potter and the Order of the Phoenix",
        genre: "Fantasy",
        rating: 7.5,
        year: 2007,
        duration: 138,
        description: "Harry forms Dumbledore's Army to prepare for the return of Voldemort.",
        poster: "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg"
    },
    {
        id: 18,
        title: "Harry Potter and the Half-Blood Prince",
        genre: "Fantasy",
        rating: 7.6,
        year: 2009,
        duration: 153,
        description: "Harry discovers more about Voldemort's past.",
        poster: "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg"
    },
    {
        id: 19,
        title: "Harry Potter and the Deathly Hallows: Part 1",
        genre: "Fantasy",
        rating: 7.7,
        year: 2010,
        duration: 146,
        description: "Harry, Ron, and Hermione search for Horcruxes outside Hogwarts.",
        poster: "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg"
    },
    {
        id: 20,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        genre: "Fantasy",
        rating: 8.1,
        year: 2011,
        duration: 130,
        description: "The final battle between Harry and Voldemort takes place.",
        poster: "https://image.tmdb.org/t/p/w500/c54HpQmuwXjHq2C9wmoACjxoom3.jpg"
    },
    {
        id: 21,
        title: "Mulan",
        genre: "Animation",
        rating: 7.7,
        year: 1998,
        duration: 88,
        description: "A brave young woman disguises herself as a soldier to protect her family.",
        poster: "https://image.tmdb.org/t/p/w500/5TYgKxYhnhRNNwqnRAKHkgfqi2G.jpg"
    },

    {
        id: 22,
        title: "Frozen",
        genre: "Animation",
        rating: 7.4,
        year: 2013,
        duration: 102,
        description: "Elsa and Anna discover the meaning of love and sisterhood.",
        poster: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg"
    },
    {
        id: 23,
        title: "Frozen II",
        genre: "Animation",
        rating: 6.8,
        year: 2019,
        duration: 103,
        description: "Elsa travels into an enchanted forest to discover the truth about her powers.",
        poster: "https://image.tmdb.org/t/p/w500/mINJaa34MtknCYl5AjtNJzWj8cD.jpg"
    },
    {
        id: 24,
        title: "Tangled",
        genre: "Animation",
        rating: 7.7,
        year: 2010,
        duration: 100,
        description: "Rapunzel escapes her tower and discovers the world outside.",
        poster: "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg"
    },
    {
        id: 25,
        title: "Raya and the Last Dragon",
        genre: "Animation",
        rating: 7.3,
        year: 2021,
        duration: 107,
        description: "Raya searches for the last dragon to save her divided kingdom.",
        poster: "https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg"
    },
    {
        id: 26,
        title: "Moana",
        genre: "Animation",
        rating: 7.6,
        year: 2016,
        duration: 107,
        description: "Moana sails across the ocean to save her island.",
        poster: "https://lumiere-a.akamaihd.net/v1/images/pp_moana_herobanner_mobile_20530_75515cd9.jpeg?region=0,0,640,480"        
    },
    {
        id: 27,
        title: "Moana 2",
        genre: "Animation",
        rating: 6.9,
        year: 2024,
        duration: 100,
        description: "Moana sets out on a new ocean adventure with her crew.",
        poster: "https://image.tmdb.org/t/p/w500/a0GM57AnJtNi7lMOCamniiyV10W.jpg"
    },
    {
        id: 28,
        title: "How to Train Your Dragon",
        genre: "Animation",
        rating: 8.1,
        year: 2010,
        duration: 98,
        description: "Hiccup befriends a dragon named Toothless.",
        poster: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg"
    },
    {
        id: 29,
        title: "How to Train Your Dragon 2",
        genre: "Animation",
        rating: 7.8,
        year: 2014,
        duration: 102,
        description: "Hiccup and Toothless discover a hidden dragon sanctuary.",
        poster: "https://image.tmdb.org/t/p/w500/d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg"
    },
    {
        id: 30,
        title: "How to Train Your Dragon: The Hidden World",
        genre: "Animation",
        rating: 7.4,
        year: 2019,
        duration: 104,
        description: "Hiccup and Toothless search for a safe home for dragons.",
        poster: "https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/blt626bfeb85c7b5e4a/693cb181039f3e570c7565af/HowToTrainYourDragonTheHiddenWorld_keyart_desktop_2000x3000.jpg?width=2560"
        }



]

export default movies
