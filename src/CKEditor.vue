<template>
  <div>
    <h1>{{ msg }}</h1>
  	<ckeditor
  		editor="classic"
  		tag-name="textarea"
  		v-model="editorData"
  		:config="editorConfig"
  		:disabled="editorDisabled"
  		@ready="onEditorReady"
  		@focus="onEditorFocus"
  		@blur="onEditorBlur"
  		@input="onEditorInput"
  		@destroy="onEditorDestroy"
  		></ckeditor>
  	<button v-on:click="toggleEditorDisabled()">
  		{{ editorDisabled ? 'Enable' : 'Disable' }} editor
  	</button>

  	<h2>Live data</h2>
  	<div v-html="editorData"></div>
  </div>
</template>
<script>
export default {
  name: 'CKEditor',
  data () {
    return {
      msg: 'Welcome to CKEditor 5!',
      editorData: '<p>Hello world!</p>',
			editorConfig: { toolbar: [ 'heading', '|', 'bold', 'italic' ] },
			editorDisabled: false
    }
  },
  methods: {
		toggleEditorDisabled() {
			this.editorDisabled = !this.editorDisabled;
		},
    onEditorReady( editor ) {
		  console.log( 'Editor is ready.', { editor } );
	  },
	  onEditorFocus( event, editor ) {
		  console.log( 'Editor focused.', { event, editor } );
	  },
	  onEditorBlur( event, editor ) {
		  console.log( 'Editor blurred.', { event, editor } );
	  },
	  onEditorInput( data, event, editor ) {
		  console.log( 'Editor data input.', { event, editor, data } );
	  },
	  onEditorDestroy( editor ) {
		  console.log( 'Editor destroyed.', { editor } );
	  },
  },
}
</script>
