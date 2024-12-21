const movies = [
    {
      title: "Devara",
      poster: "/images/devara.avif",
      description: "Action Drama film about a Coastal Village",
      year: "2024",
      songs: [
        {
          title: "Daavudi",
          url: "/songs/Daavudi.mp3",
        },
        {
          title: "Fear",
          url: "/songs/Fear.mp3",
        },
      ],
    },
    {
      title: "Thandel",
      poster: "/images/Thandel.avif",
      description: "Action, Romance, and Thriller film",
      year: "2025",
      songs: [
        {
          title: "Bujji Thalli",
          url: "/songs/Bujji Thalli.mp3",
        },
      ],
    },
    {
      title: "Amaran",
      poster: "/images/amaran.jpg",
      description: "Tamil-language Biographical war film",
      year: "2024",
      songs: [
        {
          title: "Hey Minnale",
          url: "/songs/Hey Minnale.mp3",
        },
        {
          title: "Sai Pallavi Intro",
          url: "/songs/Sai Pallavis Intro.mp3",
        },
      ],
    },
    {
      title: "Kalki",
      poster: "/images/kalki.jpg",
      description: "Indian science fiction film that combines Hindu mythology",
      year: "2024",
      songs: [
        {
          title: "Ta Takkara",
          url: "/songs/Ta Takkara.mp3",
        },
        {
          title: "Keshava Madhava",
          url: "/songs/Keshava Madhava.mp3",
        },
      ],
    },
    {
      title: "Hanuman",
      poster: "/images/Hanuman.jpg",
      description: " The powers of Hanuman and fights for Anjanadri.",
      year: "2024",
      songs: [
        {
          title: "Hanuman Chalisa",
          url: "/songs/Hanuman Chalisa.mp3",
        },
        {
          title: "Poolamme Pilla",
          url: "/songs/Poolamme Pilla.mp3",
        },
      ],
    },
    {
      title: "R R R",
      poster: "/images/RRR.jpg",
      description: " Action-Adventure-Drama film about two Indian revolutionaries",
      year: "2022",
      songs: [
        {
          title: "Nattu Nattu",
          url: "/songs/Nattu Nattu (1).mp3",
        },
        {
          title: "Komuram Bheemudo",
          url: "/songs/Komuram Bheemudo.mp3",
        },
      ],
    },
    
    {
      title: "Manam",
      poster: "/images/Manam.jpg",
      description: "Comedy-Drama film about reincarnation and family relationships",
      year: "2014",
      songs: [
        {
          title: "Kanulanu Thaake",
          url: "/songs/Kanulanu Thaake - SenSongsMp3.Co (3).mp3",
        },
        {
          title: "Chinni Chinni Aasalu",
          url: "/songs/Chinni Chinni Aasalu - SenSongsMp3.Co.mp3",
        },
      ],
    },
    {
      title: "AlaVaikuntapuramlo",
      poster: "/images/Ala viakunthapuramulo.jpg",
      description: "Middle-class man who discovers",
      year: "2020",
      songs: [
        {
          title: "Samajavaragamana",
          url: "/songs/Samajavaragamana - SenSongsMp3.Co.mp3",
        },
        {
          title: "Buttabomma",
          url: "/songs/Buttabomma - SenSongsMp3.Co.mp3",
        },
      ],
    },
    {
      title: "Hi Nanna",
      poster: "/images/Hi Nanna.webp",
      description: "romantic drama film about a single father and his daughter",
      year: "2020",
      songs: [
        {
          title: "Gaaju Bomma",
          url: "/songs/[iSongs.info] 03 - Gaaju Bomma.mp3",
        },
        {
          title: "Odiyamma",
          url: "/songs/[iSongs.info] 05 - Odiyamma.mp3",
        },
      ],
    },
    {
      title: "Guntur Karam",
      poster: "/images/Guntur-Karam.jpg",
      description: "A man who seeks answers after his mother abandons him and remarries",
      year: "2023",
      songs: [
        {
          title: "Amma",
          url: "/songs/Amma.mp3",
        },
        {
          title: "Mawaa Enthaina",
          url: "/songs/Mawaa Enthaina.mp3",
        },
      ],
    },
    {
      title: "Salaar",
      poster: "/images/salaar.jpg",
      description: " action thriller film two Childhood friends become Enemies",
      year: "2020",
      songs: [
        {
          title: "Prathi Kadala",
          url: "/songs/Prathi Kadalo.mp3",
        },
        {
          title: "Sooreede",
          url: "/songs/Sooreede.mp3",
        },
      ],
    },
    {
      title: "Khushi",
      poster: "/images/Kushi-movie.avif",
      description: "Comedy, drama, romance",
      year: "2020",
      songs: [
        {
          title: "Kushi",
          url: "/songs/Kushi.mp3",
        },
        {
          title: "Na Roja Nuvve",
          url: "/songs/Na Roja Nuvve.mp3",
        },
      ],
    },
    
    {
      title: "Rangasthalam",
      poster: "/images/Rangasthalam.jpg",
      description: "a man who joins forces with his brother",
      year: "2018",
      songs: [
        {
          title: "Aa Gattunutaava",
          url: "/songs/Aa Gattununtaava - SenSongsMp3.Co.mp3",
        },
        {
          title: "Ranga Ranga Rangasthalaana",
          url: "/songs/Ranga Ranga Rangasthalaana - SenSongs.Co.mp3",
        },
      ],
    },
    {
      title: "Baahubali",
      poster: "/images/Bahubali.avif",
      description: "A child from the Mahishmati kingdom is raised by tribal people",
      year: "2015",
      songs: [
        {
          title: "Saahore Baahubali",
          url: "/songs/[iSongs.info] 01 - Saahore Baahubali.mp3",
        },
        {
          title: "Dandaalayyaa",
          url: "/songs/[iSongs.info] 04 - Dandaalayyaa.mp3",
        },
      ],
    },
    {
      title: "Baahubali2",
      poster: "/images/Baahubali2.webp",
      description: "action-drama film about the rivalry between siblings",
      year: "2017",
      songs: [
        {
          title: "Kannaa Nidurinchara",
          url: "/songs/[iSongs.info] 03 - Kannaa Nidurinchara.mp3",
        },
        {
          title: "Hamsa Naava",
          url: "/songs/[iSongs.info] 02 - Hamsa Naava.mp3",
        },
      ],
    },
    {
      title: "Jersey",
      poster: "/images/Jersey.jpg",
      description: "a former cricketer who returns to the sport in his mid-30s",
      year: "2019",
      songs: [
        {
          title: "Kannaa Nidurinchara",
          url: "/songs/[iSongs.info] 03 - Kannaa Nidurinchara.mp3",
        },
        {
          title: "Hamsa Naava",
          url: "/songs/[iSongs.info] 02 - Hamsa Naava.mp3",
        },
      ],
    },
    {
      title: "V",
      poster: "/images/v.jpg",
      description: "a celebrated police officer who is trying to stop a serial killer",
      year: "2021",
      songs: [
        {
          title: "Kannaa Nidurinchara",
          url: "/songs/[iSongs.info] 03 - Kannaa Nidurinchara.mp3",
        },
        {
          title: "Hamsa Naava",
          url: "/songs/[iSongs.info] 02 - Hamsa Naava.mp3",
        },
      ],
    },
  ];
  
  export default movies;
