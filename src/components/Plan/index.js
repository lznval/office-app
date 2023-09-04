import React, {useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {ReactSVG} from "react-svg";
import planSvg from "../../images/Plan.svg";
import Modal from "../Modal/Modal";
import './style.scss';
const Plan = () => {
    const places = useSelector(state => state.places.places);
    const svgItemRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [placeModal, setPlaceModal] = useState(null);
    const handleMouseMove = (event) => {
        let eventDoc;
        let doc;
        let body;

        event = event || window.event;

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        return { x: event.pageX, y: event.pageY };
    }
    const getPlace = (item) => {
        return (
            <div
                id={`Work_space_${item.id}_popup`}
                className='work__place--popup'
            >
                <span>id - {item.id}</span>
                <span>status - {item.status}</span>
                <span>user - {item.user}</span>
            </div>
        );
    }

    const handleModalClose = () => {
        setIsOpen(false);
    }
    return (
        <div className='plan'>
            <ReactSVG
                src={planSvg}
                ref={svgItemRef}
                beforeInjection={(svg) => {
                    if (!svg) {
                        console.log(svg);
                        return false;
                    }
                    places.map(item => {
                        const place = svg.getElementById(`Work_space_${item.id}`);
                        const placePopUp = document.getElementById(`Work_space_${item.id}_popup`);
                        place && place.classList.add('work__place', `work__place--${item.status}`);


                        place.addEventListener('mouseenter', ( event ) => {
                            // if(item.status === 'free' || item.status === 'reserved') placePopUp?.classList.add('show');
                            placePopUp?.classList.add('show');
                        }, false);

                        place.addEventListener('mousemove', ( event ) => {
                            const position = handleMouseMove(event);

                            if(!!placePopUp) {
                                placePopUp.style.top = `${position.y - placePopUp?.offsetHeight - 20}px`;
                                placePopUp.style.left = `${position.x - (placePopUp?.offsetWidth / 2)}px`;
                            }
                        }, false);

                        place.addEventListener('mouseleave', ( event ) => {
                            placePopUp?.classList.remove('show');
                        }, false);

                        place.addEventListener('click', () => {
                            setIsOpen(true);
                            setPlaceModal(item);
                            placePopUp?.classList.remove('show');
                        }, false)
                    })
                }}
            />
            {isOpen && <Modal handleClose={handleModalClose} item={placeModal} />}
            {places.map((item) => <div key={item.id}>{getPlace(item)}</div>)}
        </div>
    );
}

export default Plan;
