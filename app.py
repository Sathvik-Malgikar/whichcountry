from flask import Flask , send_from_directory, request
from flask_cors import CORS,cross_origin
app = Flask(__name__ , static_folder="./build/")
import json
from Levenshtein import distance as lev

cors = CORS(app)

@cross_origin()
@app.route("/newentry/" , methods = ["POST","GET"])
def newentry(   ):
  
    if request.method!="POST":
        return "only post requests allowed!"

    newpair = json.loads( request.data)
    with open("./static/data.json") as f:
       data = json.load(f)
    
    for item in data :
        if item["country"]==newpair["country"]:
            
            if type(item["capital"]) == str:
                current = item["capital"]
                item["capital"] = [ current , newpair["capital"]  ]
                return "created and added to list"
            
            item["capital"].append(newpair["capital"])
            return "added to list"
        
    data.append(newpair)
    with open("./static/data.json","w") as f:
        json.dump(data,f)
        
    return "added new entry"
    
@cross_origin()
@app.route("/static/data/")
def home():
    
    with open("./static/data.json") as f:
       data = json.load(f)
    
    return data

@cross_origin()
@app.route("/check/")
def check():
    dcountry = request.args["country"]
    dcapital = request.args["capital"]
    
    with open("./static/data.json") as f:
        data = json.load(f)
        data : list
        for item in data:
            # print(item , type(item["country"]))
            if item["country"] == dcountry:
                if(type(item["capital"]) == str):
                    truecapital = item["capital"]
                    edit_dist = lev(dcapital ,truecapital )
                else:
                    edit_dist = 999999999
                    for cap in item["capital"]:
                        truecapital = cap
                        if(lev(dcapital ,truecapital )<edit_dist):
                            edit_dist = lev(dcapital ,truecapital )
                
    
    # edit_dist = lev(dcapital ,truecapital )
    print ( "distance" , edit_dist)
    
    # # logic
    # print(f"recieved {request.method} request at check ")
    return {"correct" : edit_dist<3}




if __name__ == "__main__":
    app.run(debug=False , host="0.0.0.0")