<template>
	<div class="hello">
		<h1>接受父亲msg{{ msg }}</h1>

	</div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Emit,
} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({
    type: String, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: ' ', // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  }) public msg!: string
  // @Prop() msg : string;
  chilFn(ss:string) {
    // 传值给父
    this.sendFather('sss');
  }
  @Emit('bindSend') sendFather(ss: string) {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
