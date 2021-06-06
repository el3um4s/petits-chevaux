<script  lang="ts">
    export let construct3: HTMLIFrameElement;
</script>

<iframe title="C3" bind:this="{construct3}" src="./c3/index.html" scrolling="no" noresize="noresize" /> 

<!-- <iframe title="C3" bind:this="{construct3}" src="https://c3demo.stranianelli.com/template/020-petits-chevaux/demo/index.html" scrolling="no" noresize="noresize" />  -->

<style>
    iframe {
        border-color: var(--background);
        border-style: none;

        width: 512px;
        height: 512px;
    }
</style>