import http from "node:http";

import {} from "./app/index";
import { env } from "./env";

async function main() {
    try {
        const server = http.createServer();

        const PORT: number = env.data.PORT ? +env.data.PORT : 8080;

        server.listen(PORT, () => {
            // log that server is running on port 8080
        });
    } catch (error) {
        // log that there was an error in starting the http server
        throw error;
    }
}
