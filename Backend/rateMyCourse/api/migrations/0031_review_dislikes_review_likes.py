# Generated by Django 4.2.6 on 2023-12-06 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0030_remove_review_person_review_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='dislikes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='review',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]
