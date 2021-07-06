<template lang="pug">
  //- Mixins
  mixin project(name, description, skills, url)
    div
      p.tab-2
        span.operator {
    div
      p.tab-3
        span.variable "name"
        |        :
        span.string  "#{name}"
        | ,
    div
      p.tab-3
        span.variable "description"
        |  :
        span.string  "#{description}"
        | ,
    div
      p.tab-3
        span.variable "skills"
        |      :
        span.string  "#{skills}"
        | ,
    div
      p.tab-3
        span.variable "url"
        |         :
        span.string
          |  "
          a(href=url, target='_blank') #{url}
          | "
    div
      p.tab-2
        span.operator }
        | ,



  //- Template
  .code-wrapper
    div
      p
        span.operator {
    div
      p.tab-1
        span.variable "total"
        |    :
        span.string  "80+"
        | ,
    div
      p.tab-1
        span.variable "projects"
        |  :
        span.operator  [
    +project('Forglad', 'Multilingual website with a catalog of company services.', 'HTML, CSS, JavaScript, PHP, Laravel', 'https://forglad.by/')
    +project('Pro-ikea', 'Online store with parsing the catalog from the ikea official website.', 'Vue.js, PHP, Laravel', 'https://pro-ikea.by/')
    +project('Raduga', 'Customers account of the Raduga, Gudzone and Terem chain of stores.', 'PHP, Laravel', 'http://lk-raduga100.by/')
    +project('Hobotok', 'Landing Page for the Salt Cave Company.', 'HTML, CSS, JavaScript, PHP, CodeIgniter', 'http://hobotok.by/')
    +project('Atlanta Beltrade', 'Company multilingual corporate website.', 'HTML, CSS, JavaScript, PHP, CodeIgniter', 'http://atlanta-beltrade.com/')
    +project('Aibolit', 'Landing page for a network of veterinary clinics.', 'HTML, CSS, JavaScript, PHP, CodeIgniter', 'http://айболит.бел/')
    +project('Aibolit Shop', 'Veterinary products online store.', 'HTML, CSS, JavaScript', 'https://aibolit-shop.by/')
    div
      p.tab-2
        span.comment ... and more others
    div
      p.tab-1
        span.operator ]
    div
      p
        span.operator }
    div
    div
</template>
