export const code1 = `
created() {
  for (let index = 0; index < 100000; index++) {
    this.options.push({
      label: '我说第' +  index + 1 +'条数据',
      value: index + 1,
    })
  }
}
`

export const code2 =
  `
<template>
  <ClMuchSelect v-model="val" :options="options"></ClMuchSelect>
</template>

<script>
export default {
  data() {
    return {
      val: undefined,
      options: [],
    }
  },
  created() {
    for (let index = 0; index < 100000; index++) {
      this.options.push({
        label: '我说第' +  index + 1 +'条数据',
        value: index + 1,
      })
    }
  },
}
` +
  "<" +
  "/script>"

export const code3 =
  `
<template>
  <ClMuchSelect v-model="val" :options="options"></ClMuchSelect>
</template>

<script>
export default {
  data() {
    return {
      val: 100,
      options: [],
    }
  },
  created() {
    for (let index = 0; index < 100000; index++) {
      this.options.push({
        label: '我说第' +  index + 1 +'条数据',
        value: index + 1,
      })
    }
  },
}
` +
  "<" +
  "/script>"

export const code4 =
  `
<template>
  <ClMuchSelect
    key="1"
    v-model="val"
    :options="options"
    multiple
    ref="ClMuchSelect"
  >
  </ClMuchSelect>
</template>

<script>
export default {
  data() {
    return {
      val: [20, 80],
      options: []
    }
  },
  created() {
    for (let index = 0; index < 100000; index++) {
      this.options.push({
        label: '我说第' +  index + 1 +'条数据',
        value: index + 1,
      })
    }
  },
}
` +
  "<" +
  "/script>"

export const code5 =
  `
<template>
  <ClMuchSelect
    key="1"
    v-model="val"
    :options="options"
    ref="ClMuchSelect"
  >
    <template #option="{ data }">
      <span>{{ data }}</span>
    </template>
  </ClMuchSelect>
</template>

<script>
export default {
  data() {
    return {
      val: undefined,
    }
  },
  created() {
    for (let index = 0; index < 100000; index++) {
      this.options.push({
        label: '我说第' +  index + 1 +'条数据',
        value: index + 1,
      })
    }
  },
}
` +
  "<" +
  "/script>"
