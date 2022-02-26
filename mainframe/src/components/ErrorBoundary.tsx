import { Component, ErrorInfo } from 'react'

type Props = {
  message: string
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error)
    console.log(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.props.message}</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
