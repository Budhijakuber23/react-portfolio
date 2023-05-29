import React from 'react'
import Navbar from './navbar'
import './skill.css'
import Card from './card'

function Skill() {

  return (
    <div className='gradient'>
        <div className='Navbar'>
            <Navbar/>
        </div>


        <div className="skills-page">
        {/* <h1>My Skills</h1> */}
        </div>

    <div className='card-container'>
      {/* it contains four cards */}

      {/* card - 1 */}
      <Card 
        image="https://cdn.dribbble.com/users/1124806/screenshots/9158801/media/351d703714f955dbc1e6e5275b080b53.jpg"
        title="Website Development"
        description="See Projects"
        url="https://github.com/Budhijakuber23/WEBSITE-DEVELOPMENT/blob/main/README.md"
      />

      <Card
        image="https://iou.ac/wp-content/uploads/2021/07/Object-Oriented-Programming-1.png"
        title="OOPS in JAVA"
        description="See Projects"

        url="https://github.com/Budhijakuber23/OOPS/blob/main/README.md"
      />

      <Card
        image="https://plus.diolinux.com.br/uploads/default/optimized/3X/7/e/7ea2f70ed4044977a4f42e95f6b1e26a91a772b3_2_1380x776.jpeg"
        title="Operating Systems in C"
        description="See Projects"

        url="https://github.com/Budhijakuber23/OPERATING-SYSTEMS/blob/main/README.md"
      />

      <Card
        image="https://fsa.zobj.net/crop.php?r=eddnCYGycLse54L0959Wn0AtZZhg877MsInPj40hiomrj7WZAuKzPLAprdHanFFJhABg1PcG1-kDVNpRRgEcZSO3r4UdtK-0p7k5P5boYq3cWS6URpJtoh7UlPScZdnqUD9CmYedq96zLNvF"
        title="CLI Based Python Projects"
        description="See Projects"

        url="https://github.com/Budhijakuber23/CLI-BASED/blob/main/README.md"
      />
    </div>
      
  </div>
  )
}

export default Skill
