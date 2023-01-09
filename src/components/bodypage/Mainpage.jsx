import React from 'react'
import './mainpage.css'
import vaccum from '../../components/assets/vaccum.png'
import whatsapp from '../../components/assets/whatsapp.png'
import twitter from '../../components/assets/twitter.png'
import facebook from '../../components/assets/facebook.png'

export default function mainpage() {
  return (
    <div className='bodypage'>
      <div className='nameandImageSection'>
        <div className='nameSection'>
          <h1>
            The Future of Cleaning Technology
          </h1>
           
           <h3>
            Invented by the young minds with a key of innovation in Cleanliness
           </h3>
            <div className='buttonAndOther'>
                <button>
                    Connect Now
                </button>
            </div>
           
        </div>
        <div className='imageSection'>
            <div className='imageContainer'>
                <img src={vaccum}/>
            </div>
        </div>

      </div>
    </div>
  )
}
