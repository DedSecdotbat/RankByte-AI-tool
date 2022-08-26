from django.urls import path

from . import college_view
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view_college_list/', college_view.view_college_list, name='view_college_list'),
    path('about/', college_view.about, name='about'),
    path('team/', college_view.team, name='team'),
    path('home/', college_view.home, name='home'),
    path('ranking_table/', college_view.ranking_table, name='ranking_table'),
]
