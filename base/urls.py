from django.urls import path

from . import college_view
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view_college_list/', college_view.view_college_list, name='view_college_list'),

]
