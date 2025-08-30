Title: Header Injection Attacks in JWT: Risks & Demonstration Steps

Abstract:
An examination of header injection vulnerabilities in JWTs, emphasizing algorithm manipulation and JWK-based key injection attacks that allow authentication bypass in insecure setups.

# JWT Header Injection Demo (PoC)

## Overview
A Node.js Express demo showcasing how to **securely verify JWTs** and prevent header injection vulnerabilities (`alg`, `jwk`, `jku`, `kid`).

## Setup
```bash
git clone <repo>
cd repo
npm install express jsonwebtoken

--------------------------------------------------------------------------------------------------------------------------------


# JWT Authentication PoC (Node.js & Express)

## Overview  
This proof-of-concept demonstrates how to implement API authentication using JWTs in a Node.js & Express backend. It includes user registration, login, token issuance, and protected routes.

## Setup  
```bash
git clone <this repo>
cd <repo>
npm install express jsonwebtoken bcryptjs body-parser
