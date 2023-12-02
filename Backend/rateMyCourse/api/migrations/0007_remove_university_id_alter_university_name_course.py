# Generated by Django 4.2.6 on 2023-12-02 22:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_university_reviews'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='university',
            name='id',
        ),
        migrations.AlterField(
            model_name='university',
            name='name',
            field=models.CharField(max_length=50, primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('university', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.university')),
            ],
        ),
    ]