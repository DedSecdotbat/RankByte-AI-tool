import pickle

import numpy
import pandas as pd
from sklearn.preprocessing import StandardScaler

saved_model = 'finalized_linreg_model.sav'
loaded_model = pickle.load(open(saved_model, 'rb'))

df = pd.read_csv('test_data.csv', encoding='cp1252')
dataset = df.dropna()
dataset.head()
dataset.info()
print(str('Any missing data or NaN in the dataset:'), dataset.isnull().values.any())

X = dataset.iloc[:, 3:].values
sc = StandardScaler()
sc.fit(X)
X_test = sc.transform(X)

y_pred = loaded_model.predict(X_test)
print('Predicted data=', y_pred)
print(len(y_pred))
output = numpy.append(y_pred, [710.89])

predicted_dataset = pd.read_csv('test_data.csv', encoding='cp1252')
predicted_dataset['Predicted Rank'] = output
sorted_dataset = predicted_dataset.sort_values(by=['Predicted Rank'], ascending=True)
sorted_dataset.to_csv('output2018.csv', index=False)
