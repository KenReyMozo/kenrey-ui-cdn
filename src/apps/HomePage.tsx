import { Button } from "kenrey-component"
import React, { useState } from "react"
import Modal from "../component/modal/Modal";

const HomePage : React.FC = () => {

    const [viewModal, setViewModal] = useState(false);

    return (
        <div>
            <Button variant='primary'>
                Primary
            </Button>
            <Button variant='primary'>
                TEST 1
            </Button>
            <Button variant='primary' onClick={()=>setViewModal(true)}>
                TEST 2
            </Button>
            <Modal show={viewModal} onClose={()=>setViewModal(false)}
                header={'Modal Title'}
                footer={'Modal Footer'}>
                MODAL
            </Modal>
        </div>
    )
}

export default HomePage;