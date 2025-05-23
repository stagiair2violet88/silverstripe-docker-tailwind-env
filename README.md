# Silverstripe 5 NewsSite Template

This is a template for a Silverstripe 5 project, including a Docker-based development environment and a custom theme with frontend build tools.

---

## Requirements

- Docker
- Docker Compose
- Composer
- PHP
- Node.js & npm (for frontend assets)

---

## Getting Started

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Environment Setup

- Copy `.env.example` to `.env` and fill out the necessary information.

### 3. Install PHP Dependencies

```sh
composer install
```

### 4. Install Frontend Dependencies & Build CSS

```sh
npm install
npm run build
```
> This will generate `dist/css/main.css` for your theme.  
> If you change your CSS or JS, re-run `npm run watch`.

### 5. Start Docker Services

```sh
docker-compose up -d
```

- The web project will be available at [http://localhost](http://localhost).

---

## Running Services

- **Web**: PHP server at [http://localhost](http://localhost)
- **Database**: MySQL at `localhost:3306`  
  - Username: `root`  
  - Password: `root`  
  - Database: `silverstripe`
- **PHPMyAdmin**: [http://localhost:8081](http://localhost:8081)
- **Mailpit**: SMTP at `localhost:1025`, web UI at [http://localhost:8025](http://localhost:8025)

---

## Theme & Frontend

- The default theme is in `themes/NewsTheme`.
- Main template: `themes/NewsTheme/templates/Page.ss`
- Main CSS: `themes/NewsTheme/dist/css/main.css` (built via npm)
- If you are not using a frontend build tool, place your CSS manually in `dist/css/main.css`.

---

## XDebug Setup (PHPStorm)

1. Go to **File > Settings** (Windows/Linux) or **PhpStorm > Preferences** (macOS).
2. Navigate to **Languages & Frameworks > PHP**.
3. Click the `...` next to the CLI Interpreter field.
4. Click the `+` to add a new interpreter.
5. Select **From Docker, Vagrant, VM, Remote...**
6. Choose **Docker Compose**.
7. Select your Docker Compose file and the service (e.g., `web`).
8. Click **OK**.
9. Go to **Languages & Frameworks > PHP > Servers**.
10. Click the `+` to add a new server.
11. Name: `docker-web` (or any name).
12. Host: `localhost`
13. Port: `80`
14. Set path mappings: map your local project path to `/var/www/html`.
15. Click **OK**.
16. Go to **Run > Edit Configurations**.
17. Click the `+` and select **PHP Remote Debug**.
18. Name your configuration (e.g., `XDebug Docker`).
19. In the Servers dropdown, select the server you configured.
20. Set the IDE key to `docker`.
21. Click **OK**.
22. Click **Debug** to start debugging.

---

## Useful Commands

- Install PHP dependencies: `composer install`
- Install frontend dependencies: `npm install` (in `themes/NewsTheme`)
- Build frontend assets: `npm run build` (in `themes/NewsTheme`)
- Start services: `docker-compose up -d`
- Stop services: `docker-compose down`
- Flush Silverstripe cache: Visit `http://localhost/?flush`

---

For more information, see the [Silverstripe documentation](https://docs.silverstripe.org/).