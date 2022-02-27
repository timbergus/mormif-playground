import produce from 'immer'
import styled from 'styled-components'
import Box from '@mui/system/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useRecoilState, useRecoilValue } from 'recoil'

import { modalsAtom } from '../atoms/modals.atom'
import { contactFormAtom } from '../atoms/contactForm.atom'

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  background-color: white;
  text-align: center;
`

const ConfirmationModal = () => {
  const contactForm = useRecoilValue(contactFormAtom)
  const [modals, setModals] = useRecoilState(modalsAtom)

  const handleClose = () => {
    setModals(
      produce((draft) => {
        draft.confirmation = false
      })
    )
  }

  return (
    <StyledModal
      open={modals.confirmation}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Card>
        <Typography id="modal-title" variant="h3">
          Thanks for contact us!
        </Typography>
        <Typography id="modal-description" variant="body1">
          Thanks {contactForm.name} {contactForm.surname} for contact us! As
          soon as our team review your message, we will contact you to{' '}
          {contactForm.email}.
        </Typography>
      </Card>
    </StyledModal>
  )
}

export default ConfirmationModal
