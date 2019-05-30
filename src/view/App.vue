<template>
  <div id="app">
    <v-app>
      <Header />
      <div class="mt-5">
        <router-view></router-view>
      </div>
      <AddButton />
      <Menu />
    </v-app>
  </div>
</template>

<script>
import Header from "View/Header";
import Menu from "View/Menu";
import AddButton from "View/components/AddButton";
export default {
  components: { Header, Menu, AddButton },
  data() {
    return {
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>

<style module lang="scss">
.contentWrap {
  margin-top: 46px;
}
</style>