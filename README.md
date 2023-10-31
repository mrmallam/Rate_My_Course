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


Docker - Backend:
	1. navigate to /Backend
    Build (if its your first time): docker build -t backend_rate_my_course . 
    Run: 

    

	docker run -p 8000:8000 backend_rate_my_course python3 ./rateMyCourse/manage.py runserver localhost:8000
