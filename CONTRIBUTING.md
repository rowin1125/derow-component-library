## Contribute

You're now ready to contribute to Derow, awesooeeeem! Pick up a ticket and make Derow even greater!

Once you have implemented a feature/fix/chore/ts or by accident a bug 🕷😱, you have to commit your code. Derow uses [standard-version](https://github.com/conventional-changelog/standard-version) for managing Releases/versioning/tags/changelog. To make sure you commits are correctly setup we follow a couple of rules based on [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) from [commitlint](https://github.com/conventional-changelog/commitlint). The setup is:

```bash
type(scope?): subject #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

An example is:

```bash
fix(contact): typo in call me section
```

## Releases

As mention above, we're using `Standard-version` to generate changelogs and to handle the versioning. Before releasing, please read the [docs](https://github.com/conventional-changelog/standard-version) first. To see what will be release you can use this command:

```bash
npx standard-version --dry-run
```

You **ALWAYS** release from **develop** to **master** by PL. You can do this by following the next steps:

1. Create a PL from develop to master (just name it release)
2. Go to your terminal and make sure both branches are up to date
3. <p>Go to master and type the following: </p>
   <span style="color: red; font-weight: bold;">DO NOT PUSH!!</span>

```bash
git merge develop
```

4. Generate the release by using:

```bash
yarn release
```

5. You now see that the `verion` is bumped based on your commit messages, a `tag` is released and a `changelog` is generated
6. In ther terminal you see standard-version returning a command with `run 'push --follow-tags bla bla bla`, copy this and run it in the terminal
7. Congratz, you just released YCO, we're proud of you 🥳😇
