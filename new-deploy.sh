npm run build

# 404 page is also index page for SPA routing
cp dist/index.html dist/404.html

git add dist

git commit -m "New deployment"

git push

git subtree push --prefix dist origin gh-pages