import { serveProd } from "https://deno.land/x/remix_deno@v0.0.9/mod.ts";
import * as remixGen from "./remix.gen.ts";

await serveProd(remixGen);
