#!/bin/sh

build_name="build-$(date +%s)"
archive=$build_name".tar.bz2"
archive_path=./builds/$archive
host="YOUR_HOST_INFO"
remote_path=/path/to/remote/builds
target_source=./build-source
