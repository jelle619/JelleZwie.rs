#!/bin/bash

#            _       _                
#  _ __ ___ | | ____| | ___   ___ ___ 
# | '_ ` _ \| |/ / _` |/ _ \ / __/ __|
# | | | | | |   < (_| | (_) | (__\__ \
# |_| |_| |_|_|\_\__,_|\___/ \___|___/
                                     
mkdir characters
mkdocs build --clean --config-file mkdocs/characters/mkdocs.yml --site-dir ../../characters
