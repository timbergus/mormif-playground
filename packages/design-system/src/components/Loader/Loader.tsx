import { FC } from 'react'
import { BallTriangle } from 'react-loader-spinner'

type LoaderProps = {
  color?: 'blue' | 'green'
}

const Loader: FC<LoaderProps> = ({ color = 'green' }) => (
  <BallTriangle height="100" width="100" color={color} ariaLabel="loading" />
)

export default Loader
