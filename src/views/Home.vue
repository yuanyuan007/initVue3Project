<template>
  <div>

  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'home',
  computed: {
    ...mapGetters('login', ['getToken'])
  },
  created() {
  },
  methods: {
  }
}
</script>
