// DATA
// Below data will hold all of the possible friends

var friends = [
    {
      name: "Yoda",
      photo: "https://img.huffingtonpost.com/asset/561bf8581200002e007e4e5b.jpeg?ops=crop_0_43_600_349,scalefit_720_noupscale",
      bio: "A Jedi Master, I am. Good relations with the Wookiees, I have.",
      'scores[]': [5, 5, 3, 5, 4]
    },
    {
      name: "Angela Merkel",
      photo: "https://www.cdu.de/sites/default/files/styles/large/public/media/images/buvo/161201-pv-780x439.jpg?itok=_w3ES51J",
      bio: "I am thankful for the way I was raised, to be positive. Even when times have gotten rough I have always tried to look on the bright side.",
      'scores[]': [4, 5, 4, 5, 3]
    },
    {
      name: "Bill Nye",
      photo: "https://pmcdeadline2.files.wordpress.com/2057/10/bill-nye.jpg?w=446&h=299&crop=1",
      bio: "You and I are made of stardust. We are the stuff of exploded stars. We are therefore, at least one way that the Universe knows itself. That, to me, is astonishing.",
      'scores[]': [5, 5, 4, 5, 3]
    },
    {
      name: "Leia Organa",
      photo: "https://pbs.twimg.com/profile_images/813833730544599040/6-6PI-v0.jpg",
      bio: "My parents. My friends. My world. These are the things the Empire can never take away.",
      'scores[]': [3, 5, 3, 5, 3]
    },
    {
      name: "Donald Trump",
      photo: "https://www.thenation.com/wp-content/uploads/2017/03/trump_daywithout_ap_img.jpg",
      bio: "I'm the Ernest Hemingway of 140 characters.",
      'scores[]': [5, 5, 5, 5, 5]
    },
    {
      name: "Darth Maul",
      photo: "https://www.dailydot.com/wp-content/uploads/c80/6b/295e5d32dc1ad589-e1497402946283.png",
      bio: "At last we will reveal ourselves to the Jedi. At last we will have revenge.",
      'scores[]': [1, 3, 1, 3, 5]
    },
    {
      name: "Chewbacca",
      photo: "http://cdn.mos.cms.futurecdn.net/KyjbGs4kc7nUWCj9J2q3ef-480-80.jpg",
      bio: "GGWWWRGHH",
      'scores[]': [3, 2, 5, 2, 5]
    }
];
  
// Make the array accessible to other files using require.
module.exports = friends;