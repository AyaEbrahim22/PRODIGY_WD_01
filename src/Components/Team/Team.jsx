import style from './Team.module.css'

import img1 from '../../assets/imgs/team-1.jpg'
import img2 from '../../assets/imgs/team-2.jpg'



export default function Team() {



    return <>

        <div className={style.teamComponent}>
            <div className='container'>
                <h2 className='text-center position-relative fs-1 fw-bolder'>Creative Team<span className={style.titleBg}>C</span></h2>
                <p className='text-secondary fs-5 text-center mb-5'>We are digital thinkers</p>

                <div className='row g-4'>
                    <div className='col-md-3'>
                        <div className={`${style.imgHover} position-relative overflow-hidden`}>
                            <img src={img1} alt='Team Img 1' className='w-100' />
                            <div className={style.layer}>
                                <div>
                                    <i className="fa-brands fa-facebook-f" role='button'></i>
                                    <i className="fa-brands fa-twitter mx-3" role='button'></i>
                                    <i className="fa-brands fa-linkedin-in" role='button'></i>
                                </div>
                                <div>
                                    <h5 className='m-0'>LUKE CAGE</h5>
                                    <h6>Founder & CEO</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className={`${style.imgHover} position-relative overflow-hidden`}>
                            <img src={img2} alt='Team Img 2' className='w-100' />
                            <div className={style.layer} >
                                <div>
                                    <i className="fa-brands fa-facebook-f" role='button'></i>
                                    <i className="fa-brands fa-twitter mx-3" role='button'></i>
                                    <i className="fa-brands fa-linkedin-in" role='button'></i>
                                </div>
                                <div>
                                    <h5 className='m-0'>MATT MURDOCK</h5>
                                    <h6>Lead Developer</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className={`${style.imgHover} position-relative overflow-hidden`}>
                            <img src={img1} alt='Team Img 1' className='w-100' />
                            <div className={style.layer}>
                                <div>
                                    <i className="fa-brands fa-facebook-f" role='button'></i>
                                    <i className="fa-brands fa-twitter mx-3" role='button'></i>
                                    <i className="fa-brands fa-linkedin-in" role='button'></i>
                                </div>
                                <div>
                                    <h5 className='m-0'>LUKE CAGE</h5>
                                    <h6>Founder & CEO</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className={`${style.imgHover} position-relative overflow-hidden`}>
                            <img src={img2} alt='Team Img 1' className='w-100' />
                            <div className={style.layer}>
                                <div>
                                    <i className="fa-brands fa-facebook-f" role='button'></i>
                                    <i className="fa-brands fa-twitter mx-3" role='button'></i>
                                    <i className="fa-brands fa-linkedin-in" role='button'></i>
                                </div>
                                <div>
                                    <h5 className='m-0'>MATT MURDOCK</h5>
                                    <h6>Lead Developer</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </>
}
