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
                    <span className ="textoFooter">&copy; 2022 Astroplutonita, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a className="text-muted" href="mailto:astroplutonia@gmail.com"><svg className="bi" width="24" height="24"><img src={gmail} alt='imagen no disponible'/></svg></a></li>
                    <li class="ms-3"><a className="text-muted" href="tel:+541162433000"><svg className="bi" width="24" height="24"><img src={whatsapp} alt='imagen no disponible' /></svg></a></li>
                </ul>
        
            </footer>
        </div>
        </div>
    </>
    );
}


export default Footer;