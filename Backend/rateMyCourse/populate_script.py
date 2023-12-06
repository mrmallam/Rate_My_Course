import os
import django
from datetime import date

# Setting up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rateMyCourse.settings')
django.setup()

# Importing models
from api.models import University, Course, Review

# Function to create sample universities
def create_universities():
    university_data = [
        {"name": "University of British Columbia", "reviews": 100, "image": "images/UBC_COA.svg.png"},
        {"name": "University of Toronto", "reviews": 200, "image": "images/Utoronto_coa.svg.png"},
        {"name": "University of Alberta", "reviews": 300, "image": "images/University_of_Alberta_Coat_of_Arms.png"},
        {"name": "University of Montreal", "reviews": 400, "image": "images/UdeM_CoA.svg.png"},
        {"name": "University of Ottawa", "reviews": 500, "image": "images/Uottawacoa.svg.png"},
        {"name": "University of Calgary", "reviews": 600, "image": "images/University_of_Calgary_coat_of_arms_without_motto_scroll.svg.png"},        
    ]

    for uni in university_data:
        University.objects.get_or_create(**uni)

# Function to create sample courses
def create_courses():
    course_data = [
        {"name": "CPSC 355", "university": "University of Calgary",  "description":"Introduction to the design and analysis of algorithms. Topics include: models of computation; choice, iteration, and recursion; asymptotic analysis; algorithmic strategies; data structures; elementary graph algorithms; introduction to the theory of computation."},
        {"name": "CPSC 331", "university": "University of Calgary", "description":"Introduction to the design and analysis of algorithms. Topics include: models of computation; choice, iteration, and recursion; asymptotic analysis; algorithmic strategies; data structures; elementary graph algorithms; introduction to the theory of computation."},
        {"name": "CPSC 512", "university": "University of Montreal", "description":"Introduction to the design and analysis of algorithms. Topics include: models of computation; choice, iteration, and recursion; asymptotic analysis; algorithmic strategies; data structures; elementary graph algorithms; introduction to the theory of computation."},
        {"name": "CPSC 513", "university": "University of Montreal", "description":"Introduction to the design and analysis of algorithms. Topics include: models of computation; choice, iteration, and recursion; asymptotic analysis; algorithmic strategies; data structures; elementary graph algorithms; introduction to the theory of computation."},
        {"name": "CPSC 514", "university": "University of Montreal", "description":"Introduction to the design and analysis of algorithms. Topics include: models of computation; choice, iteration, and recursion; asymptotic analysis; algorithmic strategies; data structures; elementary graph algorithms; introduction to the theory of computation."},
        {"name": "CPSC 515", "university": "University of Ottawa", "description":"Introduction to the design and analysis of algorithms. Topics include: models of computation; choice, iteration, and recursion; asymptotic analysis; algorithmic strategies; data structures; elementary graph algorithms; introduction to the theory of computation."},
        {"name": "CPSC 516", "university": "University of Alberta", "description":"Introduction to the design and analysis of algorithms. Topics include: models of computation; choice, iteration, and recursion; asymptotic analysis; algorithmic strategies; data structures; elementary graph algorithms; introduction to the theory of computation."},
    ]

    for course in course_data:
        university = University.objects.get(name=course["university"])
        Course.objects.get_or_create(name=course["name"], university=university, description=course["description"])


# Function to create sample reviews
def create_reviews():
    review_data = [
        {"course": "CPSC 514", "university": "University A", "workload": 1, "difficulty": 2, "usefulness": 3, "review": "Easy course", "professor": "Prof. X", "submission_date": date.today()},
        {"course": "Course 1", "university": "University A", "workload": 3, "difficulty": 4, "usefulness": 5, "review": "Good course", "professor": "Prof. X", "submission_date": date.today()},
        {"course": "Course 2", "university": "University B", "workload": 2, "difficulty": 3, "usefulness": 4, "review": "Challenging course", "professor": "Prof. Y", "submission_date": date.today()},
    ]

    for review in review_data:
        course = Course.objects.get(name=review["course"])
        university = University.objects.get(name=review["university"])
        Review.objects.get_or_create(course=course, university=university, **review)

# Running the functions
create_universities()
create_courses()
# create_reviews()
