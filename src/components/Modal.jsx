import React from 'react';
import classes from '../modals/Modal.module.css';

function Modal({child, vis, setVis}) {
    const roatClasses = [classes.Modal];
    if (vis) {
        roatClasses.push(classes.active);
    };
    return(
    <div className={roatClasses.join(' ')} onClick={() => setVis(false)}>
        <div className={classes.ModalContent} onClick={e => e.stopPropagation()}>
            {child}
        </div>
    </div>
    );
};
export default Modal;