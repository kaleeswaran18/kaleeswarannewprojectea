const { Server } = require('socket.io');

let userSockets = {}; // Store user socket mappings

function initializeSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket) => {
        console.log("A user connected:", socket.id);

        socket.on('authenticate', (data) => {
            try {
                if (data?.userId) {
                    // Remove old socket ID if the user reconnects
                    if (userSockets[data.userId]) {
                        delete userSockets[data.userId];
                    }

                    userSockets[data.userId] = socket.id;
                    console.info(`User ${data.userId} authenticated with socket ID ${socket.id}`);

                    socket.emit('authenticated', { message: 'Successfully logged in' });
                } else {
                    socket.emit('error', { message: 'Invalid user ID' });
                }
            } catch (err) {
                console.error('Authentication error:', err);
                socket.emit('error', { message: 'Authentication failed' });
            }
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);

            // Remove user from userSockets
            for (let userId in userSockets) {
                if (userSockets[userId] === socket.id) {
                    delete userSockets[userId];
                    console.log(`Removed user ${userId} from active sockets`);
                    break;
                }
            }
        });
    });

    return io;
}

module.exports = { initializeSocket, userSockets };
