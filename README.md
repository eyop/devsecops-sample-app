---

# 🚀 DevSecOps Sample App

This repository contains a **sample Node.js + Express web application** with a complete **DevSecOps pipeline** implemented using **GitHub Actions**.

The goal of this project is to demonstrate how **security can be integrated into every phase of the CI/CD pipeline** — from development, to build, to deployment.

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Workflows Explained](#workflows-explained)

   * [CI Workflow](#1-ci-workflow)
   * [CodeQL (SAST) Workflow](#2-codeql-sast-workflow)
   * [Docker Build & Scan Workflow](#3-docker-build--scan-workflow)
   * [Dependabot](#4-dependabot)
6. [Security Practices Used](#security-practices-used)
7. [Branch Protection](#branch-protection)
8. [Future Improvements](#future-improvements)

---

## 🌍 Overview

The **DevSecOps philosophy** integrates **security** into the development lifecycle, ensuring that applications are tested, scanned, and validated before deployment.

This project provides a **ready-to-use template** showing how to:

* Develop a simple app.
* Automate tests and linting.
* Run **static analysis (SAST)** with CodeQL.
* Detect **vulnerabilities** in dependencies and Docker images.
* Automatically update dependencies with Dependabot.
* Push secure Docker images to GitHub Container Registry (GHCR).
* Enforce security policies before merging code.

---

## ✨ Features

✅ Node.js + Express sample web app
✅ Unit tests with Jest + Supertest
✅ Linting with ESLint
✅ GitHub Actions CI pipeline:

* Linting, unit tests, npm audit
* Code coverage upload
  ✅ CodeQL analysis (SAST)
  ✅ Docker image build & push to GHCR
  ✅ Image scanning with **Trivy** (critical/high vulnerabilities)
  ✅ Dependabot for daily dependency updates
  ✅ Ready for extension with secret scanning, IaC scanning, and cloud deployment

---

## 📂 Project Structure

```
devsecops-sample-app/
├── .github/
│   └── workflows/
│       ├── ci.yml               # Lint, test, audit
│       ├── codeql-analysis.yml  # Static code analysis (SAST)
│       └── docker-scan.yml      # Docker build + Trivy scan
├── test/
│   └── app.test.js              # Unit test
├── .gitignore
├── Dockerfile
├── index.js                     # Express app
├── package.json
├── README.md
```

---

## ⚡ Getting Started

### Prerequisites

* [Node.js 18+](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [Docker](https://www.docker.com/)

### Run locally

```bash
# Install dependencies
npm install

# Run lint checks
npm run lint

# Run tests
npm test

# Start app
npm start
```

Visit: [http://localhost:3000](http://localhost:3000) → returns `{ "message": "Hello, DevSecOps!" }`

### Build & run Docker image

```bash
docker build -t devsecops-sample-app .
docker run -p 3000:3000 devsecops-sample-app
```

---

## 🛠 Workflows Explained

### 1. CI Workflow

📄 File: `.github/workflows/ci.yml`

* Runs on every push and pull request.
* Steps:

  1. Install dependencies (`npm ci`).
  2. Run **ESLint** → ensures code quality.
  3. Run **Jest tests** → ensures functionality is correct.
  4. Run **npm audit** → reports known vulnerabilities.
  5. Upload test coverage as artifact.

➡️ Prevents insecure or broken code from merging into `main`.

---

### 2. CodeQL (SAST) Workflow

📄 File: `.github/workflows/codeql-analysis.yml`

* Runs on push/PR and nightly.
* Uses **GitHub CodeQL** to scan source code for:

  * SQL injection risks
  * XSS vulnerabilities
  * Insecure API usage
  * Logic flaws

➡️ Provides **static application security testing (SAST)** directly in GitHub.

---

### 3. Docker Build & Scan Workflow

📄 File: `.github/workflows/docker-scan.yml`

* Builds Docker image with `docker/build-push-action`.
* Pushes image to **GitHub Container Registry (GHCR)**.
* Runs **Trivy** scanner against the built image.
* Flags **HIGH** and **CRITICAL** vulnerabilities.

➡️ Ensures only secure container images are stored/deployed.

---

### 4. Dependabot

📄 File: `.github/dependabot.yml`

* Automatically checks for dependency updates.
* Opens PRs for outdated/vulnerable packages.
* Runs CI & security scans before merging.

➡️ Keeps dependencies **up-to-date and secure**.

---

## 🔐 Security Practices Used

* **Shift-left security** → scans run during development.
* **Automated SAST** (CodeQL).
* **Dependency scanning** (npm audit + Dependabot).
* **Container scanning** (Trivy).
* **Artifact integrity** (images pushed only after passing tests).
* **Branch protection rules** → require checks to pass before merge.

---

## 🔒 Branch Protection

Recommended GitHub branch rules:

* Require PR reviews before merge.
* Require status checks to pass:

  * ✅ CI
  * ✅ CodeQL
  * ✅ Build & Scan
* Prevent direct pushes to `main`.

---

## 🚧 Future Improvements

* **Secret Scanning** with Gitleaks.
* **SBOM generation** with Syft.
* **Image signing** with Cosign.
* **IaC scanning** (Terraform + Checkov/Terrascan).
* **DAST scanning** with OWASP ZAP.
* **Kubernetes security** with kube-bench / Kubescape.
* **Cloud deployment** (AWS/GCP/Azure) with IaC.

---

## 📜 License

MIT — free to use, learn, and extend.

---
