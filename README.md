# gcf_line_notify
Cloud Functions http trigger LINE Notify integration

# config

- config/production.json

```config/production.json
{
  "Line": {
    "access_token": "AccessToken"
  }
}

```

# deploy

```
gcloud alpha functions deploy sendLineNotify --stage-bucket GS_BUCKET --trigger-http
```

# License
[The MIT License](./LICENSE).

# Author

tknzk <tkm.knzk@gmail.com>
