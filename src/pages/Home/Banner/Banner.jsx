import React from 'react';
import banner1 from '../../../assets/b.webp';
import banner2 from '../../../assets/b2.jpg';
import banner3 from '../../../assets/b3.webp';
import banner4 from '../../../assets/b4.jpg';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import mar1 from '../../../assets/marque/mar-1.jpg'
import mar2 from '../../../assets/marque/mar2.jpg'
import mar3 from '../../../assets/marque/mar3.jpg'
import mar4 from '../../../assets/marque/mar4.jpg'
import mar5 from '../../../assets/marque/mar5.jpg'



const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                <div className="absolute flex h-full left-0 top-0  bg-gradient-to-b from-[#151515] to-[rgba(21,21,21,0)]">

                <div className='w-[500px] h-[470px] mt-8 p-5 rounded-lg'>
                        <Marquee className='rounded-2xl w-[500px] mt-5'>
                          <div  className='w-[500px] h-[470px]'>
                          <img className='w-[500px] h-[470px]'  src={mar3} alt="" />
                          </div>
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar4} alt="" />
                          </div >
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar5} alt="" />
                          </div>
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar1} alt="" />
                          </div>                  
                        </Marquee>
                      
                    </div>
                    <div className='text-white space-y-7 w-1/2 mx-auto mt-24'>
                        <h2 className="text-6xl font-bold">Unlocking Learning Potential Through Play Toys</h2>
                        <p className="text-2xl">Playfulness and Fun: Toys bring joy and entertainment into our lives. They provide an outlet for playfulness, laughter, and lightheartedness!</p>
                        <div>
                            <button className="btn btn-primary mr-5"><Link to='/register'>Register</Link></button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-lg" />
                <div className="absolute flex h-full left-0 top-0  bg-gradient-to-b from-[#151515] to-[rgba(21,21,21,0)]">

                <div className='w-[500px] h-[470px] mt-8 p-5 rounded-lg'>
                        <Marquee className='rounded-2xl w-[500px] mt-5'>
                          <div  className='w-[500px] h-[470px]'>
                          <img className='w-[500px] h-[470px]'  src={mar3} alt="" />
                          </div>
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar4} alt="" />
                          </div >
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar5} alt="" />
                          </div>
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar1} alt="" />
                          </div>                        
                        </Marquee>
                      
                    </div>
                    <div className='text-white space-y-7 w-1/2 mx-auto mt-24'>
                        <h2 className="text-6xl font-bold">From Imagination to Reality: The Artistry of Toy Making</h2>
                        <p className="text-2xl">Education and Learning: Toys can be powerful educational tools, fostering learning and development in children. The opportunity to contribute to the creation of toys </p>
                        <div>
                            <button className="btn btn-primary mr-5"><Link to='/register'>Register</Link></button>
                        </div>
                    </div>
                    
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                <div className="absolute flex h-full left-0 top-0  bg-gradient-to-b from-[#151515] to-[rgba(21,21,21,0)]">

                <div className='w-[500px] h-[470px] mt-8 p-5 rounded-lg'>
                        <Marquee className='rounded-2xl w-[500px] mt-5'>
                          <div  className='w-[500px] h-[470px]'>
                          <img className='w-[500px] h-[470px]'  src={mar3} alt="" />
                          </div>
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar4} alt="" />
                          </div >
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar5} alt="" />
                          </div>
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar1} alt="" />
                          </div>                   
                        </Marquee>
                      
                    </div>
                    <div className='text-white space-y-7 w-1/2 mx-auto mt-24'>
                        <h2 className="text-6xl font-bold"> Toys Shape Childhood Development Entertainment</h2>
                        <p className="text-2xl">Emotional Impact: Toys can have a profound emotional impact on individuals, providing comfort, companionship, and a sense of security.</p>
                        <div>
                            <button className="btn btn-primary mr-5"><Link to='/register'>Register</Link></button>
                        </div>
                    </div>
                    
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                <div className="absolute flex h-full left-0 top-0  bg-gradient-to-b from-[#151515] to-[rgba(21,21,21,0)]">

                <div className='w-[500px] h-[470px] mt-8 p-5 rounded-lg'>
                        <Marquee className='rounded-2xl w-[500px] mt-5'>
                          <div  className='w-[500px] h-[470px]'>
                          <img className='w-[500px] h-[470px]'  src={mar3} alt="" />
                          </div>
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar4} alt="" />
                          </div >
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar5} alt="" />
                          </div>
                          <div  className='w-[500px] h-[470px]'>
                          <img  className='w-[500px] h-[470px]' src={mar1} alt="" />
                          </div>
                        </Marquee>
                    </div>
                    <div className='text-white space-y-7 w-1/2 mx-auto mt-24'>
                        <h2 className="text-6xl font-bold">Toyland Chronicles: Captivating Stories of Beloved Playthings</h2>
                        <p className="text-2xl">Innovation and Advancement: The toy industry is constantly evolving, with new technologies, materials, and design concepts emerging!</p>
                        <div>
                            <button className="btn btn-primary mr-5"><Link to='/register'>Register</Link></button>                          
                        </div>
                    </div>
                    
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

           

        </div>
    );
};

export default Banner;