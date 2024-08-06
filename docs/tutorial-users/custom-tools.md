---
sidebar_position: 2
---

# Custom tools

If you want to write your own custom cool or have communication with the server from your code you can see OpenAPI section.
`sero.toml` file is only needed for storing configuration for `@clowzed/sero`. You do not need it.

:::warning
The server will not filter any configuration files even with filename `sero.toml`.
:::

:::tip
You can generate a required library using `openapi-generator`.

```sh
openapi-generator-cli generate -i openapi.json -g typescript-axios -o api
```

:::
