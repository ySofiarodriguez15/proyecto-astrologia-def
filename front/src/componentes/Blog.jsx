import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function About() {
    return ( 

        <main class="container justify-content-center">
                <div class="row container">
                    <div class="col-md-8 container">
                        <article class="blog-post mt-5">
                        <h2 class="display-5 link-body-emphasis mb-1">New feature</h2>
                        <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                        </article>
                    </div>
                    <div class="col-md-4 mt-3 container">
                        <div class="position-relative">
                            <div class="p-4 mb-0 bg-body-tertiary rounded">
                                <h4 class="fst-italic">Hola!</h4>
                                <p class="mb-0">Te invitamos a leer un poco sobre temática astrológica y dejarnos tu comentario</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-9">
                        <hr></hr>
                        </div>
                    </div>
                    <div class="row container">
                    <div class="col-md-8">
                        <article class="blog-post mt-5">
                        <h2 class="display-5 link-body-emphasis mb-1">New feature</h2>
                        <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                        </article>
                    </div>
                    <div class="col-md-4 mt-0">
                    <div class="p-4">
                        <h4 class="fst-italic">Archivos</h4>
                            <ol class="list-unstyled mb-0">
                                <li><a href="#">March 2021</a></li>
                                <li><a href="#">February 2021</a></li>
                                <li><a href="#">January 2021</a></li>
                                <li><a href="#">December 2020</a></li>
                                <li><a href="#">November 2020</a></li>
                                <li><a href="#">October 2020</a></li>
                                <li><a href="#">September 2020</a></li>
                                <li><a href="#">August 2020</a></li>
                                <li><a href="#">July 2020</a></li>
                                <li><a href="#">June 2020</a></li>
                                <li><a href="#">May 2020</a></li>
                                <li><a href="#">April 2020</a></li>
                            </ol>
                        </div>
                    </div>
                </div>

                </div>

                <nav>
                    <button className="botonHome">
                    <a href= "/" className="text-dark"> Home </a>
                    </button>
                </nav>

        
        

        </main>
    );
}

export default About;