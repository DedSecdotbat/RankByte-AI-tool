from django.shortcuts import render


# Create your views here.
def index(request):
    try:
        return render(request, 'admin/home.html')
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})
