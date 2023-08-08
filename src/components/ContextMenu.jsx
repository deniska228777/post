import cl from '../modals/ContextMenu.module.css';

function ContextMenu({x=-100, y=-100, onClose, onClick}) {
    return(    
    <div className={cl.ContextMenu} style={{left: x, top: y}} onClick={onClose}>
        <div className={cl.ContextContent}><input className={cl.btn} type='button' onClick={() => onClick(true)} value='lalala'/></div>
    </div>
    );
};


export default ContextMenu;