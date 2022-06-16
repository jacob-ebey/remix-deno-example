import { serveDev } from "https://deno.land/x/remix_deno@v0.0.9/mod.ts";

await serveDev((mod) => import(mod));
