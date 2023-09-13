/* eslint-disable react/prop-types */
import { useState } from 'react'
import './create.scss'
import { createPortal } from 'react-dom';


function Create(props) {
    const [img, setImg] = useState('')
    const [desc, setDesc] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }

    return createPortal(
        <>
            <div className="overlay"></div>
            <div className="popup">
                <div className="popup-inner">
                    <button onClick={props.toggle}>X</button>
                    <h2>Create a post</h2>
                    <form onSubmit={handleLogin}>
                        <label>
                            Select a photo:
                            <input type="file" value={img} onChange={e => setImg(e.target.value)} />
                        </label>
                        <label>
                            Write a caption:
                            <input type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder='write something..' />
                        </label>
                        <button onClick={props.toggle} type="submit">Create</button>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Create
