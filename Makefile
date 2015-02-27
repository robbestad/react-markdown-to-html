BIN = ./node_modules/.bin

install link:
	@npm $@

lint:
	jsxhint -c .jshintrc ./index.js

release-patch: lint 
	@$(call release,patch)

release-minor: lint 
	@$(call release,minor)

release-major: lint 
	@$(call release,major)

publish:
	git push --tags origin HEAD:master
	npm publish

define release
	npm version $(1)
endef
