from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

DATA_FILE = "messages.json"

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()

    if not data or not data.get("name") or not data.get("email") or not data.get("message"):
        return jsonify({"error": "Missing fields"}), 400

    # Save to file (append messages)
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r") as f:
            messages = json.load(f)
    else:
        messages = []

    messages.append(data)

    with open(DATA_FILE, "w") as f:
        json.dump(messages, f, indent=4)

    print("New contact message:", data)  # will show in logs
    return jsonify({"success": True, "message": "Message received!"}), 200

if __name__ == "__main__":
    app.run(debug=True)