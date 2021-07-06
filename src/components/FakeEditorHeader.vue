<template lang="pug">
  nav.fake-editor__header
    ul.fake-editor__nav
      li.fake-editor__nav__item
        router-link.fake-editor__nav__item__link(:to='{ name: `about` }') About
      li.fake-editor__nav__item
        router-link.fake-editor__nav__item__link(:to='{ name: `work` }') Work
      li.fake-editor__nav__item
        router-link.fake-editor__nav__item__link(:to='{ name: `contact` }') Contact
</template>
