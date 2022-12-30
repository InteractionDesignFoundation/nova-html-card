<template>
  <div
    v-html="content"
    class="htmlCard__content"
    :class="{htmlCard__basicStyles: withBasicStyles}"
  ></div>
</template>

<script>
export default {
  props: ['content', 'withBasicStyles'],
};
</script>

<style lang="scss">
.htmlCard__content {
  p:not(:last-child) {
    margin-bottom: 1em;
  }
}

.htmlCard__basicStyles {
  a {
    color: #009cde;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin: 15px 0;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  li {
    list-style: disc;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 1.7;
    margin-bottom: 15px;
  }

  h1 + p,
  h2 + p,
  h3 + p {
    margin-top: 10px;
  }

  img {
    max-width: 100%;
  }

  code,
  pre {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-family: Consolas, 'Liberation Mono', Courier, monospace;
    font-size: 12px;
    margin: 0 2px;
    padding: 6px;
    white-space: pre;
  }

  pre code {
    border: none;
    margin: 0;
    padding: 0;
    white-space: pre;
  }
}
</style>
