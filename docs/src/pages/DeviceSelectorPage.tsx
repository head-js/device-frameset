import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.css'
import { DeviceSelector } from '../components/DeviceSelector'
import '../components/device-selector.scss'

const DevicePage = () => (
  <DeviceSelector>
    {(props) => <DeviceFrameset {...props} />}
  </DeviceSelector>
)

export default DevicePage
