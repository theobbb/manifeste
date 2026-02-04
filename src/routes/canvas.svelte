<script lang="ts">

    class Canvas {
        canvas: HTMLCanvasElement
         constructor(ref: HTMLCanvasElement) {
            this.canvas = ref
         }   

         

    }

    function init(element: HTMLCanvasElement) {
        const instance = new Canvas(element)
        // return () => {
        //     instance.destroy()
        // }
    }
</script>

<canvas use:init></canvas>