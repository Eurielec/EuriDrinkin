import React, { useState } from 'react'
import './styles/Main.scss'
import man from './assets/alejandro.png'
import { Button } from './Button';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>ah</p>
                            <h1>que dolor</h1>
                            <p>me duelen los ojos por scss</p>
                    <div className='hero-btns'>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                        >Normas</Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={console.log('hey')}
                            >Empieza a jugar <i className='far fa-play-circle' /></Button>
                    </div>
                    </div>
                </div>
                <div className="main__img">
                    <img src={man} alt="" />
                </div>
                </div>
            </div>
    )
}


export default Main
