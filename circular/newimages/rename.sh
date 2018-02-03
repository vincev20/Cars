for x in *"_"*; do
  mv -- "$x" "${x//_/-}"
done
