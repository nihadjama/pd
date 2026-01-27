'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const WaveRibbon = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom shader for feather-textured thread bundle
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorStart: { value: new THREE.Color('#4a3ce1') }, // Deep magenta
      uColorMid: { value: new THREE.Color('#ff3388') },   // Hot pink
      uColorEnd: { value: new THREE.Color('#ffb3d9') },   // Light pink
      uColorAccent: { value: new THREE.Color('#ff6b9d') }, // Coral accent
      uColorViolet: { value: new THREE.Color('#8b5cf6') }, // Violet
      uColorRose: { value: new THREE.Color('#f43f5e') }, // Rose red
      uColorPeach: { value: new THREE.Color('#ff9f9f') }, // Peach
      uColorLavender: { value: new THREE.Color('#c084fc') }, // Lavender
      uThreadFrequency: { value: 1800.0 }, // Number of distinct threads (increased)
      uThreadSeparation: { value: 0.0 }, // Gap between threads (no gap - threads overlap)
      uThreadWidth: { value: 1 }, // Width of each thread (increased for better coverage)
      uFeatherSoftness: { value: 0 }, // Softness of feather edges
      uFeatherBarbs: { value: 120.0 }, // Frequency of barbs along feather
    }),
    []
  );

  const vertexShader = `
    precision highp float;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vElevation;
    varying float vCylindricalV;
    varying float vRadialDist;
    
    uniform float uTime;
    
    // 2-strand braiding function
    vec3 braid2Strand(vec3 pos, float angle) {
      // Divide into 2 strands based on angle
      // Strand 1: 0-180°, Strand 2: 180-360°
      float strand1 = step(0.0, angle) * (1.0 - step(3.14159, angle)); // 0 to π
      // Normalize angle to 0-2π
      angle = mod(angle + 6.28318, 6.28318);
      float strand2 = 1.0 - strand1; // Remaining is strand 2
      
      // Braiding pattern frequency along the length
      float braidFreq = 0.6;
      float braidPhase = pos.x * braidFreq + uTime * 0.15;
      
      // Create over/under pattern for each strand with phase offset
      // Strand 1: phase 0
      float strand1Offset = sin(braidPhase) * 0.5;
      // Strand 2: phase π (180°)
      float strand2Offset = sin(braidPhase + 3.14159) * 0.5;
      
      // Combine strand offsets
      float braidOffset = strand1 * strand1Offset + strand2 * strand2Offset;
      
      // Also create lateral movement for braiding effect
      float lateralOffset = cos(braidPhase * 0.6) * 0.2;
      
      return vec3(0.0, braidOffset, lateralOffset);
    }
    
    // Smooth, elegant wave function for gentle flow (reduced for braiding)
    float wave(vec3 pos) {
      float frequency1 = 0.3;
      float amplitude1 = 0.3;
      
      // Primary smooth wave along the length (gentler for braiding)
      float wave1 = sin(pos.x * frequency1 + uTime * 0.3) * amplitude1;
      
      return wave1;
    }
    
    void main() {
      vUv = uv;
      vCylindricalV = uv.y;
      
      vec3 pos = position;
      
      // Create solid cylindrical thread bundle (not hollow)
      // Map box geometry to solid cylinder with threads at all radii
      // position.z goes from -0.4 to 0.4 (depth of box)
      // Convert to radial distance from center (0 = center, 1 = outer edge)
      float radialDist = abs(position.z) / 0.4;
      float radius = radialDist * 0.4; // Scale to max radius
      
      float angle = (uv.y - 0.5) * 3.14159 * 2.0; // Full circle
      
      // Map box to solid cylinder - threads at all radial positions
      float cylY = sin(angle) * radius;
      float cylZ = cos(angle) * radius;
      
      pos.y = cylY;
      pos.z = cylZ;
      
      // Store radial distance for fragment shader
      vRadialDist = radialDist;
      
      // Apply 2-strand braiding pattern
      vec3 braidOffset = braid2Strand(pos, angle);
      pos.y += braidOffset.y;
      pos.z += braidOffset.z;
      
      // Create smooth flowing thread bundle wave (gentler for braiding)
      float elevation = wave(pos);
      
      // Apply elevation with smooth falloff
      float elevationSmooth = elevation * smoothstep(-1.0, 1.0, elevation);
      pos.z += elevationSmooth * 0.3;
      pos.y += elevationSmooth * 0.15;
      
      // Reduced twist for braiding effect
      float twist = pos.x * 0.2 + uTime * 0.1;
      float cosT = cos(twist);
      float sinT = sin(twist);
      float y = pos.y * cosT - pos.z * sinT;
      float z = pos.y * sinT + pos.z * cosT;
      pos.y = y;
      pos.z = z;
      
      // Add smooth organic feather movement (lighter, more delicate than threads)
      // Each feather moves slightly independently based on its position
      // Include radial layer in thread ID for interior threads
      float radialLayer = floor(radialDist * 8.0);
      float threadId = floor(angle * 500.0 / (3.14159 * 2.0)) + radialLayer * 30.0;
      
      // Smooth organic waves - different phase for each feather (more amplitude for lightness)
      float organicWave1 = sin(pos.x * 1.5 + threadId * 0.4 + uTime * 0.35) * 0.04;
      float organicWave2 = cos(pos.x * 2.2 - threadId * 0.25 + uTime * 0.28) * 0.03;
      float organicWave3 = sin(pos.x * 3.0 + threadId * 0.6 + uTime * 0.42) * 0.02;
      
      // Flutter motion for feather lightness
      float flutter = sin(pos.x * 4.0 + threadId * 1.2 + uTime * 0.8) * 0.015;
      
      // Smooth the organic movement
      float totalOrganic = (organicWave1 + organicWave2 + organicWave3 + flutter) * 
                           smoothstep(0.0, 1.0, sin(pos.x * 0.4 + uTime * 0.18) * 0.5 + 0.5);
      
      // Apply organic movement perpendicular to feather direction
      pos.y += totalOrganic * sin(angle);
      pos.z += totalOrganic * cos(angle);
      
      // Add slight smooth variation in radius per feather for more natural separation
      float radiusVariation = sin(threadId * 1.8 + uTime * 0.12) * 0.025;
      pos.y *= (1.0 + radiusVariation);
      pos.z *= (1.0 + radiusVariation);
      
      vPosition = pos;
      vElevation = elevation;
      
      // Calculate normals for cylindrical surface
      vec3 tangent = normalize(vec3(1.0, 
        cos(angle) * radius * 0.1, 
        -sin(angle) * radius * 0.1));
      vec3 bitangent = normalize(vec3(0.0, cos(angle), -sin(angle)));
      vNormal = normalize(cross(tangent, bitangent));
      
      // Transform normal by twist
      float ny = vNormal.y * cosT - vNormal.z * sinT;
      float nz = vNormal.y * sinT + vNormal.z * cosT;
      vNormal.y = ny;
      vNormal.z = nz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vElevation;
    varying float vCylindricalV;
    varying float vRadialDist;
    
    uniform float uTime;
    uniform vec3 uColorStart;
    uniform vec3 uColorMid;
    uniform vec3 uColorEnd;
    uniform vec3 uColorAccent;
    uniform vec3 uColorViolet;
    uniform vec3 uColorRose;
    uniform vec3 uColorPeach;
    uniform vec3 uColorLavender;
    uniform float uThreadFrequency;
    uniform float uThreadSeparation;
    uniform float uThreadWidth;
    uniform float uFeatherSoftness;
    uniform float uFeatherBarbs;
    
    // Optimized noise function for organic thread texture
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      // Four corners in 2D of a tile
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      // Smooth interpolation with smoothstep
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      // Mix 4 corners percentages
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }
    
    // High-quality hash function to eliminate color banding
    // Uses multiple hash passes and spatial jitter for proper color distribution
    float hash1(float n) {
      return fract(sin(n) * 43758.5453123);
    }
    
    float hash2(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    float hash3(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453123);
    }
    
    // Multi-pass hash with spatial jitter to break up color bands
    float hashColorIndex(float threadId, float radialLayer, float angle, float positionX, float numColors) {
      // Create unique seed for each thread using multiple factors
      float seed = threadId * 0.618034 + radialLayer * 1.618034 + angle * 2.236068 + positionX * 3.141593;
      
      // First hash pass - basic scrambling
      float h1 = hash1(seed);
      
      // Second hash pass - add spatial jitter to break up bands
      vec2 spatial = vec2(radialLayer * 0.7 + angle * 0.3, positionX * 0.5 + threadId * 0.2);
      float h2 = hash2(spatial);
      
      // Third hash pass - combine with thread-specific factors
      vec3 combined = vec3(threadId * 0.123, radialLayer * 0.456, angle * 0.789 + positionX * 0.321);
      float h3 = hash3(combined);
      
      // Combine all passes with XOR-like mixing for better distribution
      float combinedHash = fract(h1 * 0.33 + h2 * 0.33 + h3 * 0.34);
      
      // Add additional jitter based on position to break longitudinal bands
      float positionJitter = hash2(vec2(positionX * 17.0, threadId * 13.0));
      combinedHash = fract(combinedHash + positionJitter * 0.1);
      
      // Scale to 0-numColors range and floor to get integer index
      return floor(combinedHash * numColors);
    }
    
    void main() {
      // Use actual radial distance from vertex shader (from geometry depth)
      float radialDist = vRadialDist;
      
      // Determine which of the 2 braid strands this thread belongs to
      float angle = vCylindricalV * 6.28318; // Convert to 0-2π
      float strand1 = step(0.0, angle) * (1.0 - step(3.14159, angle)); // 0 to π
      float strand2 = 1.0 - strand1; // Remaining is strand 2
      
      // Create threads at all radial positions, not just surface
      float radialLayer = floor(radialDist * 10.0); // 10 layers of threads (increased)
      float threadId = floor(vCylindricalV * uThreadFrequency) + radialLayer * 50.0;
      
      // Create ultra-smooth gradient along the thread bundle
      float gradientX = smoothstep(0.0, 1.0, vUv.x);
      gradientX = gradientX * gradientX * (3.0 - 2.0 * gradientX); // Smootherstep
      
      // Keep threads visible throughout - minimal fade at very center only
      float centerFade = smoothstep(0.0, 0.1, radialDist);
      centerFade = max(centerFade, 0.7); // Ensure minimum 70% opacity even at center
      
      // Per-thread color variation - each strand has its own color personality
      float threadColorSeed = threadId * 0.1;
      float colorVar1 = noise(vec2(threadId * 0.3, 0.0));
      float colorVar2 = noise(vec2(threadId * 0.7, 1.0));
      float colorVar3 = noise(vec2(threadId * 1.1, 2.0));
      float colorVar4 = noise(vec2(threadId * 1.5, 3.0));
      
      // Create color personality for this specific thread
      vec3 threadColorShift = vec3(
        colorVar1 * 0.35 - 0.175,  // -0.175 to +0.175
        colorVar2 * 0.3 - 0.15,    // -0.15 to +0.15
        colorVar3 * 0.25 - 0.125   // -0.125 to +0.125
      );
      
      // Multi-color gradient with smooth transitions through all colors
      vec3 baseColor;
      if (gradientX < 0.125) {
        baseColor = mix(uColorStart, uColorViolet, gradientX / 0.125);
      } else if (gradientX < 0.25) {
        baseColor = mix(uColorViolet, uColorMid, (gradientX - 0.125) / 0.125);
      } else if (gradientX < 0.375) {
        baseColor = mix(uColorMid, uColorRose, (gradientX - 0.25) / 0.125);
      } else if (gradientX < 0.5) {
        baseColor = mix(uColorRose, uColorAccent, (gradientX - 0.375) / 0.125);
      } else if (gradientX < 0.625) {
        baseColor = mix(uColorAccent, uColorLavender, (gradientX - 0.5) / 0.125);
      } else if (gradientX < 0.75) {
        baseColor = mix(uColorLavender, uColorPeach, (gradientX - 0.625) / 0.125);
      } else if (gradientX < 0.875) {
        baseColor = mix(uColorPeach, uColorEnd, (gradientX - 0.75) / 0.125);
      } else {
        baseColor = mix(uColorEnd, uColorLavender, (gradientX - 0.875) / 0.125);
      }
      
      // Apply per-thread color variation
      baseColor += threadColorShift;
      
      // Add very subtle strand-based color variation for braiding effect
      // Reduced to minimize banding - hash function handles color distribution
      vec3 strandColorShift = vec3(0.0);
      if (strand1 > 0.5) {
        // Strand 1: very subtle violet/blue tint
        strandColorShift = mix(uColorViolet, uColorStart, 0.3) * 0.03;
      } else {
        // Strand 2: very subtle pink/rose tint
        strandColorShift = mix(uColorMid, uColorRose, 0.3) * 0.03;
      }
      baseColor += strandColorShift;
      
      // Evenly distribute colors across threads using advanced hash function
      // Includes position along length to break up longitudinal color bands
      float colorIndex = hashColorIndex(threadId, radialLayer, angle, vUv.x, 8.0);
      float colorMixStrength = 0.18 + colorVar1 * 0.12;
      
      if (colorIndex == 0.0) {
        // Deep magenta
        baseColor = mix(baseColor, uColorStart, colorMixStrength);
      } else if (colorIndex == 1.0) {
        // Violet
        baseColor = mix(baseColor, uColorViolet, colorMixStrength);
      } else if (colorIndex == 2.0) {
        // Hot pink
        baseColor = mix(baseColor, uColorMid, colorMixStrength);
      } else if (colorIndex == 3.0) {
        // Rose red
        baseColor = mix(baseColor, uColorRose, colorMixStrength);
      } else if (colorIndex == 4.0) {
        // Coral accent
        baseColor = mix(baseColor, uColorAccent, colorMixStrength);
      } else if (colorIndex == 5.0) {
        // Lavender
        baseColor = mix(baseColor, uColorLavender, colorMixStrength);
      } else if (colorIndex == 6.0) {
        // Peach
        baseColor = mix(baseColor, uColorPeach, colorMixStrength);
      } else {
        // Light pink
        baseColor = mix(baseColor, uColorEnd, colorMixStrength);
      }
      
      // Add accent color based on elevation with smooth blending (using multiple colors)
      // Evenly distribute accent colors across threads with hash to break up groups
      float accentMix = smoothstep(-0.6, 0.6, vElevation);
      accentMix = accentMix * accentMix * (3.0 - 2.0 * accentMix); // Smootherstep
      float accentColorIndex = hashColorIndex(threadId + 1000.0, radialLayer + 5.0, angle + 1.57, vUv.x + 0.5, 4.0); // Offset to vary from base color
      vec3 accentColor;
      if (accentColorIndex == 0.0) {
        accentColor = uColorViolet;
      } else if (accentColorIndex == 1.0) {
        accentColor = uColorRose;
      } else if (accentColorIndex == 2.0) {
        accentColor = uColorLavender;
      } else {
        accentColor = uColorAccent;
      }
      baseColor = mix(baseColor, accentColor, accentMix * 0.25);
      
      // Create distinct separated threads with feather texture
      // Add radial variation to thread position for interior threads (reduced for better overlap)
      float radialOffset = sin(radialLayer * 2.5 + threadId * 0.1) * 0.05;
      float threadPosition = fract(vCylindricalV * uThreadFrequency + radialOffset);
      
      // Create feather barbs along the length
      float barbPattern = sin(vPosition.x * uFeatherBarbs + threadId * 2.0 + uTime * 0.15) * 0.5 + 0.5;
      barbPattern = pow(barbPattern, 0.7); // Soften barbs
      
      // Add irregular, organic barb edges
      float barbNoise = noise(vec2(vPosition.x * 80.0, threadId * 3.0));
      float barbEdge = barbPattern * (0.7 + barbNoise * 0.3);
      
      // Create soft, wispy thread boundaries (not hard edges)
      // Reduced separation and increased overlap to eliminate gaps
      float softEdge = uThreadSeparation + (1.0 - barbEdge) * uFeatherSoftness * 0.3;
      float threadMask = smoothstep(softEdge, softEdge + 0.2, threadPosition);
      // Increased thread width coverage to ensure overlap
      threadMask *= 1.0 - smoothstep(uThreadWidth - uFeatherSoftness * barbEdge * 0.5, 
                                     uThreadWidth + 0.2, threadPosition);
      
      // Soft feather opacity - wispy edges fade out
      // Apply radial fade so interior threads are visible throughout
      float featherOpacity = threadMask * centerFade;
      
      // If thread is too transparent, discard (lower threshold for interior threads)
      if (featherOpacity < 0.03) {
        discard;
      }
      
      // Create soft, fluffy thread profile with better coverage
      // Adjusted for wider threads that overlap
      float threadProfile = sin(threadPosition * 3.14159 / uThreadWidth) * 0.5 + 0.5;
      threadProfile = pow(threadProfile, 1.0); // Less soft for better coverage
      threadProfile = smoothstep(0.0, 1.0, threadProfile);
      // Ensure threads have good coverage in the center
      threadProfile = max(threadProfile, 0.6);
      
      // Add delicate feather texture along length
      float featherTexture = noise(vec2(vPosition.x * 150.0 + threadId * 5.0, threadPosition * 50.0));
      featherTexture = mix(0.5, featherTexture, 0.6);
      
      // Create rachis (central spine) of feather - slightly more defined
      float rachisCenter = 1.0 - smoothstep(0.3, 0.5, abs(threadPosition - 0.5) * 2.0);
      
      // Apply feather texture to color with soft variations
      vec3 threadColor = mix(baseColor * 0.75, baseColor * 1.25, threadProfile * featherTexture);
      threadColor = mix(threadColor, baseColor * 1.1, rachisCenter * 0.3); // Subtle rachis
      
      // Add organic variation along each feather strand
      float organicNoise = noise(vec2(vPosition.x * 20.0 + threadId * 10.0, threadId * 2.0));
      threadColor *= (0.85 + organicNoise * 0.25);
      
      // Add iridescent color variation per feather - evenly distribute color combinations
      float iridescenceFactor = sin(vPosition.x * 0.5 + threadId * 0.1) * 0.5 + 0.5; // Smooth variation along length
      float iridescenceStrength = noise(vec2(threadId * 2.0, 5.0)); // Keep some randomness for strength
      float iridescenceChoice = hashColorIndex(threadId + 2000.0, radialLayer + 10.0, angle + 3.14, vUv.x + 1.0, 5.0); // Offset to vary from base/accent
      
      // Each thread has different iridescence between various color combinations
      vec3 iridescence;
      if (iridescenceChoice == 0.0) {
        iridescence = mix(uColorStart, uColorViolet, iridescenceFactor);
      } else if (iridescenceChoice == 1.0) {
        iridescence = mix(uColorViolet, uColorMid, iridescenceFactor);
      } else if (iridescenceChoice == 2.0) {
        iridescence = mix(uColorMid, uColorRose, iridescenceFactor);
      } else if (iridescenceChoice == 3.0) {
        iridescence = mix(uColorRose, uColorLavender, iridescenceFactor);
      } else {
        iridescence = mix(uColorLavender, uColorPeach, iridescenceFactor);
      }
      
      threadColor = mix(threadColor, iridescence, iridescenceStrength * 0.25);
      
      // Add subtle hue shift per thread for variety
      float hueShift = noise(vec2(threadId * 3.0, 10.0)) * 0.15;
      threadColor = mix(threadColor, threadColor.bgr, hueShift);
      
      // Vary saturation per thread - some threads more vibrant, others softer
      float saturationVar = noise(vec2(threadId * 4.0, 20.0));
      float luminance = dot(threadColor, vec3(0.299, 0.587, 0.114));
      vec3 grayscale = vec3(luminance);
      float saturationFactor = 0.8 + saturationVar * 0.4; // 0.8 to 1.2
      threadColor = mix(grayscale, threadColor, saturationFactor);
      
      // Vary brightness per thread for depth
      float brightnessVar = noise(vec2(threadId * 6.0, 30.0));
      float brightnessFactor = 0.85 + brightnessVar * 0.3; // 0.85 to 1.15
      threadColor *= brightnessFactor;
      
      // Apply feather softness to opacity - ensure high opacity for coverage
      featherOpacity *= (0.8 + threadProfile * 0.2) * (0.95 + barbEdge * 0.05);
      // Boost opacity to eliminate gaps
      featherOpacity = min(featherOpacity * 1.2, 1.0);
      
      // Enhanced lighting for soft, feathery strands
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 2.0));
      float diffuse = max(dot(vNormal, lightDirection), 0.0);
      
      // Soft wrap-around lighting for delicate feathers
      float wrapDiffuse = max(0.0, (dot(vNormal, lightDirection) + 0.7) / 1.7);
      
      // Soft rim lighting for feather edges (reduced intensity)
      vec3 viewDirection = normalize(cameraPosition - vPosition);
      float rimLight = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 2.5);
      
      // Soft specular highlights on feather barbs (much softer, reduced intensity)
      vec3 reflectDirection = reflect(-lightDirection, vNormal);
      float specular = pow(max(dot(viewDirection, reflectDirection), 0.0), 32.0);
      specular *= threadProfile * 0.3; // Reduced highlights on feather rachis
      specular = smoothstep(0.0, 1.0, specular); // Soften specular edges
      
      // Enhanced subsurface scattering for feather translucency
      float backLight = max(0.0, dot(vNormal, -lightDirection));
      vec3 subsurface = mix(uColorEnd, uColorMid, 0.5) * backLight * 0.4;
      
      // Ambient light for soft, diffuse feather appearance
      float ambientFactor = 0.5 + wrapDiffuse * 0.5;
      
      // Combine lighting with feather softness
      vec3 lighting = threadColor * ambientFactor;
      lighting += rimLight * uColorEnd * 0.6; // Reduced rim light intensity
      lighting += specular * threadColor * 0.15; // Reduced specular, use thread color instead of white
      lighting += subsurface; // Feathers glow when backlit
      
      // Soft ambient occlusion in feather structure
      float ao = mix(0.8, 1.0, threadProfile * featherTexture);
      lighting *= ao;
      
      // Clamp lighting to prevent over-bright white patches
      lighting = min(lighting, vec3(1.5));
      
      // Apply feather opacity for soft, wispy appearance
      gl_FragColor = vec4(lighting, featherOpacity);
    }
  `;

  useFrame((state, delta) => {
    if (materialRef.current) {
      // Use delta for frame-independent animation
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    
    // Smooth rotation update
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.0;
      meshRef.current.rotation.y += delta * 0.0;
    }
  });

  // Optimized high-resolution cylindrical thread bundle geometry with depth
  const geometry = useMemo(() => {
    // Create box geometry with depth to represent solid bundle
    // Width: 40 (length - doubled to hide edges), Height: 1.0 (circumference), Depth: 0.8 (diameter)
    // This gives us actual geometry depth to render interior threads
    return new THREE.BoxGeometry(40, 1.0, 0.8, 800, 150, 12);
  }, []);

  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry} 
      rotation={[Math.PI / 2 - 0.25, 0.05, 0]} 
      position={[-5, 0.2, 0]}
      scale={[1.5, 1.5, 1.5]}
    >
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        transparent={true}
        depthWrite={false}
        depthTest={true}
        blending={THREE.NormalBlending}
        precision="highp"
      />
    </mesh>
  );
};

const Scene = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(-1, 0.2, 0);
    }
  });
  
  return (
    <>
      <PerspectiveCamera 
        ref={cameraRef}
        makeDefault 
        position={[-2, 1.5, 6]} 
        fov={58}
        near={0.1}
        far={1000}
      />
      
      {/* Optimized lighting setup for performance */}
      <ambientLight intensity={0.35} color="#ffffff" />
      
      {/* Main key light */}
      <directionalLight
        position={[8, 6, 10]}
        intensity={1.8}
        color="#ffffff"
        castShadow={false}
      />
      
      {/* Fill light with pink tint */}
      <directionalLight
        position={[-6, -4, 8]}
        intensity={1.0}
        color="#ffc4e1"
        castShadow={false}
      />
      
      {/* Back light for depth */}
      <directionalLight
        position={[0, -10, 6]}
        intensity={0.8}
        color="#ffb3d9"
        castShadow={false}
      />
      
      {/* Rim light */}
      <directionalLight
        position={[-8, 8, -4]}
        intensity={0.7}
        color="#ff6b9d"
        castShadow={false}
      />
      
      {/* Accent spotlight */}
      <spotLight
        position={[12, 12, 12]}
        intensity={1.2}
        angle={0.4}
        penumbra={1}
        color="#fff0f8"
        castShadow={false}
      />
      
      <WaveRibbon />
      
      {/* Environment for subtle reflections */}
      <Environment preset="studio" environmentIntensity={0.5} />
    </>
  );
};

export default function WaveAnimation() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: 'high-performance',
          precision: 'highp',
          stencil: false,
          depth: true,
        }}
        dpr={[1, 2]}
        frameloop="always"
        performance={{ min: 0.5 }}
        shadows={false}
      >
        <color attach="background" args={['#fafafa']} />
        <Scene />
      </Canvas>
    </div>
  );
}

