"""
Validador de contraseñas seguras.

Regla de negocio (típica de un formulario de registro):
- Al menos 8 caracteres
- Al menos una letra mayúscula
- Al menos una letra minúscula
- Al menos un número
- Al menos un carácter especial
"""

import re


def validate_password(password):
    """
    Valida una contraseña contra las reglas de seguridad.

    Devuelve una tupla (es_valida: bool, errores: list[str]).
    Si es_valida es True, la lista de errores está vacía.
    """
    errors = []

    if len(password) < 8:
        errors.append("Debe tener al menos 8 caracteres")
    if not re.search(r"[A-Z]", password):
        errors.append("Debe tener al menos una letra mayúscula")
    if not re.search(r"[a-z]", password):
        errors.append("Debe tener al menos una letra minúscula")
    if not re.search(r"[0-9]", password):
        errors.append("Debe tener al menos un número")
    if not re.search(r'[!@#$%^&*(),.?":{}|<>_\-]', password):
        errors.append("Debe tener al menos un carácter especial")

    return (len(errors) == 0, errors)
