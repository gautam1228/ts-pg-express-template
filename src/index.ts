import http from "node:http";

import { createServerApplication } from "./app/index";
import { logger } from "./config/logger";
import { env } from "./env";

async function main() {
    try {
        const server = http.createServer(createServerApplication());

        const PORT: number = env.data.PORT ? +env.data.PORT : 8080;

        server.listen(PORT, () => {
            logger.info({ port: PORT }, "HTTP server listening");
        });
    } catch (error) {
        logger.error({ err: error }, "Failed to start HTTP server");
        throw error;
    }
}

main();
