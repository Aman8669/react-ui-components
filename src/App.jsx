import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {

   const users = [
  {
    "username": "Aman123",
    "city": "Mumbai",
    "profession": "Frontend Developer",
    "about": "Passionate about building responsive web applications using React and CSS.",
    "image": "https://tse3.mm.bing.net/th/id/OIP.rMcBg3w2WTvxy57T1rmn1AHaE7?pid=Api&P=0&h=180"
  },
  {
    "username": "RiyaTech",
    "city": "Pune",
    "profession": "UI/UX Designer",
    "about": "Designs clean and modern user interfaces with a focus on user experience.",
    "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    "username": "KaranDev",
    "city": "Delhi",
    "profession": "Backend Developer",
    "about": "Works with Node.js and databases to build scalable backend systems.",
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  // {
  //   "username": "SnehaCodes",
  //   "city": "Bangalore",
  //   "profession": "Full Stack Developer",
  //   "about": "Enjoys creating full-stack applications using MERN technologies.",
  //   "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  // },
  // {
  //   "username": "RahulAI",
  //   "city": "Hyderabad",
  //   "profession": "Data Analyst",
  //   "about": "Analyzes data and creates dashboards to help businesses make decisions.",
  //   "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  // }
];
  return (
    <>
       <Navbar />
       
       <div className="cards">

        {users.map((el, index) => (
          <Card
            key={index}
            username={el.username}
            city={el.city}
            profession={el.profession}
            about={el.about}
            image={el.image}
          />
        ))}

      </div>
    </>
  )
}

export default App
