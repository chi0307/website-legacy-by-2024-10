rm -rf dist

yarn
yarn lint
yarn generate

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:chi0307/chi0307.github.io.git master

cd -
