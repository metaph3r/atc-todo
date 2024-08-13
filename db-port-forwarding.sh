#!/bin/bash
kubectl port-forward --namespace atc-todo svc/atc-todo-mongodb 27017:27017
