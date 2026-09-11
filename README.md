# Ryan Rubenzahl's website 

Using the Jekyll*ized* version of Stellar by HTML5 UP

*Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)*

## Serving locally

Lives at <http://localhost:4000> with

```sh
bundle exec jekyll serve
```

Will auto-rebuild file changes on refresh. Alternatively, add `--livereload` to auto-refresh on edits.

> **Note:** `_config.yml` is read only at startup. After editing it, stop and restart the
> server — otherwise you'll get stale-config errors like `Cannot sort a null object`.

Build without serving:

```sh
bundle exec jekyll build      # output goes to _site/ (gitignored)
```

### First time on a new machine

Install ruby as defined by pinned versions in `.ruby-version` and `Gemfile.lock`:

```sh
brew install rbenv ruby-build
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc    
# then restart your shell
rbenv install 3.3.12
gem install bundler
bundle install
```

The `github-pages` gem pins the same Jekyll version GitHub runs, so local builds match
what gets deployed.