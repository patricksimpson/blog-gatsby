#!/bin/sh
dir="$(dirname "$0")"

. $dir/deploy-config.sh

echo "-------------> starting deploy... [$build_name]"

npx gatsby build
tar -cjvf $archive_path $target_source

echo "-------------> Copying archive to server, please wait..."

scp $archive_path $host:$remote_path

echo "-------------> Deploying."

ssh $host <<EOF
tar -xvjf $remote_path/$archive -C $remote_path && mv $remote_path/public $remote_path/$build_name
rm $remote_path/current
ln -s $remote_path/$build_name $remote_path/current
EOF

echo "-------------> Disconnected."
echo "-------------> Deploy complete!"
