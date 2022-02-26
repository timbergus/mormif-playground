import { atom } from 'recoil'

export type Modals = {
  confirmation: boolean
}

export const modalsAtom = atom<Modals>({
  key: 'modalsAtom',
  default: {
    confirmation: false,
  },
})
