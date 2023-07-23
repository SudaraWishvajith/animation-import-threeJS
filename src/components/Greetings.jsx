/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/greetings.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Greetings = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/greetings.glb')
  const { actions, names } = useAnimations(animations, group)
  console.log(names);

  useEffect(() => {
    actions[names[1]].fadeIn(0.001).play();
  },[]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.007}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh castShadow name="Body" geometry={nodes.Body.geometry} material={materials.Bodymat} skeleton={nodes.Body.skeleton} />
          <skinnedMesh castShadow name="Bottoms" geometry={nodes.Bottoms.geometry} material={materials.Bottommat} skeleton={nodes.Bottoms.skeleton} />
          <skinnedMesh castShadow name="Eyelashes" geometry={nodes.Eyelashes.geometry} material={materials.Eyelashmat} skeleton={nodes.Eyelashes.skeleton} />
          <skinnedMesh castShadow name="Eyes" geometry={nodes.Eyes.geometry} material={materials.Bodymat} skeleton={nodes.Eyes.skeleton} />
          <skinnedMesh castShadow name="Hair" geometry={nodes.Hair.geometry} material={materials.Hairmat} skeleton={nodes.Hair.skeleton} />
          <skinnedMesh castShadow name="Shoes" geometry={nodes.Shoes.geometry} material={materials.Shoesmat} skeleton={nodes.Shoes.skeleton} />
          <skinnedMesh castShadow name="Tops" geometry={nodes.Tops.geometry} material={materials.Topmat} skeleton={nodes.Tops.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Greetings;

useGLTF.preload('./models/greetings.glb')
