import { serveProd } from "remix-deno";
import * as remixGen from "./remix.gen.ts";

await serveProd(remixGen);
