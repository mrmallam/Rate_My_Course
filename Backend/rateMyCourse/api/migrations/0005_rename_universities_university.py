# Generated by Django 4.2.6 on 2023-12-02 21:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_universities_reviews'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Universities',
            new_name='University',
        ),
    ]