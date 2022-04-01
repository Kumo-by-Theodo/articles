# First installation

1. Create your personal _Articles_ repository from the [template](https://github.com/Kumo-by-Theodo/articles) (Click on the green button `Use this template`)
2. In `package.json`, update the `$.repository.url` field to `https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git`
3. Create your API token and provide it to github actions
   1. Head to [dev.to settings](https://dev.to/settings/account)
   2. In the `DEV Community API Keys` section, chose a name for your API key and generate it
   3. On your Github repository, go to `Settings > Security > Secrets > Actions`, click on `New repository secret`
   4. Name the secret `DEV_TO_GIT_TOKEN`, and set its value to your dev.to api key
4. Replace the content of `./README.md` by the content of `./docs/README.template.md`

**/!\ The article id currently in [`./dev-to-git.json`](../dev-to-git.json) is not one of yours, if you merge on master the deployment will fail. Please follow the [usage guide](./usage.md) to replace it with the one of a new draft article**
