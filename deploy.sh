yarn
yarn lint
yarn generate

cd ../chi0307.github.io
rm -rf *.* */
cp -r ../website/dist/* .

git add .
if [ $1 != '' ]
then
  git commit -m $1
else
  git commit -m "$(date +'%Y/%m/%d-%T') new build"
fi
git push origin master
