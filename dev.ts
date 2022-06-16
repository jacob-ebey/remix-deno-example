import { serveDev } from "remix-deno";

await serveDev((mod) => import(mod));
