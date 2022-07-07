// Shader
const particleVertexShader = `
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  attribute vec3 position;
  uniform float size;
  attribute vec4 color;
  varying vec4 vColor;
  uniform float time;
  attribute vec3 endPosition;

  void main() {
    float x = position.x + time*endPosition.x;
    float y = position.y + time*endPosition.y;
    float z = position.z;
    vec3 resultPos = vec3(x, y, z);
    vec4 mvPosition = modelViewMatrix * vec4(resultPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = size;

    vColor = color;
  }
`;

const particleFlagmentShader = `
  precision mediump float;
  varying vec4 vColor;

  void main() {
    gl_FragColor = vColor;
  }
`;

// Geometry
class ParticleGeometry extends THREE.BufferGeometry {
  constructor(xLength, yLength) {
    super();
    this.xStep = 2;
    this.yStep = 2;
    this.xLength = xLength;
    this.yLength = yLength;
    this.init();
  }

  init() {
    const startPosBase = [];
    const endPositionBase = [];
    const colorsBase = [];
    const stageWidth = window.innerWidth;
    const stageHeight = window.innerHeight;

    for (let j = 0; j < this.yLength; j++) {
      for (let i = 0; i < this.xLength; i++) {
        const startPosX = i * this.xStep - ((this.xLength+1) * this.xStep) / 2;
        const startPosY = j * this.yStep - ((this.yLength+1) * this.yStep) / 2;
        const startPosZ = 0;

        const endPosX = (Math.random() * stageWidth - stageWidth/2) * 1.5;
        const endPosY = (Math.random() * stageHeight - stageHeight/2) * 1.5;
        const endPosZ = 0;

        const r = 1.0;
        const g = 0.0;
        const b = 1.0;
        const a = 1.0;

        startPosBase.push(startPosX, startPosY, startPosZ);
        endPositionBase.push(endPosX, endPosY, endPosZ);
        colorsBase.push(r, g, b, a);
      }
    }

    const startPos = new Float32Array(startPosBase);
    this.addAttribute('position', new THREE.BufferAttribute(startPos, 3));

    const endPosition = new Float32Array(endPositionBase);
    this.addAttribute('endPosition', new THREE.BufferAttribute(endPosition, 3));

    const colors = new Float32Array(colorsBase);
    this.addAttribute('color', new THREE.BufferAttribute(colors, 4));
  }
}

// Material
class ParticleMaterial extends THREE.RawShaderMaterial {
  constructor(rectSize) {
    super({
      uniforms: {
        size: { type: 'f', value: rectSize },
        time: { type: 'f', value: 0 }
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFlagmentShader,
      transparent: true,
      depthTest: false
    });
  }

  get time() {
    return this.uniforms.time.value;
  }

  set time(value) {
    this.uniforms.time.value = value;
  }
}

// Main
class Main {
  constructor() {
    window.addEventListener("load", this.onLoad.bind(this));
  }

  initThree() {
    this.$stage = document.querySelector('#js-stage');
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;

    // render
    this.renderer = new THREE.WebGLRenderer({antialias: false, alpha: true});
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.stageWidth, this.stageHeight);
    this.$stage.appendChild(this.renderer.domElement);

    // scene
    this.scene = new THREE.Scene();

    // camera
    this.camera = new THREE.OrthographicCamera(-this.stageWidth/2, this.stageWidth/2, this.stageHeight/2, -this.stageHeight/2, 1, 1000);
    this.camera.position.set(0, 0, 1000);

    // fps
    this.stats = new Stats();
    this.stats.domElement.style.position = "fixed";
    this.stats.domElement.style.left    = "0px";
    this.stats.domElement.style.top      = "5px";
    document.body.appendChild(this.stats.domElement);
  }

  setParticle() {
    this.particleGeometry = new ParticleGeometry(150, 150);
    this.particleMaterial = new ParticleMaterial(1);
    const points = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.scene.add(points);
  }

  onAnimate() {
    requestAnimationFrame(this.onAnimate.bind(this));
    this.stats.update(); // fps表示
    this.renderer.render(this.scene, this.camera);
  }

  diffusion() {
    TweenMax.to(this.particleMaterial, 2, {
      ease: Sine.easeInOut,
      delay: 0,
      time: 1
    });
  }

  convergence() {
    TweenMax.to(this.particleMaterial, 2, {
      ease: Sine.easeInOut,
      delay: 0,
      time: 0
    });
  }
  
  interval() {
    let count = 0;

    setInterval(() => {
      if (count === 0) {
        this.diffusion();
      }
      else if (count === 1) {
        this.convergence();
      }
      count = 1 - count;
    }, 2000);
  }

  onLoad() {
    this.initThree();
    this.setParticle();
    this.interval();
    this.onAnimate();
  }
}

new Main();