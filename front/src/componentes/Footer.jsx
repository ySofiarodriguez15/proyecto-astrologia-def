import gmail from '../images/GMAIL_icon-icons.com_65540.png'
import whatsapp from '../images/whatsapp_icon-icons.com_65542.png'



function Footer() {
    return ( 
    <>

        <div className="footer">
            <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"></svg>
                    </a>
                    <span className ="textoFooter">&copy; 2023 Astroplutonita, Inc</span>
                </div>
                <div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <div className='display-iconos'>
                        <div>
                            <li class="ms-3"><a className="text-muted" href="mailto:astroplutonia@gmail.com"><img src={gmail} alt='imagen no disponible' class ="iconos-contacto"/></a></li>
                        </div>
                        <div>
                            <li class="ms-3"><a className="text-muted" href="tel:+541162433000"><img src={whatsapp} alt='imagen no disponible' class ="iconos-contacto" /></a></li>
                        </div>
                    </div>
                </ul>
                </div>
            </footer>
        </div>
        </div>
    </>
    );
}


export default Footer;