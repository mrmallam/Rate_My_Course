# Rate_My_Course

How to run your python enviornment

To Run:
	source python_env/bin/activate

To quit:
	diactivate

-- 

How to run Django V1.0
	- Go to: /rateMyCourse
	- Then Run: python3 manage.py runserver
	- Go to: http://127.0.0.1:8000



Run Docker-compose: // this is backend version ONLY
	- docker-compose -build
	- navigate to http://127.0.0.1:8000


Postgres: https://www.sqlshack.com/setting-up-a-postgresql-database-on-mac/
	- START: 
		brew services start postgresql
	- STOP: 
		brew services stop postgresql
	- Start program:
		psql postgres
	- Quit/Exit seassion:
		\q
	- Login with a user 'X':
		psql postgres -U 'X';