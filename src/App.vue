<template lang="pug">
  #app
    page-header
    .fake-editor
      fake-editor-header
      fake-editor-content
      fake-editor-footer
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import FakeEditorHeader from './components/FakeEditorHeader.vue'
import FakeEditorContent from './components/FakeEditorContent.vue'
import FakeEditorFooter from './components/FakeEditorFooter.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    FakeEditorHeader,
    FakeEditorContent,
    FakeEditorFooter
  }
}
</script>
