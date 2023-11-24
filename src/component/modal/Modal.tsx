import { ReactNode, useEffect, useState } from "react";
import React from "react";
import { Colorable } from "../component";

type ModalT = {
    show: boolean;
    onClose: ()=>void;
    header?: ReactNode;
    footer?: ReactNode;
    clickOutsideClose?: boolean;
} & Colorable & React.ComponentProps<'div'>

const Modal : React.FC<ModalT> = (props) => {

    const {
        show,
        onClose,
        header,
        footer,
        children,
        variant,
        shade,
        clickOutsideClose,
        ...cleanProps
    } = props;

    const [_show, _setShow] = useState(show);

    useEffect(() => {
        if(show) {
            _setShow(show)
            return;
        }
        const interval = setTimeout(() => _setShow(show), 200);
        return () => {
          clearTimeout(interval);
        };
      }, [show]);

    const onClickOutside = () => {
        if(clickOutsideClose===false) return;
        onClose()
    };

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

    return (
        <>
        {_show &&
        <div className={`modal-container ${show ? '' : 'modal-hide'}`} onClick={onClickOutside}>
            <div className={`modal-content`} onClick={stopPropagation} {...cleanProps}>
                <div className={`modal-header ${variant ? `${variant}${shade?`-${shade}`:''}` : 'primary'}`}>
                    {header}
                    {onClose &&
                    <button className={`modal-close`} onClick={onClose}>X</button>
                    }
                </div>
                <div className={`modal-body`}>
                    {children}
                </div>
                {footer &&
                <div className={`modal-footer ${variant ? `${variant}${shade?`-${shade}`:''}` : 'primary'}`}>
                    {footer}
                </div>
                }
            </div>
        </div>
        }
        </>
    )
}

export default Modal