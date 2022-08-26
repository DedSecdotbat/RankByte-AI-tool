# Generated by Django 2.1.5 on 2022-08-26 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CollegeListDiploma',
            fields=[
                ('SL_NO', models.IntegerField(db_column='SL_NO', primary_key=True, serialize=False)),
                ('STATE_NAME', models.CharField(db_column='STATE_NAME', default='', max_length=255)),
                ('UNIVERSITY_NAME', models.CharField(db_column='UNIVERSITY_NAME', default='', max_length=255)),
                ('COLLEGE_NAME', models.CharField(db_column='COLLEGE_NAME', default='', max_length=255)),
                ('DISTRICT_NAME', models.CharField(db_column='DISTRICT_NAME', default='', max_length=255)),
                ('TYPE_OF_DIPLOMA_INSTITUTE',
                 models.CharField(db_column='TYPE_OF_DIPLOMA_INSTITUTE', default='', max_length=255)),
                ('STUDENT_ENROLMENT_MALE', models.IntegerField(db_column='STUDENT_ENROLMENT_MALE', default='')),
                ('STUDENT_ENROLMENT_FEMALE', models.IntegerField(db_column='STUDENT_ENROLMENT_FEMALE', default='')),
                ('STUDENT_ENROLMENT_TOTAL', models.IntegerField(db_column='STUDENT_ENROLMENT_TOTAL', default='')),
                ('NUMBER_OF_TEACHER_MALE', models.IntegerField(db_column='NUMBER_OF_TEACHER_MALE', default='')),
                ('NUMBER_OF_TEACHER_FEMALE', models.IntegerField(db_column='NUMBER_OF_TEACHER_FEMALE', default='')),
                ('NUMBER_OF_TEACHER_TOTAL', models.IntegerField(db_column='NUMBER_OF_TEACHER_TOTAL', default='')),
                ('LAB_FACILITIES', models.CharField(db_column='LAB_FACILITIES', default='', max_length=11)),
                ('HOSTEL_FACILITIES', models.CharField(db_column='HOSTEL_FACILITIES', default='', max_length=11)),
            ],
            options={
                'db_table': 'exp_table',
            },
        ),
    ]
