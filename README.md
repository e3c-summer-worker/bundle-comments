# Bundle Comments - Add comments to the bundle

This Github Action adds a comment to the top of a bundled file. Based off of [@actions/typescript-action](https://github.com/actions/typescript-action).

## DEPRECATION NOTICE

I used this action back when I was bundling the code in the [components](https://github.com/e3c-summer-worker/components/) repo and hosting it on Github, to be cached by the [jsDelivr CDN](https://www.jsdelivr.com/). I'm no longer using this action, so I'll archive it for now.

## Examples

Add a comment to the top of `build/mobilenav-elm.js`

```yaml
steps:
  - name: Add comment to Mobile Nav
    uses: e3c-summer-worker/bundle-comments@v1.1
    with:
      name: Desktop Nav
      # optional - default: Bundled by ECCC
      comment: "Desktop Navigation code"
      filePath: build/mobilenav-elm.js
```

Generated comment (note that `${sha}` and `${repo}` will be replaced with the commit SHA and repo name)

```js
/**
 * Add Comment to Mobile Nav - Edmonton Christian Community Church
 * Created via commit ${sha} at ${repo}
 * ${comment}
 * github.com/${repo}/commit/${sha}
 */
```
