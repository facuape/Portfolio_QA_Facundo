# Portfolio QA — Facundo P.

## Sobre mí

Soy enfermero en transición al mundo IT, especializándome en QA Testing (manual y automatizado). Desarrollé habilidades en diseño de casos de prueba, automatización con Playwright, testing de APIs, SQL, y scripting en Python, con el objetivo de conseguir mi primer trabajo remoto como QA Tester.

---

## Proyecto 1: Testing Manual — SauceDemo

**Sitio testeado:** [saucedemo.com](https://www.saucedemo.com)  
**Módulo:** Login  
**Tipo de testing:** Manual funcional, de interfaz (UI), seguridad y compatibilidad

### ¿Qué hice?

- Diseñé y ejecuté **15 casos de prueba** para el módulo de Login cubriendo escenarios positivos, negativos, de seguridad, UI y compatibilidad
- Documenté **2 bugs reales** encontrados durante la exploración del sitio
- Usé el usuario `problem_user` para testing exploratorio y detección de defectos visuales

### Bugs encontrados

| ID | Título | Severidad | Estado |
|----|--------|-----------|--------|
| BUG-001 | Mensaje de error de usuario bloqueado no desaparece al corregir credenciales | 🟡 Menor | Abierto |
| BUG-002 | Imágenes de productos no corresponden al artículo en el catálogo | 🟠 Mayor | Abierto |

📄 Ver detalle en: [`docs/Plantillas_QA_SauceDemo_Corregido.xlsx`](./docs/Plantillas_QA_SauceDemo_Corregido.xlsx)

---

## Proyecto 2: Automatización E2E — Playwright

**Sitio testeado:** [saucedemo.com](https://www.saucedemo.com)  
**Herramienta:** Playwright + JavaScript  
**Arquitectura:** Page Object Model + Fixtures + CI/CD

### ¿Qué hice?

- Implementé **Page Object Model** (`LoginPage`, `InventoryPage`, `CheckoutPage`) para mantener el código organizado y escalable
- Usé **fixtures** de Playwright para evitar repetir código de setup en cada test
- Configuré **baseURL** y reportes HTML
- Configuré **CI/CD con GitHub Actions** para correr los tests automáticamente en cada push
- Escribí **15 tests automatizados** cubriendo:
  - Login (5 tests: exitoso, fallido, usuario bloqueado, validaciones de UI)
  - Tests de API con Playwright (3 tests: GET, GET por ID, POST)
  - Inventario y carrito (3 tests)
  - Checkout end-to-end (4 tests: flujo completo + validaciones de campos obligatorios)

📁 Código en: [`/tests`](./tests) y [`/pages`](./pages)  
⚙️ Workflow de CI: [`.github/workflows/playwright.yml`](./.github/workflows/playwright.yml)

---

## Proyecto 3: Testing de APIs — Postman

**API testeada:** [reqres.in](https://reqres.in)  
**Herramienta:** Postman

### ¿Qué hice?

- Creé una colección de Postman con requests GET, POST, PUT y DELETE
- Validé códigos de respuesta HTTP (200, 201, 404, etc.)
- Verifiqué la estructura y el contenido de los JSON de respuesta
- Escribí tests automáticos en la pestaña "Tests" de Postman
- Configuré variables de entorno (`base_url`, `token`) y autenticación con Bearer Token

📄 Colección en: [`postman/ReqRes API - QA Practice.postman_collection.json`](./postman)

---

## Proyecto 4: SQL para QA

**Herramienta:** sqlbolt.com

### ¿Qué practiqué?

- SELECT, WHERE, ORDER BY, LIMIT
- JOIN (INNER y LEFT) para cruzar datos entre tablas
- GROUP BY con COUNT, SUM y AVG
- INSERT, UPDATE, DELETE
- CREATE TABLE para definir estructuras de bases de datos

**¿Para qué sirve en QA?** Permite validar en la base de datos que una acción en la app realmente guardó los datos correctos (ej: tras un registro, verificar con SELECT que el dato existe).

---

## Proyecto 5: Python para QA

**Herramienta:** Python + pytest + requests

### ¿Qué hice?

- Scripts con fundamentos de Python (variables, condicionales, loops, funciones)
- Consumo de APIs con la librería `requests`
- Tests automatizados con `pytest` y `assert`
- **Data-driven testing**: lectura de casos de prueba desde archivos CSV para correr el mismo test con múltiples combinaciones de datos
- Función propia de validación de contraseñas seguras, con sus tests correspondientes

---

## IA aplicada a QA

Documenté 3 casos reales de uso de IA en mi proceso de testing (generación de casos de prueba, generación de datos de prueba, mejora de bug reports).

📄 Ver detalle en: [`IA_en_mi_workflow_QA.md`](./IA_en_mi_workflow_QA.md)

---

## Herramientas utilizadas

- **Automatización:** Playwright, JavaScript
- **Lenguajes:** JavaScript, Python, SQL
- **API Testing:** Postman, Playwright (request context)
- **CI/CD:** GitHub Actions
- **Control de versiones:** Git + GitHub
- **Documentación:** Microsoft Excel, Microsoft Word
- **Navegadores:** Chrome, Firefox
- **SO:** Windows 11

---

## Estructura del repositorio

```
├── tests/              # Tests de Playwright (login, API, inventario, checkout)
├── pages/              # Page Objects (LoginPage, InventoryPage, CheckoutPage)
├── docs/               # Documentación de testing manual (Excel, Word)
├── postman/            # Colección de Postman
├── .github/workflows/  # Configuración de CI/CD
├── ROADMAP_PRINCIPAL.md
├── CHECKLIST_SEMANAL.md
└── IA_en_mi_workflow_QA.md
```

---

*En construcción — próximamente agrego más casos de prueba y nuevos módulos de SauceDemo.*
