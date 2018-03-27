nba_app

NPM Bundles to install
npm install react-router-dom react-font-awesome react-smple-sidenav react-slick --save
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css

Must use react eject to reuse stylesheets if more than one component is using it
npm run eject
config/webpack-config-dev & config/webpack-config-prod
line 160 import loaders
module: true
localIdentName: '[name]__[local]__[hash:base64:5]'