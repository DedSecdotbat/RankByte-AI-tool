import pandas as pd
from django.shortcuts import render

from .models import CollegeListDiploma


def view_college_list(request):
    try:

        college_vo_list = CollegeListDiploma.objects.all()

        return render(request, 'admin/viewCollegesList.html', {'college_vo_list': college_vo_list})

    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})


def about(request):
    try:
        return render(request, 'admin/about.html', )
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})


def home(request):
    try:
        return render(request, 'admin/home.html', )
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})


def ranking_table(request):
    try:
        dataset = pd.read_csv('base/output.csv')
        d = dataset.set_index('AISHE_ID').T.to_dict('list')
        res = dict(reversed(list(d.items())))

        # print(res)
        # for key,value in res:
        #     if value[3] == 10:
        #         value[3] = 'Yes'
        #     else:
        #         value[3] = "No"
        return render(request, 'admin/rankingtable.html', {'table': res})
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})


def team(request):
    try:
        return render(request, 'admin/./team.html', )
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})
