import { config } from "dotenv";

import z from "zod";
import { NODE_ENVS } from "./config/constants";

config();

const envSchema = z.object({
    PORT: z.string().describe("The port on which the http server will be listening."),
    NODE_ENV: z.enum(NODE_ENVS).default("development").describe("The current project environment."),
    DATABASE_URL: z.string().describe("The DB connection string for the backend."),
});

function createEnv(env: NodeJS.ProcessEnv) {
    const result = envSchema.safeParse(env);

    if (!result.success) {
        // log env var setup error
        throw new Error(result.error.message);
    }

    return {
        data: result.data,
    };
}

export const env = createEnv(process.env);
