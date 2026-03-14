# 1) prerequisites
node -v
npm -v
java -version
docker --version

# 2) unpack
unzip jhipster-platform-blueprint-e2e-nextstep.zip
cd jhipster-platform-blueprint-e2e

# 3) install blueprint deps
npm install

# 4) check package health
npm run doctor
npm run validate:jdl

# 5) make the blueprint available locally
npm link

# 6) create a clean temp app folder for the smoke run
mkdir -p ../monolith-smoke
cd ../monolith-smoke

# 7) run JHipster with your local blueprint
jhipster --blueprints @your-org/jhipster-platform-starter --skip-install