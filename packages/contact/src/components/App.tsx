import produce from 'immer'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import ConfirmationModal from './Confirmation.modal'
import { modalsAtom } from '../atoms/modals.atom'
import { contactFormAtom, ContactForm } from '../atoms/contactForm.atom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  gap: 2rem;
`

function App() {
  const [contactForm, setContactForm] = useRecoilState(contactFormAtom)
  const setModals = useSetRecoilState(modalsAtom)
  const [canBeSent, setCanBeSent] = useState(false)

  useEffect(() => {
    setCanBeSent(
      Boolean(contactForm.name) &&
        Boolean(contactForm.surname) &&
        Boolean(contactForm.email) &&
        Boolean(contactForm.message)
    )
  }, [
    contactForm.name,
    contactForm.surname,
    contactForm.email,
    contactForm.message,
  ])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setContactForm(
      produce((draft) => {
        draft[name as keyof ContactForm] = value
      })
    )
  }

  const handleSend = () => {
    setModals(
      produce((draft) => {
        draft.confirmation = true
      })
    )
  }

  return (
    <>
      <ConfirmationModal />
      <Container>
        <h1>Tell us what do you think 🙂</h1>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={contactForm.name}
          onChange={handleChange}
        />
        <TextField
          id="surname"
          name="surname"
          label="Surname"
          variant="outlined"
          value={contactForm.surname}
          onChange={handleChange}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={contactForm.email}
          onChange={handleChange}
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          value={contactForm.message}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSend} disabled={!canBeSent}>
          Send
        </Button>
      </Container>
    </>
  )
}

export default App
