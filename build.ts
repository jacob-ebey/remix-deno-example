import {
  loadConfig,
  writeRemixGen,
} from "remix-deno";

const config = await loadConfig({ mode: "production" });
await writeRemixGen(config);
