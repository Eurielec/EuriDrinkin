import React, { useState } from 'react'
//import '../styles/Main.scss'
//import man from './assets/alejandro.png'
import { Button } from '../components';
import  Link from 'next/link';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                        <p>ah</p>
                        <h1>que dolor</h1>
                        <p>me duelen los ojos por scss</p>
                        <div>
                        <div className='hero-btns'>
                            <Link to="/Normas">
                                <Button
                                    className='btns'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--large'
                                >
                                    Normas
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/juega">
                                <Button
                                    className='btns'
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large'
                                    
                                >Empieza a jugar <i className='far fa-play-circle' /></Button>
                            </Link>

                        </div>
                        </div>
                    </div>
                </div>
                {/* <div className="main__img">
                    <img src={man} alt="" />
                </div> */}
            </div>
        </div>
    )
}


export default Main
