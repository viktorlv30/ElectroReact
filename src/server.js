/**
 * Created by viktor_local on 03.01.2017.
 */
import Server from 'socket.io';

const serverPort = 8090;

export function startServer(store){
    const io = new Server().attach(serverPort);

    store.subscribe(() => io.emit('state', store.getState().toJS()));

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    });
}