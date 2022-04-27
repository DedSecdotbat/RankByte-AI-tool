from django.urls import path

from . import college_view

urlpatterns = [
    path('view_college_list/', college_view.view_college_list, name='view_college_list'),

]
