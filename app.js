// 1. DATA TYPES
/*
// A light switch that can be either on or off.
// Boolean
lightSwitchOn: true 

// A user's email address.
// String
email: 'johndoe123@gmail.com' 

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Array
const spaceshipParts = [
    hull,
    laserBlasters,
    tractorBeam, 
    warpDrive
]

// A list of student names from our class.
// Array
const sei706 = [
    Brooke,
    Cody,
    DK, 
    Erin, 
    George, 
    Gonzalo, 
    Greg, 
    Jack, 
    Marshall,
    Marshawn, 
    Megan, 
    Neeraj, 
    Nicole, 
    Satya, 
    Stephany 
] 
// A list of student names from our class, each with a location.
// Array, Objects 
const sei706Location = [
    {firstName: 'Brooke',
     city: 'Mesa'
    },
    {firstName: 'DK',
    city: 'Rockland'
    },
    {firstName: 'Erin',
    city: 'San Bruno'
    }
] 

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// Array, Objects
const sei706Shows = [
    {firstName: 'Stephany',
    city: 'Escondido',
    favoriteTVShows: ['show1', 'show2', 'show3']
    },
    {firstName: 'Satya',
    city: 'San Francisco',
    favoriteTVShows: ['show1', 'show2', 'show3']
    },
    {firstName: 'Nicole',
    city: 'South Bend',
    favoriteTVShows: ['show1', 'show2', 'show3']
    }
]
*/

//////////////////////////////////////
// 2. TAKE IT EASY
/*
const rainbow = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]
console.log(rainbow[4])

const megan = {
    favoriteFood: 'Massaman Curry',
    hobby: 'reading',
    location: 'Portland',
    favoriteDataType: Boolean 
}
console.log(megan.hobby)
*/

//////////////////////////////////////
// 3. CRAZY OBJECT
/*
const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
        },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favouriteHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }


// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[4])
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0])
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favouriteHobby)
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.characters[1])
// The object that contains the name funkhauser
*/

//////////////////////////////////////
// 4: Object-ception
const inception = {
  reality: {
      dreamLayer1: {
          dreamLayer2: {
              dreamLayer3: {
                  dreamLayer4: {
                      dreamLayer5: {
                          dreamLayer6: {
                              limbo: "Joseph Gordon Levitt"
                         }
                      }
                  }
              }
          }
      }
  }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)

//////////////////////////////////////
// 5-7. BOND FILMS
// The key value pairs in the objects are:
// title, year, actor, gross

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// 5. Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

const bondTitles = []
// Step 1. Loop over the bondFilms variable
// Step 2. Grab the key: value pair
// Step 2a. Make a temporary "holding" variable to store the title
// Step 2b. Store the .title into that holding variable
// Step 3. .push() the title into bondTitles 

// for (let i = 0; i < bondFilms.length; i++) {
//   let title = bondFilms[i].title
//   // console.log(title)
//   bondTitles.push(title)
// }

// console.log(bondTitles)

// 6. Create a new array oddBonds, of only the Bond films released on odd-numbered years.
// const oddBonds = []
// for (let j = 0; j < bondFilms.length; j++) {
//   if (bondFilms[j].year %2 != 0) {
//     oddBonds.push(bondFilms[j].year)
//   }
// }

// console.log(oddBonds)

// 7. Determine the total cumulative gross of the Bond franchise, and console.log the result.

let grossSales = 0
for (let k = 0; k < bondFilms.length; k++) {
  // 
  grossSales += parseInt(bondFilms[k].gross.replace(/,/g, "").replace('$', ""))
  // Turn string into number
}

console.log(grossSales)

// console.log(parseInt("$12,345,000".replace(/,/g, "").replace('$', "")))
