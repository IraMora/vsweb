<template>
  <nav class="navbar fixed-top navbar-expand-lg">
    <span class="nav-link navbar-brand">Vampire Secta</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/historia">Historia</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/manga">Manga</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/anime">Anime</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/musica">Música</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss">
  nav{
    background: #211104;
    color: #C4BC95;
    span{
      padding: .5rem;
      font-weight: bold;
      color: #C4BC95;
    }
    a {
      padding: .5rem;
      font-weight: bold;
      color: #C4BC95;
      &.router-link-exact-active {
        background: #C4BC95;
        color: #211104;
      }
    }
    a:hover{
      background: #C4BC95;
      color: #211104;
      text-decoration: none;
    }
  }
  .navbar{margin:0;padding: 0rem;}
  .navbar-brand{margin:0;}
</style>
