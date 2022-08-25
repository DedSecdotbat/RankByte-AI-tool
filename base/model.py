import pickle

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from sklearn import linear_model
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# load dataset
# dataset = pd.read_csv('datafile_final_linear.csv')
dataset = pd.read_csv('dataset_final_predicted.csv')
dataset.drop(dataset.index[dataset['Predicted Rank'] == 0], inplace=True)
dataset.head()
dataset.info()
# dataset.shape
# dataset.describe().T
print(str('Any missing data or NaN in the dataset:'), dataset.isnull().values.any())

corr_var = dataset.corr()
print(corr_var)
plt.figure(figsize=(10, 7.5))
sns.heatmap(corr_var, annot=True, cmap='BuPu')
plt.show()

# defining feature matrix(X) and response vector(y)
X = dataset.iloc[:, 12:-1].values
y = dataset.iloc[:, -1].values

print('X = ', X)
print('y = ', y)

# splitting X and y into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)
print('Total no. of samples: Training and Testing dataset separately!')
print('X_train:', np.shape(X_train))
print('y_train:', np.shape(y_train))
print('X_test:', np.shape(X_test))
print('y_test:', np.shape(y_test))

sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# create linear regression object
reg = linear_model.LinearRegression()

# train the model using the training sets
reg.fit(X_train, y_train)

# saving the model using pickle
filename = 'finalized_linreg_model.sav'
pickle.dump(reg, open(filename, 'wb'))

# predictions
y_pred = reg.predict(X_test)
prediction = np.concatenate((y_pred.reshape(len(y_pred), 1), y_test.reshape(len(y_test), 1)), 1)
print('Predicted data=', prediction)
# print("Prediction = ",y_pred)

# regression coefficients
print('Coefficients: ', reg.coef_)

# variance score: 1 means perfect prediction
print('Variance score(accuracy): {}'.format(reg.score(X_test, y_test)))

# plot for residual error

# setting plot style
plt.style.use('fivethirtyeight')

# plotting residual errors in training data
plt.scatter(reg.predict(X_train), reg.predict(X_train) - y_train,
            color="green", s=10, label='Train data')

# plotting residual errors in test data
plt.scatter(reg.predict(X_test), reg.predict(X_test) - y_test,
            color="blue", s=10, label='Test data')

# plotting line for zero residual error
plt.hlines(y=0, xmin=0, xmax=50, linewidth=2)

# plotting legend
plt.legend(loc='upper right')

# plot title
plt.title("Residual errors")

# method call for showing the plot
plt.show()

# predicted_dataset = pd.read_csv('datafile_final.csv')
# predicted_dataset['Next_year_rank'] = prediction
# print(predicted_dataset)
