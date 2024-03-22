import { useEffect } from 'react'
import HomeAbout from '../HomeAbout/HomeAbout'
import style from './About.module.css'

export default function About() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return <>
  <div className={style.aboutComponent}>
    <div className='container h-100'>
     <div className='d-flex align-items-center justify-content-center h-100 flex-column text-light'>
        <h1 className={`${style.title} headTitle`}>Create With Bezel</h1>
        <p className={style.para}>We help ambitious companies create new value.</p>
   
        <button className='btn mainbrdr text-light me-3 fs-5'>Hire Us</button>
   
     </div>
    </div>

  </div>

  <HomeAbout/>

  </>
}
