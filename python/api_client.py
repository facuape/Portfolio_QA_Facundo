"""
Cliente simple para testear la API de jsonplaceholder.typicode.com
(la misma API que ya se usa en tests/api.spec.js con Playwright,
pero acá en Python con la librería requests).
"""

import requests

BASE_URL = "https://jsonplaceholder.typicode.com"


def get_posts():
    return requests.get(f"{BASE_URL}/posts")


def get_post(post_id):
    return requests.get(f"{BASE_URL}/posts/{post_id}")


def create_post(title, body, user_id):
    return requests.post(
        f"{BASE_URL}/posts",
        json={"title": title, "body": body, "userId": user_id},
    )
