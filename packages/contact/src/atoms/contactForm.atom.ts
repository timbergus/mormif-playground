import { atom } from 'recoil'

export type ContactForm = {
  name: string
  surname: string
  email: string
  message: string
}

export const contactFormAtom = atom<ContactForm>({
  key: 'contactFormAtom',
  default: {
    name: '',
    surname: '',
    email: '',
    message: '',
  },
})
