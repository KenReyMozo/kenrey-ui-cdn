import { Button } from "kenrey-ui"
import React from "react"

const HomePage : React.FC = () => {

    return (
        <div>
            <Button className="btn" variant='primary'>
                Primary
            </Button>
            <Button className="btn" variant='primary'>
                TEST 1
            </Button>
            <Button className="btn" variant='primary'>
                TEST 2
            </Button>
        </div>
    )
}

export default HomePage;