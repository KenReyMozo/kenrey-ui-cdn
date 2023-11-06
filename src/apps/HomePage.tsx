import { Button, Modal, Sidebar } from "kenrey-component"
import React, { useState } from "react"
import { Shades } from "./List";

const HomePage : React.FC = () => {

    const [viewModal, setViewModal] = useState(false);

    const onOpenSidebar = () => {
        Sidebar.onOpen();
    }

    return (
        <>
            {Shades.map((item) => <Button key={item.id} variant='primary' shade={item.value}>{item.value}</Button>)}
            <hr/>
            <Button variant='primary' onClick={()=>setViewModal(true)}>
                Modal
            </Button>
            <hr/>
            <Button variant='primary' onClick={onOpenSidebar}>
                Sidebar
            </Button>
            <hr/>
            
            <Modal show={viewModal} onClose={()=>setViewModal(false)}
                style={{
                    width : 1200
                }}
                clickOutsideClose={true}
                header={'Modal Title'}
                footer={'Modal Footer'}>
                MODAL
            </Modal>
        </>
    )
}

export default HomePage;