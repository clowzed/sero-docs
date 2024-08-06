---
sidebar_position: 1
---

# Sero CLI

The Sero CLI tool facilitates communication with servers running the sero application. Developed in TypeScript, it leverages the latest version of the axios-typescript library generated with openapi-generator.

## Features

- Teardown site
- Download site - **`NEW`**
- Disable site - **`NEW`**
- Custom 404.html
- Custom 503.html - **`NEW`**

## Installation

To install the Sero CLI, execute the following command:

```bash
pip install seroup
#or
pipx install seroup
```

If someone wants to help to pack it for different distributions feel free to PR.

## Understanding `sero.toml`

Unlike `surge.sh` sero server can be hosted on any machine. You can have 1, 10 or 100 different machines. It will be hard to specify urls for server every time you want to call an action on your site or account. That is why sero.toml was introduced.

## Inspecting sero.toml

That is how default sero.toml file looks like:

```toml
[credentials]
username = "clowzed"
password = ""

[server]
url = "http://sero.com/"
subdomain = "clowzed"

[cors]
origins = []
```

This is a default config for `sero.toml` which will be generated automatically. Username will be set to your hostname.

### **`Username`**

1. This is a username for your account on sero server. You must see requirements for username in [**`OpenAPI login`**](../OpenAPI/login.api.mdx)
2. If this is a new account you need to call `register` action

   ```bash
   sero register <path-to-site-directory>
   ```

### **`Password`**

:::warning
While the password field is available, for security reasons, it's recommended to leave it empty and input it during action calls.
:::

### **`Url`**

This is a url for your sero server.

:::important
Sero currently does not offer same service as `surge.sh` and you NEED to change it.
:::

### **`Subdomain`**

This a subdomain where your site will be available. Note that subdomain can be used by another user and you will receive proper message.
This cannot be blank. You can set this case insensitively, the server will make it lowercased anyway. The first version did not have this feature which could lead to unexpected behavior.

### **`Origins`**

Here you can set list of origins. `sero` will then dynamically decide if origin is allowed based on your settings.

- Leaving empty will respond to preflight request with `forbidden`

:::warning
You can set it to wildcard if you want:
But it is very bad for security reasons

```toml
origins = ["*"]
```

:::

## Actions

### 1. **`Teardown`**

This action removes your site completely from server and free subdomain. It will no longer be associated with you account and can be taken by another user.

```bash
sero teardown <path-to-your-site>
```

### 2. **`Download`**

This will download the last archive which was unloaded to this subdomain with your account.

```bash
sero download <path-to-your-site> mysite.zip
```

### 3. **`Upload`**

This will archive specified folder and upload it to sero server with specified settings

```bash
sero upload <path-to-your-site>
```

### 4. **`Disable`**

If you want to stop site from functioning but do not want to delete it and keep subdomain associated with your account you can call this action.
All calls to your site will return `503` status code.
If `503.html` is in the root of your site it will be returned with status code `503`

```bash
sero disable <path-to-your-site>
```

### 5. **`Enable`**

This will make your site available again after calling `disable` action.

```bash
sero disable <path-to-your-site>
```

### 6. **`Init`**

This command will generate default `sero.toml` file in specified directory.

```bash
sero init <path-to-your-site>
```

:::note
This is safe to call it with existing `sero.toml`
:::
