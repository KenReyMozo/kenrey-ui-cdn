import { Sidebar } from "kenrey-component"
import React, { useState } from "react"
import { Shades } from "./List";
import Button from "../component/button/Button";
import Modal from "../component/modal/Modal";

const HomePage : React.FC = () => {

    const [viewModal, setViewModal] = useState(false);

    const onOpenSidebar = () => {
        Sidebar.onOpen();
    }

    return (
        <>
            <small>Primary</small><br/>
            {Shades.map((item) => <Button key={item.id} variant='primary' shade={item.value}>{item.value}</Button>)}
            <hr/>
            <small>Neutral</small><br/>
            {Shades.map((item) => <Button key={item.id} variant='neutral' shade={item.value}>{item.value}</Button>)}
            <hr/>
            <small>Destructive</small><br/>
            {Shades.map((item) => <Button key={item.id} variant='destructive' shade={item.value}>{item.value}</Button>)}
            <hr/>
            <small>Warning</small><br/>
            {Shades.map((item) => <Button key={item.id} variant='warning' shade={item.value}>{item.value}</Button>)}
            <hr/>
            <small>Success</small><br/>
            {Shades.map((item) => <Button key={item.id} variant='success' shade={item.value}>{item.value}</Button>)}
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