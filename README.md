# remix-deno-example

Example showing how to use: https://github.com/jacob-ebey/remix-deno

## Usage

**Development mode:**

```bash
deno task dev
```

This will automatically re-generate your `remix.gen.ts` file for production.

**Build:**

If you haven't or can't run dev mode for some reason, you can prepare your site for production with:

```bash
deno task build
```

**Production mode:**

```bash
deno task start
```

## Notes

You **should** commit `remix.gen.ts` to your repo.
