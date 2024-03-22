import { useEffect } from 'react'
import style from './Head.module.css'


export default function Head() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
 
    return <>
    
    <div className={style.headComponent }>
     <div className='container h-100'>
        <div className={style.content}>
        <div className='text-center'>
        <h1 className={`${style.mainText} headTitle`}>Get Awesome.</h1>
      <p className={style.mainPa}>We are an innovative company making digital stuff.</p>
    
      <button className='mainBg btn text-light me-3 fs-5'>Read More</button>
      <button className='btn mainbrdr mainbrdr text-light fs-5'>Contact</button>
        </div>

        </div>
  
     </div>
    </div>
      
    </>
}
