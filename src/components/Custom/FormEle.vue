<template>
  <el-input
    v-if="formType === 'input'"
    v-model="localValue"
    v-bind="$attrs"
    v-on="$listeners"
    :clearable="clearable"
    :placeholder="placeholder"
  >
    <template v-for="(value, name) in $slots" #[name]>
      <slot :name="name"> </slot>
    </template>
  </el-input>
  <el-input-number
    v-else-if="formType === 'inputNumber'"
    v-model="localValue"
    v-bind="$attrs"
    v-on="$listeners"
    :placeholder="placeholder"
  >
    <template v-for="(value, name) in $slots" #[name]>
      <slot :name="name"> </slot>
    </template>
  </el-input-number>
  <ClMuchSelect
    v-else-if="formType === 'muchSelect'"
    v-model="localValue"
    v-bind="$attrs"
    v-on="$listeners"
    :options="options"
    :clearable="clearable"
    :placeholder="placeholder"
  >
  </ClMuchSelect>
  <el-select
    v-else-if="formType === 'select'"
    v-model="localValue"
    v-bind="$attrs"
    v-on="$listeners"
    :clearable="clearable"
    :placeholder="placeholder"
  >
    <el-option
      v-for="item in options"
      v-bind="item"
      :key="item.value"
    ></el-option>
  </el-select>
  <el-date-picker
    v-else-if="formType === 'date'"
    v-model="localValue"
    v-bind="$attrs"
    v-on="$listeners"
  >
  </el-date-picker>
  <el-time-select
    v-else-if="formType === 'time'"
    v-model="localValue"
    v-bind="$attrs"
    v-on="$listeners"
  >
  </el-time-select>
  <el-switch
    v-else-if="formType === 'switch'"
    v-model="localValue"
    v-bind="$attrs"
  >
  </el-switch>
  <el-cascader
    v-else-if="formType === 'cascader'"
    v-model="localValue"
    :options="options"
    v-bind="$attrs"
    v-on="$listeners"
  ></el-cascader>
</template>

<script>
import ClMuchSelect from '../MuchSelect/index.vue'
export default {
  name: 'ClFormEle',
  components: { ClMuchSelect },
  props: {
    formType: {
      type: String,
      default: 'input'
    },
    fieldLabel: String,
    fieldValue: String,
    modelValue: null,
    options: {
      type: Array,
      default: () => []
    }
  },
  model: {
    prop: 'modelValue',
    event: 'editModelValue'
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        console.log(val)
        this.$emit('editModelValue', val)
      }
    },
    clearable() {
      return this.$attrs.clearable === false ? false : true
    },
    placeholder() {
      let text = '请选择'
      if (this.formType === 'input') {
        text = '请输入'
      }
      return this.$attrs.placeholder || text + (this.$attrs.label || '')
    },
    rangeSeparator() {
      return this.$attrs.rangeSeparator || '至'
    },
    startPlaceholder() {
      return this.$attrs.startPlaceholder || '开始时间'
    },
    endPlaceholder() {
      return this.$attrs.endPlaceholder || '结束时间'
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.el-input {
  width: 100%;
  height: 30px;
}
.el-select {
  width: 100%;
}
.el-date-editor {
  width: 100%;
}
</style>
