import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { wsConnect, wsDisconnect, newMessage } from '../modules/actions';

export default function Test() {

    const host = `ws://ws.channels.honeycombpizza.link/ws/market/1/`;

    const websocket_state = useSelector(state => state.websocket);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(newMessage("멍청이"));
        console.log(websocket_state)
    }, [dispatch]);

    return (
        <div>test</div>
    )
}
