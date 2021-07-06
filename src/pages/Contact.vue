<template lang="pug">
  //- Mixins
  mixin varWithLink(varName, link, prefix = '')
    div
      p.tab-1
        span.variable #{varName}
        span.operator  = 
        span.string
          | '
          a(href=prefix + link, target='_blank') #{link}
          | '
        | ;

  mixin varWithInput(varName, model, placeholder, type = 'text')
    div
      p.tab-1
        span.variable #{varName}
        span.operator  = 
        span.string
          | '
          input(type=type, required, v-model=model, placeholder=placeholder, v-autowidth='{maxWidth: `none`}', autocomplete='off')
          | '
        | ;



  //- Template
  .code-wrapper
    div
      p <?php
    div
    div
      p
        | namespace
        span.namespace  Contact
        | ;
    div
    div
      p
        | use
        span.class  AppMessenger
        | ;
    div
    div
      p
        span.comment ...
    div
    +varWithLink('$myEmail   ', 'golovnev.work@gmail.com', 'mailto:')
    +varWithLink('$myTelegram', 'https://t.me/aleksyglvnw')
    +varWithLink('$myBehance ', 'https://behance.net/aleksyglvnw')
    div
    div
      p.tab-1
        span.comment // Contact Form
    form(v-on:submit.prevent='sendForm')
      +varWithInput('$name   ', 'form.name', 'Type your name')
      +varWithInput('$email  ', 'form.email', 'Type your email', 'email')
      +varWithInput('$message', 'form.message', 'Type your message')
      div
      div
        p.tab-1
          span.variable $messenger
          span.operator  =
          |  new
          span.class  AppMessenger
          span.operator ()
          | ;
      div
        p.tab-1
          span.variable $messenger
          span.operator ->
          span.function toTelegram
          span.operator ()
      div
        p.tab-6
          span.operator ->
          span.function setName
          span.operator (
          span.variable $name
          span.operator )
      div
        p.tab-6
          span.operator ->
          span.function setEmail
          span.operator (
          span.variable $email
          span.operator )
      div
        p.tab-6
          span.operator ->
          span.function setMessage
          span.operator (
          span.variable $message
          span.operator )
      div
        p.tab-6
          span.operator ->
          span.function send
          span.operator ()
          | ;
      button(type='submit', title='Run')
        span.triangle
      span.title &#8592 {{ form.title }}
    div
    div
      p
        span.comment ...
    div
    div
    div
    div
    div
    div
    div
    div
    div
    div
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: 'contact me',
        name: '',
        email: '',
        message: ''
      },
      loading: ''
    }
  },
  methods: {
    sendForm: function() {
      var token = '922839052:AAFhLt78ybbv38Nny4m5INBFyc0zYepcXek';
      var telegramChatId = '-347526223';
      var botMessage = 'Name: ' + this.form.name + '\nEmail: ' + this.form.email + '\nMessage: ' + this.form.message;
      var target = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_type=private&chat_id=' + telegramChatId + '&text=' + encodeURI(botMessage);

      this.startLoadingAnimation();

      fetch(target)
        .then((response) => {
          if (response.ok) {
            this.stopLoadingAnimation();
            this.form.title = 'successfully sent';
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
            return response.json();
          }

          throw new Error('Network response was not ok');
        })
        .catch((error) => {
          this.stopLoadingAnimation();
          this.form.title = 'something went wrong';
          console.log(error);
        });
    },
    startLoadingAnimation: function() {
      this.form.title = '.';
      this.loading = setInterval(() => {
        if(this.form.title.length == 3) {
          this.form.title = '';
        }
        this.form.title += '.';
      }, 150);
    },
    stopLoadingAnimation: function() {
      clearInterval(this.loading);
    }
  }
}
</script>
