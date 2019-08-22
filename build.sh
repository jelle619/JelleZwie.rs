#!/bin/bash

#  __  __ _    ____
# |  \/  | | _|  _ \  ___   ___ ___
# | |\/| | |/ / | | |/ _ \ / __/ __|
# | |  | |   <| |_| | (_) | (__\__ \
# |_|  |_|_|\_\____/ \___/ \___|___/

mkdocs build --clean --config-file mkdocs/characters/mkdocs.yml --site-dir ../../characters
rm -rf mkdocs

#  _   _
# | | | | _____  _____
# | |_| |/ _ \ \/ / _ \
# |  _  |  __/>  < (_) |
# |_| |_|\___/_/\_\___/

# No build commands are needed at the moment.
