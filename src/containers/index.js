import Home from '@/containers/Home'
import Me from '@/containers/Me'
import Find from '@/containers/Find'
import Message from '@/containers/Message'

export default [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/find',
    	name : 'Find',
    	component: Find
    },
    {
    	path : '/me',
    	name : 'Me',
    	component : Me
    },
    {
    	path : '/message',
    	name : 'Message',
    	component : Message
    }
]