# Generated by Django 4.2.6 on 2023-12-03 22:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_review_course'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='course',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='api.course'),
        ),
    ]
