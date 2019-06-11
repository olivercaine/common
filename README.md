# Common

A repo full of commonly used modules.

To add a new module to the common repo:

```sh
git subtree add --prefix=[module-name] https://github.com/olivercaine/typescript-library-boilerplate.git modpack/latest --squash
```

To install a module to a project:

```
npm i @common/month-enum-ts@file:./common/month-enum-ts
```