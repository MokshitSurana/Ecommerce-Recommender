from fastapi import FastAPI, HTTPException, Response
import pandas as pd
from sklearn.metrics.pairwise import pairwise_distances
from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost",
"http://localhost:3000"]

embed = pd.read_parquet('embeddings.parquet')
cosine_sim = 1 - pairwise_distances(embed, metric='cosine')
final_df = pd.read_csv('final_df.csv')
indices = pd.Series(range(len(final_df)), index=final_df.index)


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def get_recommender(idx, top_n=5):
    sim_idx    = indices[idx]
    sim_scores = list(enumerate(cosine_sim[sim_idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:top_n+1]
    idx_rec    = [i[0] for i in sim_scores]
    
    return indices.iloc[idx_rec].index



@app.get("/recommend")
def getRecommendations(productId):
    if int(productId) not in final_df['id'].values:
        raise HTTPException(status_code=404, detail="Item not found")
    index = final_df[final_df['id'] == int(productId)].index[0]
    indexes = get_recommender(index, 10)
    d = {"filename":[],"link":[],"id":[],"gender":[],"masterCategory":[],"subCategory":[],"articleType":[],
    "baseColour":[],"season":[],"usage":[],"productDisplayName":[],"sellers":[]}
    for index in indexes:
        x = final_df.iloc[index]
        i = 1
        for val in x:
            if i == 1:
                d['filename'].append(val)
            elif i == 2:
                d['link'].append(val)
            elif i == 3:
                d['id'].append(val)
            elif i == 4:
                d['gender'].append(val)
            elif i == 5:
                d['masterCategory'].append(val)
            elif i == 6:
                d['subCategory'].append(val)
            elif i == 7:
                d['articleType'].append(val)
            elif i == 8:
                d['baseColour'].append(val)
            elif i == 9:
                d['season'].append(val)
            elif i == 10:
                d['usage'].append(val)
            elif i == 11:
                d['productDisplayName'].append(val)
            elif i == 12:
                d['sellers'].append(val)
            i += 1
    return Response(pd.DataFrame(d).to_json(orient="records"),media_type="application/json")

x = getRecommendations(1547)
print(x)
# x = final_df[final_df['id'] == 1547].index
# print(final_df.iloc[x])