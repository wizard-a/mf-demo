
export const qiankun = {
	// 应用加载之前
	async bootstrap(props) {
		console.log('micro=> bootstrap', props);
	},
	// 应用 render 之前触发
	async mount(props) {
		// console.log('app1 mount', props);
	},
 	async unmount(props) {
		// console.log('app1 unmount', props);
	},
};



