---
id: requirements
title: Requirements
sidebar_position: 1
---

## Overview

The web server itself does not have strict requirements beyond needing a machine to run on. However, its utility increases significantly when coupled with the following:

- A server with a dedicated IP address
- An owned domain name (e.g., `"mydomain.com"`)
- An access to server's DNS records
- Docker Compose installed on the server. [Learn how to install Docker Compose](https://docs.docker.com/compose/install/)

### Step 0

:::important
Add wildcard subdomain to your server.
It is usually done by adding TXT DNS record with value "\*" pointing to your server
:::
