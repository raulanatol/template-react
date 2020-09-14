.DEFAULT_GOAL := check

init:
	@echo "Initialising the project"
	@yarn install

start:
	@echo "🏃‍♀️ Starting project"
	@yarn start

check: --pre_check test build
	@echo "✅"

docs:
	@doctoc README.md
	@echo "📚 Documentation ready!"

clean:
	@echo "🛁 Cleaning..."
	@yarn clean

clean_all:
	@echo "🧨 Clean all"
	@yarn cleanup

test:
	@echo "Testing..."
	@yarn test-ci

build:
	@echo "👩‍🏭 Building..."
	@yarn build

release_patch: release

release_minor: check
	@.scripts/finish-release minor

release_major: check
	@.scripts/finish-release major

release: check
	@.scripts/finish-release patch

--pre_check:
	@yarn clean
	@yarn install
	@yarn lint
	@yarn tsc --project tsconfig.json
