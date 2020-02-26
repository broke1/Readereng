
from flask import Flask, request
from translate import Translator



app = Flask(__name__)
app.debug = True

@app.route('/rest',methods=['POST'])
def getFromRest():
    word = request.form['name']
    if word == '':
        return 'Empty word'
    else:
        translator= Translator(to_lang="ru")
        word = translator.translate(word)
        return word




if __name__ == "__main__":
    app.run(port='5000')
