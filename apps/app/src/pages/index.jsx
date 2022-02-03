import App from '../components/App'
import {updateObjectInArrayImmutable} from 'wyx-utils'
import {getHello} from '@wyxmono/private-utils'

export default function Home() {
  return (
    <App>
      <h1>Firebase deployment with yarn workspace</h1>
      <p>This page is hosted on firebase.</p>
      <p>This array is being updated by a public util: <b>{updateObjectInArrayImmutable([1,2,3], v => v ===1, () => 4)}</b></p>
      <p>This hello message is from a private util which resides in the monorepo <b>{getHello()}</b></p>
    </App>
  )
}
