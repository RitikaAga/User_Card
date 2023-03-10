import React from 'react'
import "../Styles/userCard.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


function UserCard() {
    let userdata = [
        {
        name: 'Prankur Gupta',
        rating: '4.9',
        designation: 'SDE @Amazon',
            about: "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
            image: "https://images.unsplash.com/photo-1525358004167-bee2ae2de7c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
    {
        name: 'Ankita',
        rating: '4.9',
        designation: 'SDE @Amazon',
        about: "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
        {
            name: 'Saumya Singh',
        rating: '5.0',
        designation: 'Software Engineer @Red Hat',
            about: "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI ",
            image: "https://images.unsplash.com/photo-1502324224542-7ea9927946fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
    name: 'Saurav Pal',
        rating: '5.0',
        designation: 'SDE-2 @Amazon',
            about: "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
            image:"https://images.unsplash.com/photo-1521620860034-0a3430d856d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
       {
    name: 'Keshav Bathla',
        rating: '5.0',
        designation: 'SDE-1 @Groww',
           about: "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0aWZ1bCUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
    ]
  return (
      <div className="mainDiv">
       <Carousel>
          {
              userdata.map((ele) => {
                  return (

                      <div className="userCard" >
                         
                          <div className='left'>
                              <p className='data rating'>{ ele.rating}</p>
                              <h1 className='data name'>{ ele.name }</h1>
                              <h3 className='data designation'>{ ele.designation }</h3>
                              <p className='data about'>{ ele.about }</p>
                              <button className='data btn'>Book a Session</button>
                          </div>
                          
                          <div className='right'>
                              <div className='Background'>
                                  <div className='image-div'>
                                      
                                      <div  className='image imgDiv1'>
                                          <img className='img1' src="https://images.unsplash.com/photo-1525358004167-bee2ae2de7c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                                      </div>
                                  
                                      <div className='image imgDiv2'>
                                           <img className='img2' src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
                                     </div>

                                      <div  className='image imgDiv3'>
                                           <img className='img3' src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
                                     </div>

                                     <div  className='image imgDiv4'>
                                         <img className='img4' src="https://images.unsplash.com/photo-1525358004167-bee2ae2de7c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
                                     </div>

                               {/* <div className='image'> 
                                      
                                 <img className='img5 ' src="hhttps://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0aWZ1bCUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>  </div>   */}
                                  </div>
                              </div>
                          </div>

                          
                       </div>
                   )
               })
              }
              </Carousel>
    </div>
  )
}

export default UserCard
