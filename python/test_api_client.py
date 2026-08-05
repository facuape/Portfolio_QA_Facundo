"""
Tests de api_client.py con pytest.
Consume la API real de jsonplaceholder.typicode.com (requiere conexión
a internet para correr).
"""

import pytest

from api_client import create_post, get_post, get_posts


def test_get_posts_status_code():
    response = get_posts()
    assert response.status_code == 200


def test_get_posts_devuelve_lista_no_vacia():
    response = get_posts()
    body = response.json()
    assert len(body) > 0


def test_get_post_by_id():
    response = get_post(1)
    assert response.status_code == 200
    body = response.json()
    assert body["id"] == 1
    assert "title" in body


def test_get_post_inexistente():
    response = get_post(99999)
    assert response.status_code == 404


def test_create_post():
    response = create_post("Mi post de QA", "Probando POST con Python", 1)
    assert response.status_code == 201
    body = response.json()
    assert body["title"] == "Mi post de QA"


@pytest.mark.parametrize("post_id", [1, 5, 10, 20])
def test_multiples_posts_existen(post_id):
    response = get_post(post_id)
    assert response.status_code == 200
