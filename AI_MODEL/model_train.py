from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Train an ML model
pipeline = Pipeline([
    ("vectorizer", TfidfVectorizer()),  # Convert text to numerical values
    ("classifier", MultinomialNB())  # Naive Bayes classifier
])
