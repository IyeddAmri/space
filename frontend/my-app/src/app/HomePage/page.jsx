import React from 'react'
import '@/app/HomePage/home.css'
import Page from '../Navbar/page'
import Pages from '../Footer/page'
import Image from 'next/image'
 const page = () => {
  return (
    
    <div >
        <Page/>
        
       <p className='hello'> Take your place in space history</p>
       <div className='t'>
       <h1> Welcome, Explorer.</h1> <hr />
       <p>
From the moment your deposit is confirmed, you are a member of the Space  Explorer community. We’ll welcome you with a package that provides details about your journey and many other benefits. You’ll receive regular updates from our team, introductions to fellow Explorers and the Space Perspective team, exclusive event invitations, and more. As your flight date approaches, you’ll be guided through booking your travel to our launch site, accommodations on site, and a range of bespoke amenities and services.
        </p>
       <Image className="img"src="/c.png" width={1500}height={200} ></Image>
        </div>
        <div className='v'>
           <h1 className='o'>On site before Liftoff</h1> 
           <p className='text'>
Your preflight immersion begins at Kennedy Space Center. Once you’re settled at your accommodations, you’ll begin by meeting the Space team for a walkthrough of our facilities, including an informational and safety briefing. You’ll then have time to relax into your surroundings—book an exclusive, behind-the-scenes tour of the Kennedy Space Center, get to know the Space Perspective team, or simply enjoy time with your friends, family, and fellow Explorers and prepare yourself for the life-changing experience that awaits.
            </p>
            <Image  className="tsw"src="/d.png"width={1500}height={200}></Image>
            </div>
            <div className='v'>
                <h1>Your journey</h1>
                <p >
                Space has designed your journey to be exhilarating and celebratory, with ample time for quiet contemplation. Astronauts refer to the impact of seeing Planet Earth from space as a paradigm shift that forever changes their outlook. Over six unforgettable hours, you will ascend to the edge of space and join the lucky few—only about 600—who have looked down at our home from above.
                </p>
                <Image className="tsw3"src="/rs.png" width={1500}height={200} ></Image>
                <div className='x'>
                    <p className='z '>Launch from Marine Spaceport (MS) Voyager or from land on Florida’s Space Coast so click in <a href="" className='book'>BOOK NOW</a></p>
                </div>
                <video className='vd'   autoPlay loop muted >
                    <source src="/bb.mov" type="video/mp4" />
                        <track src="/bb.mov"/>
                </video>
                <div className='k'>
                    <h1 className='h1'>A bespoke space flight</h1>
                    <p className='text'>
                    Your experience is highly customizable—if you can dream it, our team is ready and waiting to work with you to make it a reality. From the menu and cocktails onboard, to the soundtrack and lighting, your individual preferences may be incorporated into your flight. For Explorers who reserve a full capsule, the modular design of the space lounge can accommodate changes to seating configurations and incorporate additional hospitality features, like tables for a unique dining service.
                    </p>
                    <Image className='tsw2' src="/f.png" width={1500}height={200}></Image>
                </div>
                <Pages/>
            </div> 
       <div className="background-video">
  <video autoPlay loop muted playsInline>
    <source src="/b.mp4" type="video/mp4" />    
  </video>
</div>

        </div>
        
  )
}



export default page
