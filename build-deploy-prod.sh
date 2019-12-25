echo '== Start to build then deploy in PROD mode ==';

if [ -z "$DIST_PATH" ]
then
      echo "Output folder is not specified! \$DIST_PATH need to be a valid path."
      echo '== ERROR - Stop all processes ==';
      exit 1
else
      npm i
      ng build --prod --outputPath=$DIST_PATH
      echo $DIST_PATH
      echo '== SUCCESS ==';
fi