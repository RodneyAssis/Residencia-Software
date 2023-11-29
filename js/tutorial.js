
function abrialerta() {
    Swal.fire({
      title: "Tutorial",
      html: `
      <div class="video">
        <video controls width="300" poster="../img/img_vídeos/vdimg 1.webp"> 
          <source style="width: 500px;" src="../img/links_vídeos/video1.mp4">
        </video>
        <h4>Tutorial 1</h4>
      </div>
      <div class="video">
        <video controls width="300" poster="../img/img_vídeos/vdimg 2.webp"> 
          <source src="../img/links_vídeos/video1.mp4">
        </video>
        <h4>Tutorial 2</h4>
      </div>
      <div class="video">
        <video controls width="300" poster="../img/img_vídeos/vdimg 3.webp"> 
          <source src="../img/links_vídeos/video1.mp4">
        </video>
        <h4>Tutorial 3</h4>
      </div>
      `,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Fechar"
    })
    }