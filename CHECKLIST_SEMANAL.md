# ✅ CHECKLIST SEMANAL — QA JUNIOR

Usá este archivo para marcar tu progreso. Cambiá `[ ]` por `[x]` cuando completes cada ítem.

> 🔄 Actualizado automáticamente el 2026-08-03 en base al contenido real del repo (postman/, tests/, pages/, .github/workflows/, README_md.md, IA_en_mi_workflow_QA.md) y a tu actividad en LinkedIn.

---

## 📦 BLOQUE 1 — APIs + SQL (Semanas 1–4)

### Semana 1 — Postman básico
- [x] Instalar Postman
- [ ] Hacer GET request a https://reqres.in/api/users (lista completa — solo tenés requests a usuarios individuales)
- [x] Hacer GET request a un usuario específico (by ID)
- [ ] Hacer POST para crear un usuario (no está en la colección actual — solo hay PUT, DELETE y GET)
- [x] Verificar manualmente los códigos de respuesta
- [x] Verificar la estructura del JSON de respuesta

### Semana 2 — Postman avanzado
- [x] Escribir 3 tests automáticos en la pestaña "Tests" de Postman (tenés 4+: status 204, 200, 404, validación de JSON)
- [x] Crear variables de entorno (base_url, token)
- [ ] Probar autenticación con Bearer Token (tu colección usa `x-api-key`, no Bearer — falta probar ese método específico)
- [ ] Crear colección organizada con al menos 8 requests (tenés 6: Eliminar, Actualizar ×2, 404, Obtener ×2)
- [x] Exportar y subir colección a GitHub

### Semana 3 — SQL básico
- [ ] Completar módulos 1–6 de https://sqlbolt.com (no hizo falta — se practicó todo con `sql/exercises.md` en su lugar)
- [x] Practicar SELECT + WHERE + ORDER BY
- [x] Practicar JOIN (INNER y LEFT) — INNER (Nivel 3, incluida una consulta de 4 tablas) y LEFT (Nivel 4, usuarios sin pedidos / productos sin ventas)
- [x] Practicar GROUP BY + COUNT (Nivel 5: COUNT, SUM, combinado con JOIN + WHERE — incluye la consulta más compleja de todo el ejercicio: total gastado por usuario)
- [x] Instalar DB Browser for SQLite o PostgreSQL

> ✅ 2026-08-09: **los 7 niveles de `sql/exercises.md` (21 ejercicios) están completos.** Niveles 1-5 resueltos en dos sesiones en vivo; Nivel 6 (INSERT/UPDATE/DELETE) resuelto hoy; Nivel 7 (escenario QA real: verificar en base de datos que un checkout automatizado se guardó bien) ya se había resuelto como ejemplo al principio. SQL deja de ser el hueco del portfolio.

### Semana 4 — SQL + integración QA
- [ ] Completar módulos 7–12 de sqlbolt.com (idem nota de arriba)
- [x] Escribir query que valide datos de una acción en la app (Nivel 7 de `sql/exercises.md`)
- [ ] Proyecto: colección Postman completa (10+ requests, tests, variables)
- [x] README del proyecto subido a GitHub

---

## 📦 BLOQUE 2 — Herramientas (Semanas 5–6)

### Semana 5 — Jira + Git
- [x] Crear cuenta en Jira (versión gratuita)
- [x] Crear proyecto y tablero Kanban
- [x] Reportar 3 bugs con formato profesional (título, pasos, resultado esperado/actual, evidencia)
- [x] Instalar Git
- [x] `git init`, `git add`, `git commit`, `git push` en un proyecto propio (repo con 20 commits)
- [x] Crear rama y hacer merge (rama `feature/agrego-jira` creada)

### Semana 6 — Git avanzado + CI/CD conceptual
- [x] Dominar `git pull`, `git branch`, `git checkout`
- [ ] Entender qué es un Pull Request
- [x] Ver un pipeline de GitHub Actions (el tuyo propio: `.github/workflows/playwright.yml`, corriendo en cada push)
- [ ] Entender qué significa que un build falle
- [ ] Reportar 5 bugs totales con evidencia (capturas/video) — hoy tenés 2 documentados en el README (SauceDemo) + 3 en Jira; falta consolidar todo en un solo lugar con evidencia visual
- [ ] Template de bug report propio guardado como archivo aparte

---

## 📦 BLOQUE 3 — Automatización con Playwright (Semanas 7–14)

### Semana 7 — Setup y primer test
- [x] Instalar Node.js + npm
- [x] Instalar Playwright: `npm init playwright@latest`
- [x] Correr el test de ejemplo que viene incluido
- [x] Escribir test propio: abrir página, verificar título
- [x] Entender `test()`, `expect()`, `page.goto()`

### Semana 8 — Selectores y acciones
- [x] Usar `getByRole()`, `getByText()`, `getByLabel()`
- [x] Hacer clic, escribir texto, limpiar campo
- [x] Assertions: `toBeVisible()`, `toHaveText()`, `toBeEnabled()`
- [ ] Captura de pantalla en fallo (tu `playwright.config.js` solo tiene `trace: 'on-first-retry'` — falta agregar `screenshot: 'only-on-failure'`)
- [x] 5 tests funcionando en https://saucedemo.com (`login.spec.js` tiene 5)

### Semana 9 — Page Object Model
- [x] Entender qué es y por qué usarlo
- [x] Crear primera clase Page Object (LoginPage)
- [x] Refactorizar tests existentes para usar POM (`Inventory.spec.js` y `checkout.spec.js` ya lo usan vía fixtures — **pendiente**: `login.spec.js` todavía usa locators sueltos en vez de `LoginPage`)
- [x] Crear al menos 3 Page Objects (LoginPage, InventoryPage, CheckoutPage)

### Semana 10 — Fixtures y configuración
- [x] Usar fixtures de Playwright para setup/teardown (`tests/fixtures.js`)
- [x] Configurar `playwright.config.js` (browsers, baseURL)
- [ ] Correr tests en múltiples browsers (hoy solo está configurado `chromium` — sumá `firefox` y `webkit` como proyectos)
- [x] Generar reporte HTML: `npx playwright show-report`

### Semana 11 — Tests de API con Playwright
- [x] Usar `request` context de Playwright
- [ ] Escribir test que valide API + UI en el mismo flujo
- [x] 3 tests de API funcionando (`api.spec.js`)

### Semana 12 — CI con GitHub Actions
- [x] Crear workflow `.github/workflows/playwright.yml`
- [x] Correr tests en cada push
- [x] Ver reporte en GitHub Actions (artifact `playwright-report` configurado)
- [ ] Badge de CI en README

### Semana 13–14 — Proyecto integrador
- [x] Suite completa en https://saucedemo.com
- [x] Mínimo 15 tests (tenés 17: 2 ejemplo + 3 API + 5 login + 3 inventario + 4 checkout)
- [x] Page Object Model completo (falta terminar de migrar `login.spec.js`, ver Semana 9)
- [x] Reporte HTML generado
- [x] GitHub Actions configurado
- [x] README profesional con instrucciones

---

## 📦 BLOQUE 4 — Python (Semanas 15–18)

> 🔄 Actualizado el 2026-08-05: se agregó `python/` al repo (validador de contraseñas + cliente de API, ambos con tests pytest, verificados antes de subir).

### Semana 15–16 — Fundamentos
- [x] Variables, tipos, condicionales, loops (usado en `password_validator.py`)
- [x] Funciones
- [ ] Listas y diccionarios (uso básico de listas en `password_validator.py`; falta práctica con diccionarios)
- [x] Manejo de archivos JSON y CSV (JSON vía `requests`, CSV en el data-driven de `test_password_validator.py`)
- [ ] 10 ejercicios en https://exercism.org (track Python)

### Semana 17–18 — Python para QA
- [x] Usar librería `requests` para hacer HTTP requests (`python/api_client.py`)
- [x] Escribir script que consuma una API y valide respuesta
- [x] Entender `pytest` (asserts, fixtures, parametrize) — `@pytest.mark.parametrize` usado en ambos archivos de test
- [ ] Convertir un test manual a pytest (pendiente: tomar uno de tus casos de prueba manuales de SauceDemo y pasarlo a pytest)
- [x] Leer datos de prueba desde un CSV (`test_data_passwords.csv`)

---

## 📦 BLOQUE 5 — IA para QA (Semanas 19–20)

### Semana 19
- [x] Generar casos de prueba con IA para una funcionalidad nueva (15 casos documentados para Login de SauceDemo)
- [x] Generar datos de prueba (usuarios, emails, fechas, tarjetas) con IA
- [x] Usar IA para mejorar bug reports existentes

### Semana 20
- [ ] Usar GitHub Copilot para escribir un test automatizado
- [x] Documentar 3 casos de uso de IA en tu proceso QA (`IA_en_mi_workflow_QA.md`)
- [x] Agregar sección "IA en mi workflow" al portfolio

---

## 💼 PORTFOLIO — ESTADO

| Proyecto | Estado | Link GitHub |
|---------|--------|-------------|
| Colección Postman (API pública) | 🟡 En progreso — faltan 2+ requests y auth Bearer | `postman/ReqRes API - QA Practice.postman_collection.json` |
| Suite Playwright E2E | ✅ Completo (17 tests, POM, fixtures, CI) | `tests/`, `pages/` |
| Bug reports profesionales | 🟡 Parcial — consolidar en un solo lugar con evidencia | README_md.md + Jira |
| Script Python + API | ✅ Completo (validador de contraseñas + cliente de API, con pytest y data-driven) | `python/` |
| Casos de uso IA en QA | ✅ Completo | `IA_en_mi_workflow_QA.md` |

---

## 📝 NOTAS PERSONALES

- Curso completado (LinkedIn, ago 2026): Automatización de Pruebas con Selenium WebDriver, Python y Pytest.
- El roadmap principal recomienda enfocarse en UN framework de automatización (Playwright). Definir si Selenium queda como conocimiento complementario o si se integra como segundo proyecto en el portfolio.
- Próximos pasos sugeridos de mayor impacto: (1) terminar Bloque 1 (SQL, que está en cero), (2) migrar `login.spec.js` a POM, (3) sumar un script Python/pytest simple para respaldar el curso recién hecho.

---

*Última actualización: 2026-08-03*
