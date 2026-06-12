# 🎯 ROADMAP QA JUNIOR — DE ENFERMERÍA A IT

> **Objetivo:** Conseguir trabajo como QA Junior lo antes posible  
> **Estado actual:** Fundamentos de Testing ✅ estudiados  
> **Tiempo estimado total:** 4–6 meses para estar listo para aplicar

---

## ⚡ LÓGICA DEL PLAN

La secuencia NO es aleatoria. Cada bloque habilita el siguiente:

```
Fundamentos ✅ → APIs + SQL → Herramientas → Automatización → Python/JS → IA
```

Las **APIs y SQL** van primero porque el 80% de las entrevistas QA junior te preguntan Postman + SQL antes que automatización.  
La **automatización** requiere que sepas qué testear (APIs) y cómo organizarlo (herramientas).  
**Python/JS** solo se necesita para automatizar, no antes.  
La **IA** es un diferenciador, no una base — va al final.

---

## 📦 BLOQUE 1 — APIs + SQL
**Prioridad: CRÍTICA | Tiempo: 3–4 semanas | Práctica: MUCHA**

Este es el bloque que más diferencia a un QA junior empleable de uno que no consigue trabajo.

### Qué dominar:

**Postman:**
- Crear colecciones y requests (GET, POST, PUT, DELETE)
- Validar códigos de respuesta (200, 201, 400, 401, 404, 500)
- Verificar estructura del JSON de respuesta
- Escribir tests en Postman (pestaña "Tests" con JavaScript básico)
- Variables de entorno ({{base_url}}, {{token}})
- Autenticación: Bearer Token, Basic Auth
- Importar colecciones desde Swagger/OpenAPI

**Swagger / OpenAPI:**
- Leer documentación de una API en Swagger UI
- Ejecutar requests directamente desde Swagger
- Entender contratos de API (parámetros, tipos, obligatorios)

**SQL:**
- SELECT con WHERE, ORDER BY, LIMIT
- JOIN (INNER, LEFT) — muy preguntado en entrevistas
- GROUP BY + COUNT, SUM, AVG
- INSERT, UPDATE, DELETE
- Validar datos en BD luego de ejecutar acciones en la app

### Recursos recomendados:
- API pública para practicar: https://reqres.in | https://jsonplaceholder.typicode.com
- SQL: https://sqlbolt.com (gratis, interactivo)
- DB local: instalar PostgreSQL o usar DB Browser for SQLite

### Proyecto práctico:
> Crear una colección Postman completa de una API pública (mínimo 10 requests), con tests automáticos en cada endpoint y variables de entorno. Subir a GitHub.

---

## 📦 BLOQUE 2 — HERRAMIENTAS DE TRABAJO
**Prioridad: ALTA | Tiempo: 2 semanas | Práctica: MEDIA**

Se aprende mientras se usa. No requiere estudio intensivo, pero hay que manejarlo antes de entrevistar.

### Qué dominar:

**Jira:**
- Crear y gestionar bugs con toda la información (título, pasos, resultado esperado vs actual, evidencia)
- Entender flujos: To Do → In Progress → Done
- Vincular bugs a historias de usuario
- Usar filtros y tableros Kanban/Scrum

**Git (básico pero sólido):**
- `git clone`, `git add`, `git commit`, `git push`
- Crear y cambiar ramas: `git checkout -b feature/nombre`
- `git pull`, `git merge`
- Leer un README y navegar repositorios en GitHub

**CI/CD (conceptual + observación):**
- Entender qué es un pipeline (no hace falta configurarlo)
- Saber leer un resultado de GitHub Actions o Jenkins
- Entender qué significa "build rojo" vs "build verde"

**Documentación y comunicación:**
- Template de bug report profesional
- Template de plan de pruebas
- Cómo escribir casos de prueba en formato Given/When/Then

### Proyecto práctico:
> Reportar 5 bugs reales en una app pública (buggy apps: https://the-internet.herokuapp.com) usando Jira o un tablero Trello con formato profesional. Guardar capturas.

---

## 📦 BLOQUE 3 — AUTOMATIZACIÓN
**Prioridad: ALTA | Tiempo: 6–8 semanas | Práctica: MUCHÍSIMA**

El bloque que más tiempo lleva. No intentes los tres frameworks — elige UNO y domínalo.

### ¿Cuál elegir?

| Framework | Lenguaje | Recomendación |
|-----------|----------|---------------|
| **Playwright** | JS/TS o Python | ✅ **EMPEZAR AQUÍ** — moderno, muy demandado |
| Cypress | JavaScript | Buena opción si ya sabés JS |
| Selenium | Java/Python | Más legacy, pero en muchas empresas grandes |

### Ruta con Playwright (recomendada):

**Semanas 1–2:**
- Instalar Node.js + Playwright
- Primer test: abrir una página, hacer clic, verificar texto
- Selectores: `getByRole`, `getByText`, `getByTestId`, `locator()`
- Assertions básicas: `expect(locator).toBeVisible()`, `toHaveText()`, `toBeEnabled()`

**Semanas 3–4:**
- Page Object Model (POM) — fundamental para entrevistas
- Fixtures y configuración de proyecto
- Manejo de formularios, navegación, esperas
- Screenshots y videos en fallo

**Semanas 5–6:**
- Tests de API con Playwright (`request` context)
- Reportes: HTML report, integración con allure
- Correr tests en CI con GitHub Actions

**Semanas 7–8:**
- Proyecto integrador completo (ver abajo)

### Proyecto práctico integrador:
> Automatizar flujos E2E de https://automationexercise.com o https://saucedemo.com: login, agregar al carrito, checkout. Con Page Object Model, al menos 15 tests, reporte HTML, y subido a GitHub con GitHub Actions corriendo los tests.

---

## 📦 BLOQUE 4 — PYTHON / JAVASCRIPT PARA QA
**Prioridad: MEDIA | Tiempo: 3–4 semanas | Práctica: MEDIA**

No necesitás ser developer. Necesitás leer y escribir scripts básicos.

### Qué aprender (Python — recomendado para QA):

**Fundamentos que SÍ necesitás:**
- Variables, tipos de datos, condicionales, loops
- Funciones
- Manejo de listas y diccionarios
- Leer/escribir archivos (CSV, JSON)
- Try/except para manejo de errores
- Librerías: `requests` (HTTP), `pytest` (testing), `pandas` (datos)

**Para automatización con Playwright/Selenium:**
- Clases y objetos (para POM)
- Imports y módulos

**Lo que NO necesitás (todavía):**
- Programación orientada a objetos avanzada
- Decoradores complejos
- Async/await (solo entender qué es)

### Recursos:
- https://cs50p.harvard.edu (CS50 Python — gratis, excelente)
- Practicar en: https://exercism.org (track Python)

---

## 📦 BLOQUE 5 — IA APLICADA A QA
**Prioridad: DIFERENCIADOR | Tiempo: 2 semanas | Práctica: MEDIA**

No es base, es ventaja competitiva. Lo que sabe hacer un QA con IA que otros no.

### Qué aprender:

- **Generación de casos de prueba** con prompts a ChatGPT/Claude
- **Generación de datos de prueba** (usuarios, tarjetas, direcciones ficticias)
- **Análisis de riesgos** asistido por IA sobre una funcionalidad nueva
- **Reportes de bugs** mejorados con IA (descripción clara, pasos reproducibles)
- **Revisión de código de tests** con IA como pair programmer
- Herramientas: GitHub Copilot (para escribir tests), Testim, Mabl (conocerlas)

### Proyecto práctico:
> Documentar 3 casos de uso reales donde usaste IA para mejorar tu proceso de QA. Incluir los prompts que usaste y el resultado. Esto va en tu portfolio.

---

## 📊 RESUMEN DE PRIORIDADES

| # | Bloque | Urgencia | Semanas | Impacto en entrevista |
|---|--------|----------|---------|----------------------|
| 1 | ✅ Fundamentos Testing | HECHO | — | Base |
| 2 | APIs + SQL | 🔴 CRÍTICA | 3–4 | MUY ALTO |
| 3 | Herramientas (Jira/Git) | 🟠 ALTA | 2 | ALTO |
| 4 | Automatización (Playwright) | 🟠 ALTA | 6–8 | MUY ALTO |
| 5 | Python básico | 🟡 MEDIA | 3–4 | MEDIO |
| 6 | IA para QA | 🟢 DIFERENCIADOR | 2 | DIFERENCIADOR |

---

## 💼 PORTFOLIO MÍNIMO PARA APLICAR

Antes de mandar CVs, tener esto en GitHub:

- [ ] Colección Postman con tests automáticos (API pública)
- [ ] Suite de automatización E2E con Playwright + POM
- [ ] 5 bug reports profesionales (con capturas/videos)
- [ ] Al menos 1 README explicando cada proyecto

---

## 🗓️ CRONOGRAMA ESTIMADO

| Mes | Foco |
|-----|------|
| Mes 1 | APIs + SQL (intensivo) + Jira/Git |
| Mes 2 | Playwright básico + Python fundamentos |
| Mes 3 | Playwright avanzado (POM, CI) |
| Mes 4 | Proyecto integrador + Portfolio |
| Mes 5 | IA para QA + pulir CV + empezar a aplicar |
| Mes 6 | Entrevistas + seguir practicando |

> **Nota:** Con dedicación de 2–3 horas diarias podés estar aplicando en el mes 4–5.

---

## 🎯 CONSEJO CLAVE

Tu background en enfermería es una ventaja real en health-tech, telemedicina y empresas de software médico. Cuando apliques, mencionalo. Un QA que entiende flujos clínicos vale doble en ese nicho.

---

*Última actualización: Mayo 2026*
