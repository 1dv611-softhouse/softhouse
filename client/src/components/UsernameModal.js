import '../styles/username.css'
import { UsernameContext } from '../global/UsernameContext'
import { useEffect, useState, useContext } from 'react'

import React from 'react'
import ReactModal from 'react-modal'

function UsernameModal() {
  const { username, setUsername } = useContext(UsernameContext)
  const [isOpen, setIsOpen] = useState(true)

  const usernameStorage = 'SessionStorage::Username'

  useEffect(() => {
    const storage = window.sessionStorage.getItem(usernameStorage)

    if (storage !== null && storage.length > 0) {
      setUsername(storage)
      closeModal()
    }
  }, [])

  const closeModal = () => setIsOpen(false)

  const submitUsername = (e) => {
    e.preventDefault()

    const name = document.querySelector('#username').value

    if (name.length === 0) return

    window.sessionStorage.setItem(usernameStorage, name)
    setUsername(name)

    closeModal()
  }

  return (
    <ReactModal
      isOpen={isOpen}
      data={{
        background: '#ffffffa8;'
      }}
      style={
        {
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 15,
            overflow: 'auto'
          },
          content: {
            position: 'absolute',
            top: '30%',
            left: '30%',
            right: '30%',
            bottom: '30%',
            zIndex: 15,
            overflow: 'auto',
            border: '5px solid #dc823d',
            borderRadius: '30px'
          }
        }
        /* Object indicating styles to be used for the modal.
     It has two keys, `overlay` and `content`.
     See the `Styles` section for more details. */
      }
    >
      <div className="username-container">
        <h1>Select username</h1>
        <form className="username-form" onSubmit={(e) => submitUsername(e)}>
          <div className="username-row">
            <label for="username">Username</label>
            <input type="text" className="input-data" id="username" />
          </div>

          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </ReactModal>
  )
}

export default UsernameModal
