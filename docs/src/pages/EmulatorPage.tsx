import { DeviceFrameset, DeviceEmulator } from 'react-device-frameset'
import 'react-device-frameset/styles/device-emulator.css'
import 'react-device-frameset/styles/marvel-devices.css'

const EmulatorPage = () => (
  <DeviceEmulator banDevices={['HTC One']}>
    {(props) => <DeviceFrameset {...props} />}
  </DeviceEmulator>
)

export default EmulatorPage
