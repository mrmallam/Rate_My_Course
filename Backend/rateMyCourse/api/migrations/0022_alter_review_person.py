# Generated by Django 4.2.6 on 2023-12-06 06:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0021_review_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='person',
            field=models.ForeignKey(default='test', on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to=settings.AUTH_USER_MODEL),
        ),
    ]
