.PHONY: install dev test lint build help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Install Node dependencies
	npm install

dev: ## Start Vite dev server
	npm run dev

test: ## Run vitest
	npm run test

lint: ## Run eslint
	npm run lint

build: ## Production build
	npm run build
