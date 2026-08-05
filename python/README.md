# Python para QA

Scripts y tests en Python que respaldan el curso de Automatización con Selenium WebDriver, Python y Pytest.

## Contenido

- `password_validator.py` — función propia de validación de contraseñas seguras.
- `test_password_validator.py` — tests con pytest, incluye casos manuales y un bloque **data-driven** (`@pytest.mark.parametrize`) que lee los casos desde `test_data_passwords.csv`.
- `api_client.py` — cliente que consume la API pública [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) con la librería `requests` (la misma API que ya se usa en `tests/api.spec.js` con Playwright).
- `test_api_client.py` — tests con pytest sobre `api_client.py` (GET, GET por ID, GET inexistente → 404, POST, y un caso parametrizado).

## Cómo correrlo

```bash
cd python
pip install -r requirements.txt
pytest -v
```

`test_api_client.py` necesita conexión a internet porque pega contra la API real. `test_password_validator.py` no depende de red.
