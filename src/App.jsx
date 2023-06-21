import React from 'react'
import Footer from './Components/FooterDiv/Footer'
import Jobs from './Components/JobDiv/Jobs'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Value from './Components/ValueDiv/Value'

// Imported Images ============>
import logo1 from './Assets/logo (1).png'
import logo2 from './Assets/logo (2).png'
import logo3 from './Assets/logo (3).png'
import logo4 from './Assets/logo (4).png'
import logo5 from './Assets/logo (5).png'
import logo6 from './Assets/logo (6).png'
import logo7 from './Assets/logo (7).png'
import logo8 from './Assets/logo (8).png'

import { useState } from "react";



const Data = [
  {
    id:1,
    image: logo1,
    title: 'Full Stack Web Developer',
    time: 'Now', 
    location: 'Philippines',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Kodego'
  },
  {
    id:2,
    image: logo2,
    title: 'UI Designer',
    time: '14Hrs', 
    location: 'Cebu',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Liquid Accessments'
  },

  {
    id:3,
    image: logo3,
    title: 'Software Eng',
    time: '10Hrs', 
    location: 'Davao',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Web Tech Agency'
  },

  {
    id: 4,
    image: logo4,
    title: 'Ui/Ux Designer',
    time: '10H',
    location: 'Makati',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Government',
  },

  {
    id: 5,
    image: logo5,
    title: 'Product Designer',
    time: 'Now',
    location: 'Iloilo',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Newcastle',
  },
 

  {
    id: 6,
    image: logo6,
    title: 'Researcher',
    time: '5H',
    location: 'Singapore',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Nin Co.',
  },

  {
    id: 7,
    image: logo7,
    title: 'Lead Developer',
    time: '14H',
    location: 'Philippines',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'It Hub Philippines',
  },


  {
    id: 8,
    image: logo8,
    title: 'Data Scientist',
    time: '2 Days',
    location: 'Philippines',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Nome And Sons',
  } 

];



const App = () => {

  const [search, setSearch] = useState("");
  const [datas, setData] = useState(Data);
  

  const searchJob = (e)=>{
    e.preventDefault();
    console.log('Search Now');
   //const datas = {data.filter( (item)=> ((item.title).toLowerCase()).includes(search.toLowerCase()) )};
   
  }

  return (
    <div className='w-[85%] m-auto bg-white'>
     <NavBar/>

     <Search 
      search = {search}
      setSearch = {setSearch}
      searchJob = {searchJob} />

     <Jobs Data = {datas.filter( (item)=> ((item.title).toLowerCase()).includes(search.toLowerCase()) )} />

     <Value/>
     <Footer/>
    </div>
  )
}

export default App



