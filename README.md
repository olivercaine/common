# Common

*A repo full of commonly used modules.*

To add a new module named "utils":

1. Seed the module

```sh
git subtree add --prefix=utils https://github.com/olivercaine/typescript-library-boilerplate.git modpack/latest --squash
```

2. Update the package name in package.json and package-lock.json:

```json
"name": "@olliecaine/utils",
```

3. Install the module in a project:

```sh
npm i @olliecaine/utils@file:common/utils --save
yarn add @olliecaine/emailer@file:common/emailer --save
```

4. Pull updates to the module using:

```sh
git submodule update --recursive --remote
```

5. Configure git to automatically pull the submodules:

```sh
git config --global submodule.recurse true
```

6. Update the module from root fork

git subtree pull --prefix=emailer https://github.com/olivercaine/typescript-library-boilerplate.git modpack/latest --squash
