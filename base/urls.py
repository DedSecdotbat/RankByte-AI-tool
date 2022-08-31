from django.urls import path

from . import college_view
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view_college_list/', college_view.view_college_list, name='view_college_list'),
    path('about/', college_view.about, name='about'),
    path('team/', college_view.team, name='team'),
    path('home/', college_view.home, name='home'),
    path('ranking_2018/', college_view.ranking_2018, name='ranking_2018'),
    path('ranking_2019/', college_view.ranking_2019, name='ranking_2019'),
]
