import { useEffect } from 'react'
import HomeContact from '../HomeContact/HomeContact'
import style from './Contact.module.css'

export default function Contact() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return <>
   <div className={style.contactComponent}>
     <div className='container h-100'>
        <div className='d-flex align-items-center justify-content-center flex-column h-100'>
            <h1 className={`${style.title} headTitle`}>Contact us</h1>
           
        </div>
     </div>
   </div>

   <HomeContact/>
  
  </>
}
