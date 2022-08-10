import pickle

import pandas as pd
from django.shortcuts import render
from sklearn.preprocessing import StandardScaler

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


def predicted_csv(request):
    try:
        saved_model = 'finalized_linreg_model.sav'
        loaded_model = pickle.load(open(saved_model, 'rb'))

        dataset = pd.read_csv('test_dataset.csv', encoding='unicode_escape')
        dataset.info()
        X = dataset.iloc[:, 6:].values
        sc = StandardScaler()
        sc.fit(X)
        X_test = sc.transform(X)

        y_pred = loaded_model.predict(X_test)
        # print('Predicted data=', y_pred)
        # print(len(y_pred))

        predicted_dataset = pd.read_csv('test_dataset.csv', encoding='unicode_escape')
        predicted_dataset['Predicted Rank'] = y_pred
        sorted_dataset = predicted_dataset.sort_values(by=['Predicted Rank'], ascending=True)
        sorted_dataset.to_csv('predicted_rank_data.csv', index=True)

        return render(request, 'admin/about.html', )
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})


def team(request):
    try:
        return render(request, 'admin/./team.html', )
    except Exception as exc:
        return render(request, 'admin/error.html', {'error': exc})
