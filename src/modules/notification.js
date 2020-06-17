import {NotificationManager} from 'react-notifications'

export default function createNotification (type,message){
        if(type === 'info')
            return NotificationManager.info(message)
        if(type === 'info')
            return  NotificationManager.success(message)
        if(type === 'info')
            return  NotificationManager.warning(message, 'Close after 3000ms', 3000)
        if(type === 'info')
            return  NotificationManager.error(message, 'Click me!', 5000, () => {
            alert('callback')
          })
    }