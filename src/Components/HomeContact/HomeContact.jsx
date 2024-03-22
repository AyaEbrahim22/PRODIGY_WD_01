import style from './HomaContact.module.css'


export default function HomeContact() {


    return <>
        <div className={style.contactComponent}>
            <div className='container'>
                 
                 <div className='row gx-4 gy-4'>
                    <div className='col-md-6'>
                        <div className='w-100 h-100'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1806996994032!2d55.27170517521154!3d25.197127977711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699f0f1fdc71%3A0x7404206cb27a61a3!2sBurj%20Khalifa%20Tower!5e0!3m2!1sen!2seg!4v1711058231491!5m2!1sen!2seg" width="100%" height='100%'></iframe>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div>
                           <form>
                           <h2 className='text-center position-relative fs-1 fw-bolder'>Get In Touch<h3 className={style.titleBg}>G</h3></h2>
                            <p className='text-secondary fs-5 text-center'>Let's work together.</p>

                            <label id='nameInput'>Your Name</label>
                            <input id='nameInput' type='text' className='form-control mb-3'/>

                            <label id='nameInput'>Your Email</label>
                            <input id='nameInput' type='email' className='form-control mb-3'/>

                            <label id='nameInput'>Phone Number</label>
                            <input id='nameInput' type='tel' className='form-control mb-3'/>

                            <label id='nameInput'>Your Message</label>
                            <textarea id='nameInput' type='text' className='form-control mb-3' rows={5}></textarea>

                            <button className={style.sendBtn}>Send Message</button>

                           </form>
                        </div>
                    </div>
                 </div>

            </div>
        </div>
    </>
}
