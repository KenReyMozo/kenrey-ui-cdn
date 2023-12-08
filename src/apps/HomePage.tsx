
import React, { useState } from "react"
import { Shades } from "./List";
import Modal from "../component/modal/Modal";
import Sidebar from "../component/sidebar/Sidebar";
import { Button } from "@kenreymozo/kenrey-component";
import SectionButtons from "../sections/section-buttons/SectionButton";

const HomePage : React.FC = () => {

    const [viewModal, setViewModal] = useState(false);

    const onOpenSidebar = () => {
        Sidebar.onOpen();
    }

    return (
        <>
            <SectionButtons/>
            <div style={{ display: 'flex', flexWrap : 'wrap', alignItems : 'center'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i===5 || i===2 || i===8} variant='primary' size={i<3 ? 'sm' : i>5 ? 'lg' : 'md'} isDestructive={i<3}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex', flexWrap : 'wrap', alignItems : 'center'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i===5 || i===2 || i===8} variant='secondary' size={i<3 ? 'sm' : i>5 ? 'lg' : 'md'} isDestructive={i<3}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex', flexWrap : 'wrap', alignItems : 'center'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i===5 || i===2 || i===8} variant='tertiary' size={i<3 ? 'sm' : i>5 ? 'lg' : 'md'} isDestructive={i<3}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex', flexWrap : 'wrap', alignItems : 'center'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i===5 || i===2 || i===8} variant='outline' size={i<3 ? 'sm' : i>5 ? 'lg' : 'md'} isDestructive={i<3}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex', flexWrap : 'wrap', alignItems : 'center'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i===5 || i===2 || i===8} variant='link' size={i<3 ? 'sm' : i>5 ? 'lg' : 'md'} isDestructive={i<3}>{item.value}</Button>)}
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