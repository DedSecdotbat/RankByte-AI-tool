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


def ranking_2018(request):
    try:
        dataset = pd.read_csv('base/output2018.csv')
        d = dataset.set_index('AISHE_ID').T.to_dict('list')
        srt = dict(reversed(list(d.items())))
        res = {}
        i = 0
        for key, value in srt.items():
            if i == 100:
                break
            res[key] = value
            i = i + 1
        return render(request, 'admin/rankingtable.html', {'table': res})
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})


def ranking_2019(request):
    try:
        dataset = pd.read_csv('base/output2019.csv')
        d = dataset.set_index('AISHE_ID').T.to_dict('list')
        srt = dict(reversed(list(d.items())))
        res = {}
        i = 0
        for key, value in srt.items():
            if i == 100:
                break
            res[key] = value
            i = i + 1
        return render(request, 'admin/rankingtable.html', {'table': res})
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})


def team(request):
    try:
        return render(request, 'admin/team.html', )
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})
