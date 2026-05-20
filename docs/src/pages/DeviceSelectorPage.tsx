import { DeviceFrameset } from 'react-device-frameset'
import { DeviceSelector } from '../components/DeviceSelector'
import '../components/device-selector.scss'

const DevicePage = () => (
  <DeviceSelector>
    {(props) => <DeviceFrameset {...props} />}
  </DeviceSelector>
)

export default DevicePage
