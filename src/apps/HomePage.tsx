
import React, { useState } from "react"
import { Shades } from "./List";
import Modal from "../component/modal/Modal";
import Sidebar from "../component/sidebar/Sidebar";
import Button from "../component/button/Button";

const HomePage : React.FC = () => {

    const [viewModal, setViewModal] = useState(false);

    const onOpenSidebar = () => {
        Sidebar.onOpen();
    }

    return (
        <>
            <div style={{ display: 'flex', flexWrap : 'wrap'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5 || i===2} variant='primary' isDestructive={i<3}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex', flexWrap : 'wrap'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5 || i===2} variant='secondary' isDestructive={i<3}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex', flexWrap : 'wrap'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5 || i===2} variant='tertiary' isDestructive={i<3}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex', flexWrap : 'wrap'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5 || i===2} variant='outline' isDestructive={i<3}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex', flexWrap : 'wrap'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5 || i===2} variant='link' isDestructive={i<3}>{item.value}</Button>)}
            </div>
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