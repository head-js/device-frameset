import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.css'
import { DeviceEmulator } from '../components/DeviceEmulator'

const EmulatorPage = () => (
  <DeviceEmulator banDevices={['HTC One']}>
    {(props) => <DeviceFrameset {...props} />}
  </DeviceEmulator>
)

export default EmulatorPage
