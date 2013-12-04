TESTS = test/*.js
REPORTER = list

test :
	@./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--growl \
      --timeout 2000 \
		$(TESTS)

test-w :
	@./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--growl \
      --watch \
      --timeout 2000 \
		$(TESTS)

.PHONY: test test-w bench
