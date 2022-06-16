import {
  loadConfig,
  writeRemixGen,
} from "https://deno.land/x/remix_deno@v0.0.9/mod.ts";

const config = await loadConfig({ mode: "production" });
await writeRemixGen(config);
