<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>3D Portfolio</title>

<!-- Google Font -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    overflow-x:hidden;
    color:white;
    background:linear-gradient(-45deg,#0f2027,#203a43,#2c5364,#1c1c1c);
    background-size:400% 400%;
    animation:gradientBG 15s ease infinite;
}

@keyframes gradientBG{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

canvas{
    position:fixed;
    top:0;
    left:0;
    z-index:-1;
}

header{
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
}

header h1{
    font-size:3rem;
    font-weight:700;
    animation:fadeDown 1.5s ease;
}

header p{
    margin-top:10px;
    font-size:1.2rem;
    opacity:0.8;
}

@keyframes fadeDown{
    from{opacity:0;transform:translateY(-50px);}
    to{opacity:1;transform:translateY(0);}
}

.btn{
    margin-top:20px;
    padding:12px 25px;
    border-radius:30px;
    border:none;
    background:rgba(255,255,255,0.1);
    backdrop-filter:blur(10px);
    color:white;
    cursor:pointer;
    transition:0.4s;
}

.btn:hover{
    background:white;
    color:black;
    transform:scale(1.1);
}

section{
    padding:80px 10%;
    text-align:center;
}

.card{
    margin:20px;
    padding:30px;
    border-radius:20px;
    background:rgba(255,255,255,0.1);
    backdrop-filter:blur(15px);
    display:inline-block;
    transition:0.4s;
}

.card:hover{
    transform:translateY(-10px) scale(1.05);
}

.icons{
    margin-top:30px;
}

.icon{
    display:inline-block;
    margin:15px;
    font-size:40px;
    animation:float 4s ease-in-out infinite;
}

@keyframes float{
    0%{transform:translateY(0);}
    50%{transform:translateY(-20px);}
    100%{transform:translateY(0);}
}

footer{
    padding:30px;
    text-align:center;
    opacity:0.6;
}
</style>
</head>
<body>

<header>
    <h1>Hi, I'm Your Name</h1>
    <p>Frontend Developer | 3D Designer | Creative Coder</p>
    <button class="btn" onclick="scrollToSection()">Explore</button>
</header>

<section id="about">
    <h2>About Me</h2>
    <div class="card">
        <p>I create modern, interactive and realistic web experiences with 3D animations and smooth UI effects.</p>
    </div>
</section>

<section>
    <h2>Skills</h2>
    <div class="icons">
        <div class="icon">💻</div>
        <div class="icon">⚡</div>
        <div class="icon">🎨</div>
        <div class="icon">🚀</div>
    </div>
</section>

<section>
    <h2>Projects</h2>
    <div class="card">Project One</div>
    <div class="card">Project Two</div>
    <div class="card">Project Three</div>
</section>

<footer>
    © 2026 Your Name | All Rights Reserved
</footer>

<!-- Three.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<script>
// Smooth Scroll
function scrollToSection(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
}

// 3D Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({color:0x00ffff, wireframe:true});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const light = new THREE.PointLight(0xffffff,1);
light.position.set(20,20,20);
scene.add(light);

camera.position.z = 30;

function animate(){
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene,camera);
}
animate();

// Responsive
window.addEventListener("resize",()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});
</script>

</body>
</html>
