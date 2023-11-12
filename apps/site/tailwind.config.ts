// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";

const config: Pick<Config, "presets"> = {
  // presets: [sharedConfig],
  presets: [
    {
      ...sharedConfig,
      theme: {
        extend: {
          backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          },
        },
      },
    },
  ],
};

export default config;
