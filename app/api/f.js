fetch("https://www.udemy.com/api/2022-03/graphql/", {
  headers: {
    accept: "*/*",
    "accept-language": "en-US",
    "cache-control": "no-cache",
    "content-type": "application/json",
    pragma: "no-cache",
    "sec-ch-ua":
      '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    cookie:
      '__udmy_2_v57r=13279a9e35cb4f35bf4e837fcf18e791; __udmy_1_a12z_c24t=VGhlIGFuc3dlciB0byBsaWZlLCB0aGUgdW5pdmVyc2UsIGFuZCBldmVyeXRoaW5nIGlzIDQy; csrftoken=5SVC4BzAfgJMxrnYfSc57eSXOJTtUPDgdUtn5ePNPQywqejNrdsED1s402S3ez9K; ud_cache_brand=GHen_US; ud_cache_marketplace_country=GH; ud_cache_price_country=GH; ud_cache_user=""; ud_cache_version=1; ud_cache_language=en; ud_cache_device=None; ud_cache_logged_in=0; ud_firstvisit=2023-09-24T20:59:22.858019+00:00:1qkWCI:wP4svGYFO0mxjkfQ0gc-eAk3UGQ; __ssid=5576b08b1e594d9076961e43bd53b4c; _gcl_au=1.1.1719111360.1695589161; blisspoint_fpc=b4bb731e-cd01-42d8-87cd-1ce38fbd00c4; _rdt_uuid=1695589161202.5b6ebadc-67cd-4877-82d3-203468edebd7; _fbp=fb.1.1695589161713.632030214; ki_r=; ki_s=227428%3A0.0.0.0.0; _yjsu_yjad=1695589162.19e4b322-64cd-48da-ad00-d14133af0b4f; _gid=GA1.2.822430709.1695589177; ud_locale=en_US; FPAU=1.1.1719111360.1695589161; __udmy_4_a12z=f02ac5a1c0e20014249d1050e4e6652d4fcc5f85765f880da9916e13a092a5aa; ud_cache_campaign_code=LETSLEARNNOW; __cfruid=dc97bbfbc49edb99cf063fb80cf34129745233db-1695627114; cf_clearance=k6lhutapOe9iZSv.aStS7zzyKvCjbJpgGbW32nG1S6o-1695627115-0-1-2232a59b.f953767c.7533fa7b-0.2.1695627115; dj_session_id=5tj5yxzss229vmq2uzanv3v4vkepv7bz; ab.storage.sessionId.5cefca91-d218-4b04-8bdd-c8876ec1908d=%7B%22g%22%3A%22530f7afc-2ab7-2633-d671-955fd0ddc058%22%2C%22e%22%3A1695629140077%2C%22c%22%3A1695627340078%2C%22l%22%3A1695627340078%7D; ab.storage.deviceId.5cefca91-d218-4b04-8bdd-c8876ec1908d=%7B%22g%22%3A%225e8ae834-c47f-8700-aead-6a68f88e8b24%22%2C%22c%22%3A1695589188412%2C%22l%22%3A1695627340079%7D; query_session_identifier_id=QLTWg3DsQH6Z8SXhnW9ZjQ; last_searched_phrase=6aab1a1272b79cfae551b94937af2582; ud_cache_release=922c78d87605ae252432; __cf_bm=uR4PtZHOp9ShZsnZjnJSnmWqx3c30OE9N1XU9Z1CYo0-1695633358-0-AT/F1fPdavlFyDeZxIhxRhsXntgZq6CnuMae5dHxw3ApsqP5nO+F+GolICpgb/6HitTeinPnzruEaygTBeJ297s=; _ga_7YMFEFLR6Q=GS1.1.1695632196.3.1.1695633355.0.0.0; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Sep+25+2023+09%3A15%3A56+GMT%2B0000+(Greenwich+Mean+Time)&version=202305.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=d08c45db-6a41-42a3-8611-d94dca0a8cd7&interactionCount=1&landingPath=NotLandingPage&groups=C0003%3A1%2CC0005%3A1%2CC0004%3A1%2CC0001%3A1%2CC0002%3A1&AwaitingReconsent=false; exaff=%7B%22start_date%22%3A%222023-09-24T20%3A59%3A17.818942Z%22%2C%22code%22%3A%22OzpaRYwFVr0-IfWEO7B_2pj1nzRTJ8WYrA%22%2C%22merchant_id%22%3A47901%2C%22aff_type%22%3A%22LS%22%2C%22aff_id%22%3A66308%7D:1qkhhA:YS8QMHp9NVW55xpto-UEOFCuQUI; evi="3@ZEXGOVnBqZkxMA3L1P5tq7dSNNzePZLIcCtQDgZSmFVw7maUGiE0otLY0tQ5LIH15-kjq1k5aXNwLNj3eZcByM8-HzgoGr6BWak="; ud_rule_vars=eJxtzcsOgyAQheFXMWx7yXBT4VlMCNKhJTUhBbQL47uXXlfdTs4_30qKTWcseDJLyKHEpClnnbIKuXSj8FyOXmDPO-887bFTVLsYrwGJbsg6EB9SLu_WnGzBod4HwoDxA6gDEw0DLZWm3bGnqm1hB6ABBrKvq8nWtMTZXUxJ1vvgTI5zcmgWm4Idp8-3c4r3cjHPxRRexq9OeJsx_6VlA9Vtq3aUrRJCfumNbA_cn0vt:1qkhhA:kBpfDy9drfKI850I0ONaqUaC6v8; ki_t=1695589161839%3B1695633360954%3B1695633360954%3B2%3B8; _ga=GA1.2.35993896.1695589161; eventing_session_id=CJJdOhPISc2IWK0f9qKIGA-1695635909190; _dd_s=rum=0&expire=1695635054316',
    Referer: "https://www.udemy.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: '{"query":"\\n    query AutocompleteSuggestions($searchedPhrase: String!) {\\n  searchAutocomplete(request: {searchedPhrase: $searchedPhrase}) {\\n    item {\\n      ... on SearchAutocompleteLogItem {\\n        phrase: title\\n        __typename\\n      }\\n      ... on CourseInstructor {\\n        id\\n        name\\n        url\\n        images {\\n          px50x50\\n        }\\n        __typename\\n      }\\n      ... on Course {\\n        id\\n        title\\n        url\\n        instructors {\\n          name\\n        }\\n        images {\\n          px50x50\\n        }\\n        __typename\\n      }\\n    }\\n    resultTrackingId\\n    trackingId\\n  }\\n}\\n    ","variables":{"searchedPhrase":"he"}}',
  method: "POST",
})
  .then((response) => response)
  .then((data) => console.log(data));
