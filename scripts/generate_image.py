#!/usr/bin/env python3
"""Generate an image via the COMP4020 strproxy image endpoint."""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.request

BASE_URL = "https://strproxy.comp.anu.edu.au"


def _api_key() -> str:
    key = os.environ.get("ANTHROPIC_AUTH_TOKEN")
    if not key:
        raise RuntimeError(
            "no API key found - set ANTHROPIC_AUTH_TOKEN in your environment, never in code"
        )
    return key


def generate_image(prompt: str, model: str = "flux-schnell") -> str:
    """Generate an image and return its URL."""
    body = json.dumps({"model": model, "prompt": prompt}).encode()
    req = urllib.request.Request(
        f"{BASE_URL}/api/images/generations",
        data=body,
        method="POST",
        headers={
            "Authorization": f"Bearer {_api_key()}",
            "content-type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req) as res:
            payload = json.load(res)
    except urllib.error.HTTPError as err:
        raise RuntimeError(f"image generation failed: {err.code} {err.read().decode()}") from err
    return payload["data"][0]["url"]


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("usage: python scripts/generate_image.py <prompt> [model]", file=sys.stderr)
        sys.exit(1)
    prompt_arg = sys.argv[1]
    model_arg = sys.argv[2] if len(sys.argv) > 2 else "flux-schnell"
    print(generate_image(prompt_arg, model_arg))
