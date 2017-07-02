import Home from '@/containers/Home'
import Me from '@/containers/Me'
import Find from '@/containers/Find'
import Message from '@/containers/Message'
import Collection from '@/containers/Me/Collection'
import Panels from '@/containers/Me/Panels'
import Subcribe from '@/containers/Me/Subcribe'
import Favor from '@/containers/Me/Favor'
import Pmessage from '@/containers/Message/Pmessage'
import Actions from '@/containers/Message/Action'



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
    	component : Me,
        children:[
            {
                path : 'collection',
                component: Collection
            },
            {
                path : 'panels',
                component: Panels
            },
            {
                path : 'favor',
                component: Favor
            },
            {
                path : 'subcribe',
                component: Subcribe
            }
        ]
    },
    {
    	path : '/message',
    	name : 'Message',
    	component : Message,
        children:[
            {
                path : 'actions',
                component : Actions
            },
            {
                path : 'pmsg',
                component : Pmessage
            }
        ]
    }
]