<template lang="pug">
  header.page-header
    h1
      vue-typer(text='Hello, my name is Alexey.', :repeat='0')
      br
      vue-typer(text='I am a full-stack web developer.', :repeat='0', :preTypeDelay='2700')
    p
      vue-typer(text='My code will tell you more about me...', :repeat='0', :preTypeDelay='5300')
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  components: {
    VueTyper
  }
}
</script>
