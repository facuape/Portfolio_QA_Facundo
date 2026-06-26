# IA en mi workflow de QA — Facundo P.

## Introducción

Como parte de mi formación en QA Testing, utilicé inteligencia artificial (Claude) como herramienta de apoyo en distintas etapas de mi proceso de testing. A continuación documento 3 casos reales donde la IA mejoró mi flujo de trabajo.

---

## Caso 1: Generación de casos de prueba

**Contexto:** Necesitaba diseñar una batería de casos de prueba para el módulo de Login de SauceDemo, cubriendo distintos tipos de testing (funcional, UI, seguridad, compatibilidad).

**Prompt utilizado:**
> "Ayudame a diseñar casos de prueba para el módulo de login de SauceDemo, cubriendo casos positivos, negativos, de seguridad y de UI."

**Resultado:**
Obtuve una estructura de 15 casos de prueba organizados por categoría, que luego documenté en una plantilla de Excel:
- 4 casos funcionales positivos
- 5 casos funcionales negativos
- 4 casos de UI
- 1 caso de seguridad
- 1 caso de compatibilidad

**Valor agregado:** La IA me ayudó a pensar en categorías de testing que no hubiera considerado por mi cuenta al empezar (como casos de seguridad), ahorrándome tiempo de investigación y asegurando una cobertura más completa.

---

## Caso 2: Generación de datos de prueba

**Contexto:** Para los tests automatizados con Playwright, necesitaba datos de prueba realistas para simular distintos escenarios (usuarios válidos, inválidos, bloqueados).

**Prompt utilizado:**
> "Necesito datos de prueba para testear el login: un usuario válido, uno inválido y un caso de usuario bloqueado."

**Resultado:**
Se generaron combinaciones de usuario/contraseña para cubrir los 3 escenarios, que después usé tanto en mis tests manuales como en los automatizados con Playwright.

**Valor agregado:** Evité perder tiempo pensando combinaciones de datos desde cero, y me asintegré rápido a identificar qué escenarios de datos son relevantes para un módulo de login.

---

## Caso 3: Mejora de bug reports

**Contexto:** Al documentar bugs encontrados en SauceDemo para cargarlos en Jira, quería que el formato fuera profesional y completo (con pasos claros, resultado esperado vs actual).

**Prompt utilizado:**
> "Ayudame a redactar un bug report profesional para este problema: el mensaje de error de usuario bloqueado no desaparece al corregir las credenciales."

**Resultado:**
Obtuve un bug report estructurado con:
- Precondiciones
- Pasos para reproducir (numerados)
- Resultado actual
- Resultado esperado

**Valor agregado:** El formato resultante es mucho más claro y profesional que lo que hubiera escrito sin guía, lo cual es clave para que un desarrollador pueda entender y reproducir el bug rápidamente.

---

## Conclusión

Usar IA como asistente en mi proceso de QA no reemplaza el pensamiento crítico del tester, sino que lo acelera: me ayuda a estructurar ideas, pensar en casos que no había considerado, y redactar documentación más profesional. El criterio de qué testear y cómo interpretar los resultados sigue siendo responsabilidad mía como QA.
