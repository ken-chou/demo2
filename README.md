# UI test demo
Using [Nightwatch](https://nightwatchjs.org/) to test a webpage.

# Pre-requisites

```
python setup.py install
pip install .
```

# Running tests locally

From the root directory of this repository
```
export OWM_API_KEY=<your API key>
pytest
```

# Running tests on Travis-CI

This repository comes pre-configured with a `.travis.yml` file.