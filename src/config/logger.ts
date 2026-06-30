import pino from "pino";

import { env } from "../env";

const isProduction = env.NODE_ENV === "production";
const isTest = env.NODE_ENV === "test";

export const logger = pino({
    level: isProduction ? "info" : isTest ? "silent" : "trace",
    ...(!isProduction
        ? {
              transport: {
                  target: "pino-pretty",
                  options: {
                      colorize: true,
                      translateTime: "HH:MM:ss",
                      ignore: "pid,hostname",
                  },
              },
          }
        : {}),
});
