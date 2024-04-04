from flask import Flask, render_template

app = Flask(__name__, template_folder='C:/Users/Renato/PycharmProjects/pythonProject/venv/Scripts/templates')

# criar a primeira pagina do site
# route -> brigadeiramadafelicidade.com/
# função -> exibir uma página inicial de produtos
# template

@app.route('/')
def index():
    # Cores personalizadas
    cor_fundo = '#96ooff'  # Roxo
    cor_texto = '#b7ffbe'  # Verde

    return render_template('index.html', cor_fundo=cor_fundo, cor_texto=cor_texto)

@app.route("/home")
def homepage():
    return render_template("homepage.html")

@app.route("/produtos")
def produtos():
    return render_template("produtos.html")

@app.route("/usuarios/<nome_usuario>")
def usuarios(nome_usuario):
    return nome_usuario

@app.route("/menu")
def menu():
    return render_template("cardapio.html")

# colocar o site no ar
if __name__ == "__main__":
     app.run(debug=True)