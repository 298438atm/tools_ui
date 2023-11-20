<template>
  <div class="home">
    <MuchSelect v-model="val1" :options="options" multiple />
    <el-select v-model="val2" multiple>
      <el-option
        v-for="item in options"
        :key="item.value"
        v-bind="item"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import MuchSelect from "@/components/MuchSelect/index.vue"

export default {
  name: "HomeView",
  components: {
    MuchSelect,
  },
  data() {
    return {
      val1: [1, 77],
      val2: undefined,
      options: [],
    }
  },
  created() {
    for (let index = 0; index < 1000; index++) {
      this.options.push({
        label: `我说第${index + 1}条数据`,
        value: index + 1,
      })
    }
  },
}
</script>
