#! /bin/bash

webpack && rsync -avzr ./client/ mmmurphy:play/plates/
