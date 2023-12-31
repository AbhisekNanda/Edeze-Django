# Generated by Django 4.2.2 on 2023-06-20 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0008_alter_carttraining_course_id_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Consulting",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("consultant_id", models.IntegerField()),
                ("cons_name", models.CharField(max_length=100)),
                ("cons_desc", models.TextField()),
                ("cons_author", models.CharField(max_length=100)),
                ("cons_rating", models.IntegerField()),
            ],
        ),
    ]
