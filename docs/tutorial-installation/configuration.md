---
sidebar_position: 3
---

# Configuration

There are several options which must be configured for your needs

1. Parameters for `server`

   | Configuration             | Description                                                                                                         |
   | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
   | **`DATABASE_URL`**        | This specifies database url. Note: server uses sea-orm and uses some features which are available wit Postgres only |
   | **`PORT`**                | This sets the port for server to listen on                                                                          |
   | **`MAX_USERS`**           | This is the amount of users which can be registered on the server                                                   |
   | **`MAX_SITES_PER_USER`**  | This sets the amount of subdomains which can be used by one user                                                    |
   | **`MAX_BODY_LIMIT_SIZE`** | This sets the amount of bytes the requests can be                                                                   |
   | **`JWT_SECRET`**          | This will be used for jwt auth                                                                                      |
   | **`JWT_TTL_SECONDS`**     | This sets how long jwt token will live                                                                              |
   | **`UPLOAD_FOLDER`**       | This sets the folder where all uploads will be placed                                                               |

2. Parameters for `Nginx`

   All this parameters are used by nginx for templates located in `nginx-templates` folder

   | Configuration     | Description                                                                 |
   | ----------------- | --------------------------------------------------------------------------- |
   | **`DOLLAR`**      | This variable is needed for nginx-templates and `should not be overwritten` |
   | **`SERVER_PORT`** | This sets the port which your server listens                                |
   | **`SERVER`**      | This sets the server name or ip or domain where your server listens         |
   | **`DOMAIN`**      | This sets the domain you own                                                |
   | **`ZONE`**        | THis sets the zone for yor domain                                           |

That was a brief description. Now lets dive a bit deeper

## Dive

All this configuration parameters are used in `docker-compose.yml` and are passed as environment variables.
The server also uses environment variables so there is currently no other way to set them.

1. **`DATABASE_URL`**

   The database url set in `docker-compose.yml` points to a docker container with postgres. Postgres does not use port mapping so you are protected.
   When running sero as a docker container or manually you need to have a running postgres somewhere and set this parameter. All migration are ran automatically so you should not be worried about it

2. **`PORT`**

   Server container also does not use port mapping when using `docker-compose.yml`. It is important to set it same for `server` and nginx (`proxy`).

3. **`MAX_USERS`**

   This sets the amount of users which can be registered. You can leave this variable empty and this will disable RegistrationGuard. In this case there can be unlimited umount of users registered.

   - Maximum value - **`u64::MAX`**

4. **`MAX_SITES_PER_USER`**

   This sets the amount of owned subdomains which one user can have at a time. This can also be not set resulting in unlimited (limited only be the available memory) amount of sites.

5. **`MAX_BODY_LIMIT_SIZE`**
   This sets the maximum body limit in bytes. This does not mean that uploaded archive cam be this size as the request contains additional data.
   :::warning
   Leaving this value empty will disable [`DefaultBodyLimit`](https://docs.rs/axum/latest/axum/extract/struct.DefaultBodyLimit.html). According to docs this means:

   > For security reasons, Bytes will, by default, not accept bodies larger than 2MB. This also applies to extractors that uses Bytes internally such as String, Json, and Form.

   :::

6. **`JWT_SECRET`**

   This will be used for signing jwt. Changing this parameter and restarting server will result in invalidation of all tokens.
   :::warning

   For security reasons:

   - Set this variable using docker secretes. [**`How to use docker secrets`**](https://docs.docker.com/compose/use-secrets/)

   :::

   :::tip

   Generate it. One of good solutions:

   ```sh
   openssl rand -base64 60
   ```

   :::

7. **`JWT_TTL_SECONDS`**

   This sets the amount of seconds the token will be valid. After expiration users will log out

   - Maximum value - **`i64::MAX`**

   :::warning
   For security reasons do not set big amount as the token can be stolen. Usually server actions takes several seconds.
   :::

8. **`UPLOAD_FOLDER`**

   This sets the folder where sites will be stored.
   :::warning
   When using in `docker-compose.yml` be careful with volumes if you do not want to loose data on restart.

   ```yml title="docker-compose.yml"
   volumes:
     - server-files:/app/sites-uploads
   ```

   :::

### Here about nginx envs

1. **`DOLLAR`**  
   This one is a bit confusing but you do not need to be worried. As nginx-templates are used and regex expr is used inside for capturing subdomain we can have an issue. The envs are inserted with:

   ```conf title="nginx-templates/default.conf.template"
       server_name ~^(?<subdomain>\w*)\.${DOMAIN}.${ZONE}${DOLLAR};
   ```

   The DOLLAR is used to match the end of the string. If we leave dollar sign alone this will result in error due to empty env variable.

2. **`SERVER_PORT`**

   This will be used in server block. You do not need to change this if you use `docker-compose.yml`. This is used in nginx template and should match **`PORT`**

3. **`SERVER`**

   This will be used in server block. You do not need to change this if you use `docker-compose.yml`. This is used in nginx template.

4. **`DOMAIN`**
   Imagine that you bought a domain: **`mydomain.com`**. In this case you should set this parameter to `mydomain`

5. **`ZONE`**
   Imagine that you bought a domain: **`mydomain.com`**. In this case you should set this parameter to `com`
