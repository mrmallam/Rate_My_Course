# Generated by Django 4.2.6 on 2023-11-29 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_rename_rating_universities_reviews'),
    ]

    operations = [
        migrations.AlterField(
            model_name='universities',
            name='reviews',
            field=models.IntegerField(),
        ),
    ]