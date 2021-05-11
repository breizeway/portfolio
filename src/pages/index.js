import { navigate } from 'gatsby'

import '../styles/index.css'

const windowAvailable = typeof window !== 'undefined'

const Index = () => {
    if (windowAvailable) navigate('/about')
    return null
}


export default Index
