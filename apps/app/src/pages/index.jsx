import App from '../components/App'
import {updateObjectInArrayImmutable} from 'wyx-utils'

export default function Home() {
  return (
    <App>
    {updateObjectInArrayImmutable([1,2,3], v => v ===1, () => 4)}
      <p>Index Page</p>
    </App>
  )
}
