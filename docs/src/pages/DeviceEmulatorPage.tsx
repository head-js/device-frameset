import { DeviceFrameset } from 'device-frameset'
import { DeviceEmulator } from '../components/DeviceEmulator'

const EmulatorPage = () => (
  <DeviceEmulator banDevices={['HTC One']}>
    {(props) => <DeviceFrameset {...props} />}
  </DeviceEmulator>
)

export default EmulatorPage
