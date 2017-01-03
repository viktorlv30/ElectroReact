/**
 * Created by viktor_local on 03.01.2017.
 */
import Server from 'socket.io';

export default function startServer(){
    const io = new Server().attach(8090);
}