let scene, camera, renderer, controls, sphere;

function init(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#000000");
  camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.autoRotate = false;
  
  var light = new THREE.DirectionalLight(0xfffff, 1.2);
  light.position.set(100, 100, 100);
  scene.add(light);
  
  const color1 = new THREE.Color("#478BFF");
  var sphereGeometry = new THREE.SphereGeometry(1, 128, 128);
  var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
  // const material = new THREE.MeshBasicMaterial({color: color1});
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);
  
  
//   const geometry = new THREE.BoxGeometry( 2, 2, 2);
//   const color1 = new THREE.Color("#09143c");
//   const material = new THREE.MeshBasicMaterial({color: color1});
  
  
//   cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);
  camera.position.z = 3;
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

function update(){
  
  var time = performance.now() * 0.001;
  for (var i=0; i < sphere.geometry.vertices.length; i++){
    var p = sphere.geometry.vertices[i];
    p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x + time, p.y, p.z));
  }
  sphere.geometry.verticesNeedUpdate = true;
  sphere.geometry.computeVertexNormals();
  sphere.geometry.normalsNeedUpdate = true;
}

function animate(){
  requestAnimationFrame(animate);
  controls.update();
  update();
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

init();

animate();
