echo 'Trung Dang Test';

if [ -z "$TRUNG" ]
then
      echo "\$var is empty"
      exit 1
else
      echo "\$var is NOT empty"
      echo $TRUNG
fi