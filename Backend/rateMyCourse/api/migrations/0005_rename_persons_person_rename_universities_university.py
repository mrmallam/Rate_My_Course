# Generated by Django 4.2.6 on 2023-11-29 19:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_universities_reviews'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Persons',
            new_name='Person',
        ),
        migrations.RenameModel(
            old_name='Universities',
            new_name='University',
        ),
    ]
