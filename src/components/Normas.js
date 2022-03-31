import React from 'react';
import './styles/Main.scss'
import {Button} from '../components'

const Normas = () => {
    return (
        <div className='main'>
            <div className='main__container'>
                <div className="main__content">
                    <div className="text">
                            
                            <h1>Aqui se pone las normas o lo que sea, incluso una imagen</h1>
                            
                    <div className='hero-btns'>
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
                    <img src={''} alt="" />
                </div>
                </div>
            </div>
    )
}
export default Normas;