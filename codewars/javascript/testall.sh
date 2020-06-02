for directory in */ ; do
    cd $directory && npm install && npm run test || exit 1;
    cd ..
done