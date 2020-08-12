# Makefile

up: ## Run all containers
		@docker-compose up -d

down: ##
		@docker-compose down

re: down up 

compile-frontend: 
		@cd frontend && npm install && cd -

compile-backend:
		@cd backend && npm install && cd -

build-frontend: 
		@cd frontend && npm run build-prod && cd -

compile: compile-backend compile-frontend build-frontend

help:
		@grep -h -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'