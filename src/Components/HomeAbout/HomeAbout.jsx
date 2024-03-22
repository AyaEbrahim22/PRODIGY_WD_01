import style from './HomeAbout.module.css'
import aboutImg from '../../assets/imgs/aboutImg.jpg'

export default function HomeAbout() {
  
  
  return <>
  
  <div className={style.AboutComponent}>
    <div className='container'>

        <div className='row align-items-center justify-content-center text-center'>
        <div className='col-md-6'>
            <img src={aboutImg} alt='About Img' className='w-100 h-100'/>
        </div>
        
        <div className='col-md-6'>
        <h2 className='mt-3 fw-bolder'>WHO WE ARE</h2>
        <p className={style.para}>
        We are an innovative company. We develop and design <span className='maincolor'>websites</span> for
           customers around the world. Our clients are some of the most forward-looking companies in the world.
        </p>
        <button className='btn btndark'>Read More</button>
        </div>
        </div>

    </div>
  </div>

 
  
  </>
}
