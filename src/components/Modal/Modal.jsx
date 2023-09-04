import React from 'react';
import './style.scss';
import {useDispatch} from "react-redux";
import {changeStatusPlace} from "../../redux/actions";
const Modal = ({item, handleClose}) => {
    const dispatch = useDispatch();
    const changeStatus = (id, status) => {
        dispatch(changeStatusPlace({id, status}));
        handleClose();
    }
    const handleStatus = (status) => {
        switch (status) {
            case 'free':
                return 'Свободна'
            case 'isUsed':
                return 'Занята'
            case 'reserved':
                return 'Забронирована'
            default:
                return status
        }
    }
    return (
        <div className='modal'>
            <div className="modal__wrapper">
                <div className="modal__close" onClick={handleClose}>X</div>
                <div className="modal__title">Рабочее место №{item.id}</div>
                <div className="modal__status">Статус: {handleStatus(item.status)}</div>
                <div className="modal__info">Сотрудник: {item.name || 'Пусто'}</div>
                <input type="date"/>
                <div className="modal__buttons">
                    <button className="modal__button reserved" onClick={() => changeStatus(item.id, 'reserved')}>Забронировать</button>
                    <button className="modal__button isUsed" onClick={() => changeStatus(item.id, 'isUsed')}>Занять</button>
                    <button className="modal__button cancel" onClick={() => changeStatus(item.id, 'free')}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
