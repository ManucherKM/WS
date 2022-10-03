import React from 'react'
import { Spinner } from "flowbite-react"

const Loading = () => {
    return (
        <>
            <Spinner
                color="success"
                aria-label="Extra large spinner example"
                size="xl"
            />
        </>
    )
}

export default Loading