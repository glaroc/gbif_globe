import './App.css';
import Globe from 'react-globe.gl'
import * as THREE from "three";
import React, { useState, useContext } from 'react';

const { useEffect, useRef } = React;

function App() {
  // custom globe material
  const globeMaterial = new THREE.MeshPhongMaterial();
  globeMaterial.bumpScale = 10;
  new THREE.TextureLoader().load('https:////unpkg.com/three-globe/example/img/earth-water.png', texture => {
    globeMaterial.specularMap = texture;
    globeMaterial.specular = new THREE.Color('grey');
    globeMaterial.shininess = 15;
  });

  const globeEl = useRef();

  useEffect(() => {
    setTimeout(() => { // wait for scene to be populated (asynchronously)
      const directionalLight = globeEl.current.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
  }, []);

  return <Globe
    ref={globeEl}
    globeMaterial={globeMaterial}
    globeImageUrl="https://object-arbutus.cloud.computecanada.ca/bq-io/io/gbif-heatmaps/all_gbif_hr.jpeg"
    bumpImageUrl="https:////unpkg.com/three-globe/example/img/earth-topology.png"
    backgroundImageUrl="https:////unpkg.com/three-globe/example/img/night-sky.png"
  />;

}
export default App;