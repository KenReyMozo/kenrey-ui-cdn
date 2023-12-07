import { Modal, Sidebar } from "kenrey-component"
import React, { useState } from "react"
import { Shades } from "./List";
import Button from "../component/button/Button";

const HomePage : React.FC = () => {

    const [viewModal, setViewModal] = useState(false);

    const onOpenSidebar = () => {
        Sidebar.onOpen();
    }

    return (
        <>
            {Shades.map((item) => <Button key={item.id} style={{ margin: 5 }} variant='primary'>{item.value}</Button>)}
            <br/>
            {Shades.map((item) => <Button key={item.id} style={{ margin: 5 }} variant='secondary'>{item.value}</Button>)}
            <br/>
            {Shades.map((item) => <Button key={item.id} style={{ margin: 5 }} variant='tertiary'>{item.value}</Button>)}
            <br/>
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