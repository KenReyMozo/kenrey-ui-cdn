import { Modal, Sidebar } from "kenrey-component"
import React, { useState } from "react"
import { Shades } from "./List";
import Button from "../component/button/Button";
import { BeakerIcon } from '@heroicons/react/24/solid'

const HomePage : React.FC = () => {

    const [viewModal, setViewModal] = useState(false);

    const onOpenSidebar = () => {
        Sidebar.onOpen();
    }

    return (
        <>
            <div style={{ display: 'flex'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5} variant='primary' size="lg" lIcon={<BeakerIcon/>} rIcon={<BeakerIcon/>}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5} variant='secondary' lIcon={<BeakerIcon/>} rIcon={<BeakerIcon/>}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5} variant='tertiary' lIcon={<BeakerIcon/>} rIcon={<BeakerIcon/>}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5} variant='outline' lIcon={<BeakerIcon/>} rIcon={<BeakerIcon/>}>{item.value}</Button>)}
            </div>
            <br/>
            <div style={{ display: 'flex'}}>
            {Shades.map((item, i) => <Button key={item.id} style={{ margin: 3 }} disabled={i>5} variant='link' size="sm" lIcon={<BeakerIcon/>} rIcon={<BeakerIcon/>}>{item.value}</Button>)}
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