import { Button, Modal, Sidebar } from "kenrey-component"
import React, { useState } from "react"

const HomePage : React.FC = () => {

    const [viewModal, setViewModal] = useState(false);

    const onOpenSidebar = () => {
        Sidebar.onOpen();
    }

    return (
        <div>
            <Button variant='primary' onClick={onOpenSidebar}>
                Primary
            </Button>
            <Button variant='primary'>
                TEST 1
            </Button>
            <Button variant='primary' onClick={()=>setViewModal(true)}>
                TEST 2
            </Button>
            <Modal show={viewModal} onClose={()=>setViewModal(false)}
                style={{
                    width : 1200
                }}
                clickOutsideClose={true}
                header={'Modal Title'}
                footer={'Modal Footer'}>
                MODAL
            </Modal>
        </div>
    )
}

export default HomePage;