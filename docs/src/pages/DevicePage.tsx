import { DeviceFrameset, DeviceSelector } from 'react-device-frameset'
import 'react-device-frameset/styles/device-selector.css'
import 'react-device-frameset/styles/marvel-devices.css'

const DevicePage = () => (
  <DeviceSelector>
    {(props) => <DeviceFrameset {...props} />}
  </DeviceSelector>
)

export default DevicePage
