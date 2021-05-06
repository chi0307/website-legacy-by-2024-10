yarn
yarn lint
yarn build
yarn generate

cd ../website-static
rm -rf *.* */
cp -rf ../website/dist/* .

git add .
if [ $1 != '' ]
then
  git commit -m $1
else
  git commit -m "$(date +'%Y/%m/%d-%T') new build"
fi
git push origin master
