# Generated by Django 4.2.2 on 2023-06-19 06:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_car"),
    ]

    operations = [
        migrations.DeleteModel(name="Car",),
        migrations.DeleteModel(name="User",),
    ]