# Generated by Django 4.2.6 on 2023-12-07 00:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0033_review_dislikes_review_ikes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='ikes',
            new_name='likes',
        ),
    ]