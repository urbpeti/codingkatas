.PHONY: test

test:
	docker-compose build && \
	docker-compose run --rm codewars-javascript && \
	docker-compose run --rm codewars-typescript