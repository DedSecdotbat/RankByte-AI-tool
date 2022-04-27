from django.shortcuts import render

from .models import CollegeListDiploma


def view_college_list(request):
    try:

        college_vo_list = CollegeListDiploma.objects.all()

        return render(request, 'admin/viewCollegesList.html', {'college_vo_list': college_vo_list})
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})
