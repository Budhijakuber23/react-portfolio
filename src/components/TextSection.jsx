import { Text } from "@react-three/drei"
export const TextSection =({title, subtitle, ...props}) =>{
    return(
        <group {...props}>
            {
                !!title&&(
                    <Text
                    color={'white'}
                    anchorX={"left"}
                    anchorY="bottom"
                    fontSize={0.52}
                    maxWidth={2.5}
                    font="sans-serif"
                    lineHeight={1}
                    >
                       {title}
                    </Text>
                )
            }

            <Text
            color={'white'}
            anchorX={"left"}
            anchorY="middle"
            fontSize={0.2}
            maxWidth={2.5}
            font="sans-serif"
            >
            {subtitle}
            </Text>
        </group>
    )
}