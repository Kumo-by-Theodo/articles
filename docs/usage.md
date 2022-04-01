# Usage

## How to sync a draft article with dev.to

0. Complete the template install
1. Manually create an article on [Dev.to](https://dev.to/) (Create Post buttons in the top right corner)
2. Enter a dum title (It will be overridden later)
3. Save the article as draft (Save draft button in the let bottom corner)
4. Open your console and paste `$('div[data-article-id]').getAttribute('data-article-id')`
5. Copy/paste the result in a new object in `./dev-to-git.json`
6. Write your article in the folder you indicate as `relativePathToArticle`
7. Merge on `master` => The article will be sync automatically

## How to publish an article to dev.to

1. Change the header of an unpublished article from `published: false` to `published: true`
2. Merge on `master` => The article will be published automatically

**/!\ Don't publish your article manually. If you don't change `published` to `true` the next sync will unpublish your article.**

## How to write an article

[Dev.to editor guide](https://dev.to/p/editor_guide)

## How do I choose which files I want to sync?

There's a `dev-to-git.json` file where you can define an array of blog posts, e.g.

```json
[
  {
    "id": 12345,
    "relativePathToArticle": "./blog-posts/name-of-your-blog-post/name-of-your-blog-post.md"
  }
]
```

## How can I find the ID of my blog post on dev.to?

This repository is made to **edit** a blog post. Whether it's published or just a draft, you **have to create it** on dev.to directly. Unfortunately, dev.to does not display the ID of the blog post on the page. So once it's created, you can open your browser console and paste the following code to retrieve the blog post ID:  
`$('div[data-article-id]').getAttribute('data-article-id')`

## How do I configure every blog post individually?

A blog post has to have a [**front matter**](https://dev.to/p/editor_guide) header. You can find an example in this repository here: https://github.com/maxime1992/dev.to/blob/master/blog-posts/name-of-your-blog-post/name-of-your-blog-post.md

Simple and from there you have control over the following properties: `title`, `published`, `cover_image`, `description`, `tags`, `series` and `canonical_url`.

## How do I add images to my blog posts?

Instead of uploading them manually on dev.to, simply put them within your git repo and within the blog post use a relative link. Here's an example: `The following is an image: ![alt text](./assets/image.png 'Title image')`.

If you've got some plugin to preview your markdown from your IDE, the images will be correctly displayed. Then, on CI, right before they're published, the link will be updated to match the raw file.

## How do I embed code

You can write the code you want to embed in your article in a dedicated file with the right extension. Your IDE will provide you syntax coloration and language specific help. Prettier will format the code according to its extension.

1. Add a code block to your article with the path of a file

   ````text
   ```ts
   // code/demo-code.ts
   ```
   ````

2. Write your code in the file
3. Run `yarn embedme`
4. Check and commit the modified markdown article

_Note: The code file is always the source of truth. If you modify the code directly in the markdown article, it will be overridden by the next `yarn embedme`_
