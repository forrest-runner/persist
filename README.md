# Forrest Persist Action

                                        ┏━━━━━━━━━━━━━━━┓
                                        ┃      Run      ┃
                                        ┃    Forrest    ┃
                                        ┃      Run      ┃
                                        ┗━━━┯━━━━━━━┯━━━┛

GitHub Action that tells the [Forrest Runner](../forrest) to persist the disk
image of the currently running VM for future runs.

```yaml
name: Debian based machines

on: [push]

jobs:
  base:
    name: Base
    runs-on: [self-hosted, forrest, debian-base]
    steps:
      - name: Install software
        run: sudo apt install git

      - uses: forrest-runner/persist@main
        if: ${{ secrets.PERSISTENCE_TOKEN != ''  }}
        with:
          token: ${{ secrets.PERSISTENCE_TOKEN }}
```
