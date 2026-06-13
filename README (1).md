# Portfolio QA Manual — Facundo P.

## Sobre mí

Soy enfermero en transición al mundo IT, especializándome en QA Testing manual. Estoy desarrollando habilidades en diseño de casos de prueba, reporte de bugs y documentación de defectos con el objetivo de conseguir mi primer trabajo remoto como QA Tester.

---

## Proyecto 1: Testing Manual — SauceDemo

**Sitio testeado:** [saucedemo.com](https://www.saucedemo.com)  
**Módulo:** Login  
**Tipo de testing:** Manual funcional, de interfaz (UI), seguridad y compatibilidad  
**Fecha:** Mayo 2026

### ¿Qué hice?

- Diseñé y ejecuté **15 casos de prueba** para el módulo de Login cubriendo escenarios positivos, negativos, de seguridad, UI y compatibilidad
- Documenté **2 bugs reales** encontrados durante la exploración del sitio
- Usé el usuario `problem_user` para testing exploratorio y detección de defectos visuales

### Bugs encontrados

| ID | Título | Severidad | Estado |
|----|--------|-----------|--------|
| BUG-001 | Mensaje de error de usuario bloqueado no desaparece al corregir credenciales | 🟡 Menor | Abierto |
| BUG-002 | Imágenes de productos no corresponden al artículo en el catálogo | 🟠 Mayor | Abierto |

### Casos de prueba ejecutados

| Tipo | Cantidad |
|------|----------|
| Funcional positivo | 4 |
| Funcional negativo | 5 |
| Interfaz (UI) | 4 |
| Seguridad | 1 |
| Compatibilidad | 1 |
| **Total** | **15** |

---

## Proyecto 2: Testing de APIs — ReqRes

**API testeada:** [reqres.in](https://reqres.in)  
**Herramienta:** Postman  
**Tipo de testing:** REST API — funcional y validación de respuestas  
**Fecha:** Mayo 2026

### ¿Qué hice?

- Creé una colección de Postman con requests GET, POST, PUT y DELETE
- Validé códigos de respuesta HTTP (200, 201, 404, etc.)
- Verifiqué la estructura y el contenido de los JSON de respuesta
- Escribí tests automáticos en la pestaña "Tests" de Postman
- Configuré variables de entorno (`base_url`, `token`)
- Probé autenticación con Bearer Token

### Colección Postman

| Archivo | Descripción |
|---------|-------------|
| `ReqRes API - QA Practice.postman_collection.json` | Colección con 8+ requests y tests automáticos |

---

## Proyecto 3: SQL para QA — sqlbolt.com

**Herramienta:** sqlbolt.com  
**Fecha:** Junio 2026

### ¿Qué practiqué?

- Consultas con SELECT, WHERE, ORDER BY y LIMIT
- JOIN (INNER y LEFT) para cruzar datos entre tablas
- GROUP BY con COUNT, SUM y AVG
- INSERT para agregar registros
- UPDATE para modificar datos existentes
- DELETE para eliminar filas con condiciones
- CREATE TABLE para definir estructuras de bases de datos

### ¿Para qué sirve en QA?

Como QA es fundamental saber SQL para validar en la base de datos que una acción en la app realmente guardó los datos correctos. Por ejemplo: después de registrar un usuario, verificar con un SELECT que el registro existe en la tabla.

---

## Herramientas utilizadas

- **Navegadores:** Chrome, Firefox
- **SO:** Windows 11
- **API Testing:** Postman
- **Base de datos:** SQL (sqlbolt.com)
- **Documentación:** Microsoft Excel
- **Control de versiones:** Git + GitHub

---

## Archivos del portfolio

| Archivo | Descripción |
|---------|-------------|
| `Plantillas_QA_SauceDemo_Corregido.xlsx` | Casos de prueba ejecutados + Bug Reports documentados |
| `ReqRes API - QA Practice.postman_collection.json` | Colección Postman con tests automáticos |
| `ROADMAP_PRINCIPAL.md` | Plan de estudio completo QA Junior |
| `CHECKLIST_SEMANAL.md` | Seguimiento de progreso semanal |

---

*En construcción — próximamente agrego testing del módulo Carrito de Compras y automatización con Playwright.*
