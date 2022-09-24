#!/bin/bash

docker run --rm \
  -v "${PWD}/src:/local/src" \
  openapitools/openapi-generator-cli generate \
    -g typescript-axios \
    -i /local/src/swagger.yml \
    -o /local/api
