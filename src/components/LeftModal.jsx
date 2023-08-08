import React from 'react';
import classes from '../modals/LeftModal.module.css';

function LeftModal({child, vis, setVis}) {
    const roatClasses = [classes.LModal];
    const contentClasses = [classes.LModalContent];
    if (vis) {
        roatClasses.push(classes.active);
        contentClasses.push(classes.open);
    };
    return(
    <div className={roatClasses.join(' ')} onClick={() => setVis(false)}>
        <div className={contentClasses.join(' ')} onClick={e => e.stopPropagation()}>
            {child}
        </div>
    </div>
    );
};
export default LeftModal;