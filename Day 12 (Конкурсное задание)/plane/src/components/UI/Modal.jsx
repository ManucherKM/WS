import React from 'react'

const Modal = (props) => {

    const modalNone = () => {
        props.click(false)
    }

    return (
        <div onClick={modalNone} className={`fixed bg-opac flex flex-col items-center justify-center z-10 top-0 left-0 w-screen h-screen ${props.dopStyles}`}>
            <div className="container flex flex-col items-center justify-center">
                <div className='bg-white p-5 rounded-xl' onClick={e => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal