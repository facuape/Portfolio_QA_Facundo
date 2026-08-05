"""
Tests de password_validator.py con pytest.
Incluye casos manuales y un bloque data-driven que lee los casos
desde test_data_passwords.csv (parametrize).
"""

import csv
import os

import pytest

from password_validator import validate_password


def test_password_valida():
    is_valid, errors = validate_password("Segura123!")
    assert is_valid
    assert errors == []


def test_password_muy_corta():
    is_valid, errors = validate_password("Ab1!")
    assert not is_valid
    assert "Debe tener al menos 8 caracteres" in errors


def test_password_sin_mayuscula():
    is_valid, errors = validate_password("segura123!")
    assert not is_valid
    assert "Debe tener al menos una letra mayúscula" in errors


def test_password_sin_numero():
    is_valid, errors = validate_password("SeguraClave!")
    assert not is_valid
    assert "Debe tener al menos un número" in errors


def test_password_sin_caracter_especial():
    is_valid, errors = validate_password("Segura1234")
    assert not is_valid
    assert "Debe tener al menos un carácter especial" in errors


def _read_test_cases():
    """Data-driven testing: lee los casos desde un CSV en vez de hardcodearlos."""
    path = os.path.join(os.path.dirname(__file__), "test_data_passwords.csv")
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return [(row["password"], row["expected_valid"] == "True") for row in reader]


@pytest.mark.parametrize("password,expected_valid", _read_test_cases())
def test_password_data_driven(password, expected_valid):
    is_valid, _ = validate_password(password)
    assert is_valid == expected_valid
