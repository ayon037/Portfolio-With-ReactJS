# Portfolio-With-ReactJS

# ==> To create a new repository on the command line

echo "# Personal-Portfolio-with-React-and-ThreeJS" >> README.md

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/ayon037/Portfolio-With-ReactJS.git

git push -u origin main

# ==> To push an existing repository from the command line

git remote add origin https://github.com/ayon037/Portfolio-With-ReactJS.git

git branch -M main

git push -u origin main

# ==> To deploy in github

git add .

git commit -m "Prepare for deployment"

git checkout -b gh-pages

git push origin gh-pages

git checkout main

npm run build

npm run deploy

## if it doesn't deploy, then:

npm run build

npx gh-pages -d dist --verbose

npm run deploy

## If the --verbose option isn't available for gh-pages, you can skip it. Instead, you can manually verify and try the following steps:

npm run build

git checkout -b gh-pages

git add dist -f

git commit -m "Add dist files for GitHub Pages"

git subtree push --prefix dist origin gh-pages

## If you encounter any issues with subtree, try:

git push origin `git subtree split --prefix dist main`:gh-pages --force


