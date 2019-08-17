#!/bin/bash

mkdir characters
mkdocs build --clean --config-file mkdocs/characters/mkdocs.yml --site-dir ../../characters
