# Common

*A repo full of commonly used modules.*

To add a new module named "utils":

1. Seed the module

```sh
git subtree add --prefix=utils https://github.com/olivercaine/typescript-library-boilerplate.git modpack/latest --squash
```

2. Update the package name in package.json and package-lock.json:

```json
"name": "@common/utils",
```

3. Install the module in a project:

```sh
npm i @common/utils@file:common/utils --save
yarn add @common/emailer@file:common/emailer --save
```

4. Pull updates to the module using:

```sh
git submodule update --recursive --remote
```

5. Configure git to automatically pull the submodules:

// TODO
