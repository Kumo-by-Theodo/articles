# First installation

1. In `package.json`, update the `$.repository.url` field to `https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git`
2. Create your API token and provide it to github actions
   1. Head to [dev.to settings](https://dev.to/settings/account)
   2. In the `DEV Community API Keys` section, chose a name for your API key and generate it
   3. On your Github repository, go to `Settings > Security > Secrets > Actions`, click on `New repository secret`
   4. Name the secret `DEV_TO_GIT_TOKEN`, and set its value to your dev.to api key
3. Replace the content of `./README.md` by the content of `./docs/README.template.md`
