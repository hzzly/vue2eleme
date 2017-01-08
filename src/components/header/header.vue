<template>
	<div class="header">
		header
	</div>
</template>

<script>
export default {
	data() {
		return {
			detailShow: false
		}
	},
	props: {
		seller: {
			type: Object
		}
	},
	methods: {
		showDetail() {

		},
		closeDetail() {

		}
	},
	created() {
		this.classMap = ['decrease','discount','special','invoice','guarantee']
	}
}
</script>

<style lang="scss" scoped>
	
</style>