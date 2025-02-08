cd Back-end/imisi_proj
#!/bin/bash
cd $(dirname "$0") 
set -o errexit #this is set to test the file
pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate

