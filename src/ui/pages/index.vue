<template>
  <v-container
    class="fill-height fill-width"
    style="padding: 0 !important"
    fluid
  >
    <v-row class="fill-height image-background" style="margin: 0" fluid>
      <v-col cols="12" sm="12">
        <v-container class="fill-height" fluid>
          <div class="animate__animated animate__backInUp">
            <PortifolioMain />
          </div>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="fill-height indigo lighten-1" style="margin: 0" fluid>
      <v-col cols="12" sm="12">
        <v-container class="fill-height" fluid> Continua... </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.image-background {
  background-image: url('~/ui/core/assets/background3.svg');
}
</style>
