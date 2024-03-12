## Dev locally

```
npm i
env-cmd npx functions-framework --target=openai
```

## Deploy

```
gcloud functions deploy openai \
--allow-unauthenticated \
--runtime=nodejs18 \
--update-env-vars OPENAI_API_KEY=PASTE_KEY_HERE \
--timeout=540s \
--trigger-http
```
