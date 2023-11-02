import { ReactNode, useEffect, useState } from "react";
import React from "react";
import styles from '../../../index.module.css';
import { Colorable } from "../component";


type ModalT = {
    show: boolean;
    onClose: ()=>void;
    header?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
} & Colorable

const Modal : React.FC<ModalT> = (props) => {

    const {
        show,
        onClose,
        header,
        footer,
        children,
    } = props;

    const [_show, _setShow] = useState(show);

    useEffect(() => {

        const interval = setTimeout(() => _setShow(show), 200);
        return () => {
          clearTimeout(interval);
        };
      }, [show]);

    return (
        <>
        {_show &&
        <div className={`modal-container ${_show ? '' : 'modal-hide'}`}>
            <div className={`modal-content`}>
                {header &&
                <div className={`modal-header`}>
                    {header}
                </div>
                }
                <div className={`modal-body`}>
                    {children}
                </div>
                {footer &&
                <div className={`modal-footer`}>
                    {footer}
                    <button onClick={onClose}>X</button>
                </div>
                }
            </div>
        </div>
        }
        </>
    )
}

export default Modal