
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './Topbar.module.css'
import { Link } from 'react-router-dom';

export default function Topbar() {
 
   window.addEventListener('scroll', function(){
 
    if(window.scrollY >= 300){
  
         document.getElementById('navBg').classList.add('navBgdark')
         document.getElementById('navBg').classList.remove('border-bottom')
      } else{
        document.getElementById('navBg').classList.remove('navBgdark')
        document.getElementById('navBg').classList.add('border-bottom')

      }
   })
   
    return <>
    
    <Navbar id='navBg' expand="lg" className="p-0 border-bottom fixed-top navtrans">
      <Container>
        <Navbar.Brand className='p-0  text-light' href="/"><h2 className={style.logoName }>bezel<span className='maincolor'>.</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light bg-light' />
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mLinks text-center">
            <Link to={'/'} className='text-light me-3 text-decoration-none'>Home</Link>
            <Link to={'/about'} className='text-light me-3 text-decoration-none'>About</Link>
            <Link to={'/contact'} className='text-light text-decoration-none me-2'>Contact</Link>
          </Nav>

          <Nav className="socialBorder text-center">
            <Nav.Link href="#" className='text-light'><i className="fa-brands fa-facebook-f"></i></Nav.Link>
            <Nav.Link href="#" className='text-light'><i className="fa-brands fa-twitter"></i></Nav.Link>
            <Nav.Link href="#" className='text-light'><i className="fa-brands fa-instagram"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    
    </>

}
