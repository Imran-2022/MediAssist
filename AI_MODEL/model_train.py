from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline
from stop_words import stop_words
from sklearn.linear_model import LogisticRegression

# Train an ML model
# Define a machine learning pipeline
pipeline = Pipeline([
     # Step 1: Convert text data into TF-IDF features with bigrams (1-gram & 2-gram)
    ("vectorizer", TfidfVectorizer(ngram_range=(1, 3), 
                                   stop_words=stop_words,  # Remove stop words
                                   max_features=10000)),  # Keep only the top 5000 features

    ("classifier", LogisticRegression(max_iter=1000)) # Maximum iterations for optimization
])

# (1,1) (Unigrams only) → Good for simple models, faster training.
# (1,2) (Unigrams + Bigrams) → A balance between accuracy and performance.
# (1,3) (Unigrams + Bigrams + Trigrams) → Captures more context but increases computational cost.