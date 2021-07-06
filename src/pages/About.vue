<template lang="pug">
  //- Mixins
  mixin setAttributeString(name, value)
    div
      p.tab-2
        span.string #{name}
        span.operator  => 
        span.string '#{value}'
        | ,

  mixin setAttributeArray(name, array)
    div
      p.tab-2
        span.string #{name}
        span.operator  => [ 
        each val, index in array
          span.string '#{val}'
            if(index < 4)
              span.operator , 
        span.operator  ]
        | ,



  //- Template
  .code-wrapper
    div
      p <?php
    div
    div
      p
        | namespace
        span.namespace  About
        | ;
    div
    div
      p
        | use
        span.class  Developer
        | ;
    div
      p
        | use
        span.class  Task
        | ;
    div
    div
      p
        span.comment ...
    div
    div
        p.tab-1
          span.variable $me
          span.operator  =
          |  new
          span.class  Developer
          span.operator ([
    +setAttributeString('\'fullName\'  ', 'Alexey Golovnev')
    +setAttributeString('\'address\'   ', 'Minsk, Belarus')
    +setAttributeString('\'experience\'', (new Date().getFullYear() - 2014) + ' years' )
    +setAttributeString('\'education\' ', 'Baranovichi State University, Software engineer')
    +setAttributeArray('\'skills\'    ', ['PHP', 'JavaScript', 'HTML', 'CSS', 'Design'])
    div
        p.tab-1
          span.operator ])
          | ;
    div
    div
      p.tab-1
        span.variable $yourTask
        span.operator  =
        |  new
        span.class  Task
        span.operator ()
        | ;
    div
      p.tab-1
        span.variable $neededSkills
        span.operator  =
        span.variable  $yourTask
        span.operator ->
        span.function getNeededSkills
        span.operator ()
        | ;
    div
    div
      p.tab-1
        | if
        span.operator  (!
        span.variable $me
        span.operator ->
        span.function hasSkills
        span.operator (
        span.variable $neededSkills
        span.operator )) {
    div
      p.tab-2
        span.variable $me
        span.operator ->
        span.function setSkills
        span.operator (
        span.variable $neededSkills
        span.operator )
        | ;
    div
      p.tab-1
        span.operator }
    div
    div
      p.tab-1
        span.variable $me
        span.operator ->
        span.function resolve
        span.operator (
        span.variable $yourTask
        span.operator )
        | ;
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
</template>
