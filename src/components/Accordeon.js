import React, {useState, useRef} from 'react';
import Chevron from './Chevron';

function Accordeon(props) {

    const [activeState, setActiveState] = useState('')
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('')

    const content = useRef(null)

    function toggleAccordeon(props){
        setActiveState( activeState === '' ? 'active' : '')
        setHeight(activeState === 'active' ? '0px' : `${content.current.scrollHeight}px`);
        setRotate(activeState === 'active' ? '' : `rotate`);
        
    }

    return (
            <div className='accordeon-wrapper'>
                <button className={`accordeon ${activeState}`} onClick={toggleAccordeon}>
                    <h3 className='accordeon-title'>{props.title}</h3>
                    <Chevron className={`accordeon-icon ${rotate}`} width={10} fill={'#000000'}/>
                </button>
                <div ref={content} style={{maxHeight: `${height}`}} className='accordeon-content'>
                    <div className='accordeon-text' dangerouslySetInnerHTML={{__html: props.content}}>
                    </div>
                </div>
            </div>
    );
}

export default Accordeon;