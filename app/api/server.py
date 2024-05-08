import json
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    url = "https://www.udemy.com/api-2.0/structured-data/navigation-lists/?list_ids=ud-main&locale=en_US"
    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "x-udemy-cache-brand": "GHen_US",
        "x-udemy-cache-campaign-code": "LETSLEARNNOW",
        "x-udemy-cache-device": "None",
        "x-udemy-cache-language": "en",
        "x-udemy-cache-logged-in": "0",
        "x-udemy-cache-marketplace-country": "GH",
        "x-udemy-cache-price-country": "GH",
        "x-udemy-cache-release": "e0189a19b92ae40dc2fb",
        "x-udemy-cache-user": "",
        "x-udemy-cache-version": "1",
    }

    response = requests.get(
        url,
        headers=headers,
    )

    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    return "failed"


@app.route("/sub")
def sub():
    url = "https://www.udemy.com/api-2.0/course-subcategories/548/labels/?page_size=9&locale=en_US&navigation_locale=en_US"

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    return "failed"


@app.route("/search", methods=["POST"])
def search():
    url = "https://www.udemy.com/api/2022-03/graphql/"
    query = request.get_json().get("query")

    headers = {
        "accept": "*/*",
        "accept-language": "en-US",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
    }

    request_body = {
        "query": """
            query AutocompleteSuggestions($searchedPhrase: String!) {
                searchAutocomplete(request: {searchedPhrase: $searchedPhrase}) {
                    item {
                        ... on SearchAutocompleteLogItem {
                            phrase: title
                            __typename
                        }
                        ... on CourseInstructor {
                            id
                            name
                            url
                            images {
                                px50x50
                            }
                            __typename
                        }
                        ... on Course {
                            id
                            title
                            url
                            instructors {
                                name
                            }
                            images {
                                px50x50
                            }
                            __typename
                        }
                    }
                    resultTrackingId
                    trackingId
                }
            }
        """,
        "variables": {"searchedPhrase": query},
    }

    json_body = json.dumps(request_body)
    response = requests.post(
        url,
        headers=headers,
        data=json_body,
    )

    if response.status_code == 200:
        json_data = response.json()
        return jsonify(json_data)
    return "failed"


if __name__ == "__main__":
    app.run(debug=1)
