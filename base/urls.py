from django.urls import path

from . import college_view
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view_college_list/', college_view.view_college_list, name='view_college_list'),
    path('predicted_colleges/', college_view.predicted_csv, name='predicted_colleges'),
    path('about/', college_view.about, name='about'),
    path('team/', college_view.team, name='team'),
    path('home/', college_view.home, name='home'),

]
