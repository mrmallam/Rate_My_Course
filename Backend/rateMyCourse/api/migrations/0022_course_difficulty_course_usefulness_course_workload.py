# Generated by Django 4.2.6 on 2023-12-06 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_remove_course_difficulty_remove_course_usefulness_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='difficulty',
            field=models.CharField(default='Medium', max_length=25),
        ),
        migrations.AddField(
            model_name='course',
            name='usefulness',
            field=models.CharField(default='Medium', max_length=25),
        ),
        migrations.AddField(
            model_name='course',
            name='workload',
            field=models.CharField(default='Medium', max_length=25),
        ),
    ]
