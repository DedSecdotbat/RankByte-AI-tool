from django.db import models


# Create your models here.


class CollegeListDiploma(models.Model):
    SL_NO = models.IntegerField(db_column="SL_NO", primary_key=True, null=False)
    STATE_NAME = models.CharField(db_column="STATE_NAME", max_length=255, default="", null=False)
    UNIVERSITY_NAME = models.CharField(db_column="UNIVERSITY_NAME", max_length=255, default="", null=False)
    COLLEGE_NAME = models.CharField(db_column="COLLEGE_NAME", max_length=255, default="", null=False)
    DISTRICT_NAME = models.CharField(db_column="DISTRICT_NAME", max_length=255, default="", null=False)
    TYPE_OF_DIPLOMA_INSTITUTE = models.CharField(db_column="TYPE_OF_DIPLOMA_INSTITUTE", max_length=255, default="",
                                                 null=False)
    STUDENT_ENROLMENT_MALE = models.IntegerField(db_column="STUDENT_ENROLMENT_MALE", default="",
                                                 null=False)
    STUDENT_ENROLMENT_FEMALE = models.IntegerField(db_column="STUDENT_ENROLMENT_FEMALE", default="",
                                                   null=False)
    STUDENT_ENROLMENT_TOTAL = models.IntegerField(db_column="STUDENT_ENROLMENT_TOTAL", default="",
                                                  null=False)
    NUMBER_OF_TEACHER_MALE = models.IntegerField(db_column="NUMBER_OF_TEACHER_MALE", default="",
                                                 null=False)
    NUMBER_OF_TEACHER_FEMALE = models.IntegerField(db_column="NUMBER_OF_TEACHER_FEMALE", default="",
                                                   null=False)
    NUMBER_OF_TEACHER_TOTAL = models.IntegerField(db_column="NUMBER_OF_TEACHER_TOTAL", default="",
                                                  null=False)
    LAB_FACILITIES = models.CharField(db_column="LAB_FACILITIES", max_length=11, default="", null=False)
    HOSTEL_FACILITIES = models.CharField(db_column="HOSTEL_FACILITIES", max_length=11, default="", null=False)

    def __str__(self):
        return '{} {} {} {} {} {} {} {} {} {} {} {} {} {}'.format(self.SL_NO, self.STATE_NAME, self.UNIVERSITY_NAME,
                                                                  self.COLLEGE_NAME, self.DISTRICT_NAME,
                                                                  self.TYPE_OF_DIPLOMA_INSTITUTE,
                                                                  self.STUDENT_ENROLMENT_MALE,
                                                                  self.STUDENT_ENROLMENT_FEMALE,
                                                                  self.STUDENT_ENROLMENT_TOTAL,
                                                                  self.NUMBER_OF_TEACHER_MALE,
                                                                  self.NUMBER_OF_TEACHER_FEMALE,
                                                                  self.NUMBER_OF_TEACHER_FEMALE, self.LAB_FACILITIES,
                                                                  self.HOSTEL_FACILITIES)

    def __as_dict__(self):
        return {
            'SL_NO': self.SL_NO,
            'STATE_NAME': self.STATE_NAME,
            'UNIVERSITY_NAME': self.UNIVERSITY_NAME,
            'COLLEGE_NAME': self.COLLEGE_NAME,
            'DISTRICT_NAME': self.DISTRICT_NAME,
            'TYPE_OF_DIPLOMA_INSTITUTE': self.TYPE_OF_DIPLOMA_INSTITUTE,
            'STUDENT_ENROLMENT_MALE': self.STUDENT_ENROLMENT_MALE,
            'STUDENT_ENROLMENT_FEMALE': self.STUDENT_ENROLMENT_FEMALE,
            'STUDENT_ENROLMENT_TOTAL': self.STUDENT_ENROLMENT_TOTAL,
            'NUMBER_OF_TEACHER_MALE': self.NUMBER_OF_TEACHER_MALE,
            'NUMBER_OF_TEACHER_FEMALE': self.NUMBER_OF_TEACHER_FEMALE,
            'NUMBER_OF_TEACHER_TOTAL': self.NUMBER_OF_TEACHER_TOTAL,
            'LAB_FACILITIES': self.LAB_FACILITIES,
            'HOSTEL_FACILITIES': self.HOSTEL_FACILITIES,
        }

    class Meta:
        db_table = 'colleges_list_diploma'

# class PredictedData(models.Model):
#     AISHE_ID = models.CharField(db_column='AISHE_ID', max_length=255)
#     College_Name = models.CharField(db_column='College_Name', max_length=255)
#     Teachers = models.CharField(db_column='Teachers', max_length=255)
#     Students = models.CharField(db_column='Students', max_length=255)
#     Hostels = models.CharField(db_column='Hostels', max_length=255)
#     Labs = models.CharField(db_column='Labs', max_length=255)
#     PhD = models.CharField(db_column='PhD', max_length=255)
#     S_F_Ratio = models.CharField(db_column='S_F_Ratio', max_length=255)
#     Score = models.CharField(db_column='Score', max_length=255)
#
#     class Meta:
#         db_table = 'Predicted_Colleges_List'
#
