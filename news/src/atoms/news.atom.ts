import { atom, selector } from 'recoil'

type News = {
  id: number
  title: string
  description?: string
  image?: string
  date?: string
  link?: string
}

export const newsAtom = atom<News[]>({
  key: 'newsAtom',
  default: [
    {
      id: 1,
      title: 'News 1',
    },
    {
      id: 2,
      title: 'News 2',
    },
    {
      id: 3,
      title: 'News 3',
    },
  ],
})

export const asyncNewsAtom = selector({
  key: 'asyncNewsAtom',
  get: async ({ get }) => {
    const news = get(newsAtom)
    const response = new Promise((resolve) => setTimeout(resolve, 5000))
    await response
    return news
  },
})
