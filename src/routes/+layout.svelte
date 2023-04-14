<script lang="ts">
    import "../app.css";
    import Header from '../components/navbar.svelte';
    import Footer from '../components/footer.svelte';
    import DarkMode from "svelte-dark-mode";
    import { afterUpdate } from "svelte";
  
    let theme : any;
    let switchTheme : string
    let dark : boolean
  
    if (typeof window !== 'undefined') {
      theme = localStorage.getItem("custom-theme-key") 
    }
  
    afterUpdate(() => {
      document.body.className = theme;
      switchTheme = theme === "dark" ? "light" : "dark";
    });
  
    let handleThemeChange = () => {
      theme = switchTheme
      document.documentElement.setAttribute('data-theme', theme)
    }
  
  </script>
  
  <DarkMode bind:theme  key="custom-theme-key" />
  
  <main class:dark class="dark:bg-gray-900 transition-colors">
    <Header on:click={handleThemeChange} currentTheme={theme} />
    <slot />
    <Footer />
  </main>