import React, { useRef, useMemo } from "react";
import { Float, OrbitControls, Line, PerspectiveCamera, useScroll, Text } from "@react-three/drei";
import { Background } from "./Background.jsx";
import { Airplane } from "./Airplane.jsx";
import { Cloud } from "./Cloud.jsx";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { TextSection } from "./TextSection.jsx";
import { Euler } from "three";
const LINE_NB_POINTS = 1000;
const CURVE_DIST = 250; 
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.002;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DIST= 42;
export const Experience = () => {

  const curvePoints = useMemo(
    ()=>[
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -1*CURVE_DIST),
      new THREE.Vector3(100, 0, -2*CURVE_DIST),
      new THREE.Vector3(-100 , 0, -3*CURVE_DIST),
      new THREE.Vector3(100, 0, -4*CURVE_DIST),
      new THREE.Vector3(0, 0, -5*CURVE_DIST),
      new THREE.Vector3(0, 0, -6*CURVE_DIST),
      new THREE.Vector3(0, 0, -7*CURVE_DIST),
      new THREE.Vector3(0, 0, -8*CURVE_DIST),
    ], []);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints,
      false,
      "catmullrom",
      0.5)
  }, [])

  const textSections = useMemo(()=>{
    return [


      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[0].x -5,
          curvePoints[0].y,
          curvePoints[0].z - 15
        ),
        title:'',
        subtitle:`"Welcome to my journey: Scroll to explore"`
      },
//adding text sections here 
    {
      cameraRailDist: -1,
      position: new Vector3(
        curvePoints[1].x -3,
        curvePoints[1].y,
        curvePoints[1].z
      ),
      title:'',
      subtitle:`"A learning Developer, familiar with basic HTML, CSS, JS, React"`
    },

    {
      cameraRailDist: -1,
      position: new Vector3(
        curvePoints[2].x -2,
        curvePoints[2].y,
        curvePoints[2].z
      ),
      subtitle:`"An undergraduate student in Computer Science and Applied Mathematics "`
    },

    {
      cameraRailDist: -1,
      position: new Vector3(
        curvePoints[3].x -1,
        curvePoints[3].y,
        curvePoints[3].z
      ),
      subtitle:`"Co-ordinator Art Society IIIT Delhi, and art lover too ;)"`
    },

    {
      cameraRailDist: -1,
      position: new Vector3(
        curvePoints[4].x -3,
        curvePoints[4].y,
        curvePoints[4].z
      ),
      subtitle:`"A long journey ahead, keep in touch, Instagram: budhijakuber, email: kuber21260@iiitd.ac.in"`
    },

    ]
  }, [])


  const clouds = useMemo(
    () => [
      {
        position: new Vector3(-3.9, -3.2, -7),
      },
      // STARTING
      {
        position: new Vector3(-3.9, 4.2, -7),
      },
      {
        position: new Vector3(10.5, -4, -20),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(-18, 0.2, -88),
        rotation: new Euler(-Math.PI / 5, Math.PI / 6, 0),
      },
      {
        scale: new Vector3(2.5, 2.5, 2.5),
        position: new Vector3(10, -1.2, -52),
      },
      // FIRST POINT
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[1].x + 10,
          curvePoints[1].y - 4,
          curvePoints[1].z + 64
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[1].x - 20,
          curvePoints[1].y + 4,
          curvePoints[1].z + 28
        ),
        rotation: new Euler(0, Math.PI / 7, 0),
      },
      {
        rotation: new Euler(0, Math.PI / 7, Math.PI / 5),
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x - 13,
          curvePoints[1].y + 4,
          curvePoints[1].z - 62
        ),
      },
      {
        rotation: new Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x + 54,
          curvePoints[1].y + 2,
          curvePoints[1].z - 82
        ),
      },
      {
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x + 8,
          curvePoints[1].y - 14,
          curvePoints[1].z - 22
        ),
      },
      // SECOND POINT
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[2].x + 6,
          curvePoints[2].y - 7,
          curvePoints[2].z + 50
        ),
      },
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[2].x - 2,
          curvePoints[2].y + 4,
          curvePoints[2].z - 26
        ),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[2].x + 12,
          curvePoints[2].y + 1,
          curvePoints[2].z - 86
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      // THIRD POINT
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[3].x + 3,
          curvePoints[3].y - 10,
          curvePoints[3].z + 50
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[3].x - 10,
          curvePoints[3].y,
          curvePoints[3].z + 30
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[3].x - 20,
          curvePoints[3].y - 5,
          curvePoints[3].z - 8
        ),
        rotation: new Euler(Math.PI, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[3].x + 0,
          curvePoints[3].y - 5,
          curvePoints[3].z - 98
        ),
        rotation: new Euler(0, Math.PI / 3, 0),
      },
      // FOURTH POINT
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[4].x + 3,
          curvePoints[4].y - 10,
          curvePoints[4].z + 2
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[4].x + 24,
          curvePoints[4].y - 6,
          curvePoints[4].z - 42
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[4].x - 4,
          curvePoints[4].y + 9,
          curvePoints[4].z - 62
        ),
        rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
      },
      // FINAL
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[7].x + 12,
          curvePoints[7].y - 5,
          curvePoints[7].z + 60
        ),
        rotation: new Euler(-Math.PI / 4, -Math.PI / 6, 0),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[7].x - 12,
          curvePoints[7].y + 5,
          curvePoints[7].z + 120
        ),
        rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[7].x,
          curvePoints[7].y,
          curvePoints[7].z
        ),
        rotation: new Euler(0, 0, 0),
      },
    ],
    []
  );

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve])

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.02, 0);
    shape.lineTo(0.02, 0);
    shape.lineTo(-0.01, 0.01);
    shape.closePath();
    return shape;
  }, []);

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0,scroll.offset)
    let friction = 1;
    let resetCamerRail = true;
    textSections.forEach((textSection) =>{
      const distance = textSection.position.distanceTo(cameraGroup.current.position);

      if(distance < FRICTION_DIST){
        friction = Math.max(distance/FRICTION_DIST, 0.1);
        const targetCameraRailPosition = new Vector3(
          (1-distance/FRICTION_DIST)*textSection.cameraRailDist,0,0,
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCamerRail = false;
      }
    });

    if(resetCamerRail){
      const targetCameraRailPosition = new Vector3(0,0,0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    let lerpedScrollOffset = THREE.MathUtils.lerp(lastScroll.current, scrollOffset, delta* friction);

    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;


    // const scrollOffset = Math.max(0, scroll.offset);

    // const curPointIndex = Math.min(Math.round(scroll.offset * linePoints.length), linePoints.length - 1)
    const curpoint = curve.getPoint(lerpedScrollOffset);

    cameraGroup.current.position.copy(curpoint.lerp(curpoint, delta*24));

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    )

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    )
    const targetLookAt = new THREE.Vector3()
    .subVectors(curpoint, lookAtPoint)
    .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt,delta*24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );


      const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_AIRPLANE);
      const nonLeprLookAt = new THREE.Group();
      nonLeprLookAt.position.copy(curpoint);
      nonLeprLookAt.lookAt(nonLeprLookAt.position.clone().add(targetLookAt));

      tangent.applyAxisAngle(
        new THREE.Vector3(0,1,0),
        -nonLeprLookAt.rotation.y
      )

      let angle = Math.atan2(-tangent.z, tangent.x);
          angle = -Math.PI/2 + angle;

      let angledegrees= (angle * 180) / Math.PI;
      angledegrees *=2.4;

      if(angledegrees < 0){
        angledegrees = Math.max(angledegrees, -AIRPLANE_MAX_ANGLE);
      }
      if(angledegrees > 0){
        angledegrees = Math.min(angledegrees, AIRPLANE_MAX_ANGLE);
      }

      angle = (angledegrees * Math.PI)/180;

      const targetAirplaneQuanterion  = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          airplane.current.rotation.x,
          airplane.current.rotation.y,
          angle
        )
      )
      airplane.current.quaternion.slerp(targetAirplaneQuanterion, delta*2);
  });
  const airplane = useRef()

  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      <group ref={cameraGroup}>
      <Background />
      <group ref={cameraRail}>
      <PerspectiveCamera position={[0,0,5]} fov={30} makeDefault/>
      </group>
      <group ref={airplane}>
      <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5} >
      <Airplane rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} position-y={0.1} />
      </Float>
      </group>
      </group>

      {textSections.map((textSection, index) =>(
        <TextSection {...textSection} key={index}/>
      ))}

      <group position-y={-2}>


      {/* <Line points={linePoints} color={"white"} opacity={0.7} transparent lineWidth={16} /> */}
      <mesh><extrudeGeometry args={[shape,{
        steps:LINE_NB_POINTS,
        bevelEnabled:false,
        extrudePath: curve,
      }]}/>
      <meshStandardMaterial color={'white'} opacity={1} transparent />
      </mesh>
      </group>
      {/* <Cloud key={1} opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <Cloud key={2} opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />
      <Cloud key={3} opacity={0.7} scale={[0.3, 0.3, 0.4]} position={[2, -0.2, -2]} rotation-y={Math.PI / 9} />
      <Cloud key={4} opacity={0.7} scale={[0.3, 0.3, 0.4]} position={[1, -0.2, -12]} rotation-y={Math.PI / 9} />
      <Cloud key={5} opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1, 1, -53]} />
      <Cloud key={6} opacity={0.6} scale={[0.4, 0.4, 0.4]} position={[2, -0.3, -18]} />
      <Cloud key={7} opacity={0.4} scale={[0.2, 0.4, 0.2]} position={[4, 1, -10]} /> */}
      {/* <Cloud key={8} opacity={0.8} scale={[0.3, 0.3, 0.3]} position={[0, -0.1, -7]} /> */}
      {/* <Cloud key={9} opacity={0.6} scale={[0.4, 0.2, 0.4]} position={[-5, 0.5, -30]} rotation-y={Math.PI / 6} />
      <Cloud key={10} opacity={0.3} scale={[0.2, 0.5, 0.2]} position={[-2, 1, -50]} />
      <Cloud key={11} opacity={0.7} scale={[0.3, 0.2, 0.3]} position={[2, 1, -30]} /> */}
            {clouds.map((cloud, index) => (
        <Cloud {...cloud} key={index} />
      ))}
    </>
  );
};
